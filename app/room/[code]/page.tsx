"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  GameState,
  subscribeToRoom,
  startGame,
  placeBet,
  submitAnswer,
  advanceToAnswering,
  revealAnswers,
  nextQuestion,
  resetRoom,
} from "@/lib/gameLogic";
import Lobby from "@/components/Lobby";
import ScoreBoard from "@/components/ScoreBoard";
import BetButtons from "@/components/BetButtons";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import RevealScreen from "@/components/RevealScreen";

export default function RoomPage() {
  const params = useParams();
  const router = useRouter();
  const code = params.code as string;

  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerRole, setPlayerRole] = useState<"player1" | "player2">("player1");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [revealCountdown, setRevealCountdown] = useState(3);
  const [timerRunning, setTimerRunning] = useState(false);

  const prevStatusRef = useRef<string>("");
  const revealTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionLockRef = useRef(false);
  const gameStateRef = useRef<GameState | null>(null);

  // Keep ref in sync
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  // Load player role from session
  useEffect(() => {
    const role = sessionStorage.getItem("playerRole") as "player1" | "player2";
    if (role) setPlayerRole(role);
    else router.push("/");
  }, [router]);

  // Subscribe to Firebase room
  useEffect(() => {
    const unsubscribe = subscribeToRoom(code, (data) => {
      if (!data) {
        router.push("/");
        return;
      }
      setGameState(data);
    });

    return () => unsubscribe();
  }, [code, router]);

  // Game Master logic (Player 1 only)
  useEffect(() => {
    if (!gameState || playerRole !== "player1") return;
    if (transitionLockRef.current) return;

    const { status, players } = gameState;
    const p1 = players.player1;
    const p2 = players.player2;

    if (!p2) return;

    // Both players bet → advance to answering
    if (status === "betting" && p1.bet !== null && p2.bet !== null) {
      transitionLockRef.current = true;
      advanceToAnswering(code).then(() => {
        transitionLockRef.current = false;
      });
    }

    // Both players answered → reveal
    if (status === "answering" && p1.answer !== null && p2.answer !== null) {
      transitionLockRef.current = true;
      revealAnswers(code, gameState).then(() => {
        transitionLockRef.current = false;
      });
    }
  }, [gameState, playerRole, code]);

  // Track status changes for timer control
  useEffect(() => {
    if (!gameState) return;
    const { status } = gameState;

    if (status !== prevStatusRef.current) {
      prevStatusRef.current = status;

      if (status === "answering") {
        setTimerRunning(true);
      } else {
        setTimerRunning(false);
      }

      if (status === "reveal") {
        setRevealCountdown(3);

        // Clear any existing reveal timer
        if (revealTimerRef.current) {
          clearInterval(revealTimerRef.current);
        }

        let count = 3;
        revealTimerRef.current = setInterval(() => {
          count -= 1;
          setRevealCountdown(count);
          if (count <= 0) {
            clearInterval(revealTimerRef.current!);
            revealTimerRef.current = null;
            // Game master advances
            if (playerRole === "player1" && gameStateRef.current) {
              nextQuestion(code, gameStateRef.current);
            }
          }
        }, 1000);
      }
    }

    return () => {
      if (revealTimerRef.current) {
        clearInterval(revealTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState?.status, playerRole, code]);

  // Timer timeout handler (Game master handles)
  const handleTimeout = useCallback(() => {
    if (!gameState || playerRole !== "player1") return;
    setTimerRunning(false);
    revealAnswers(code, gameState);
  }, [gameState, playerRole, code]);

  // Action handlers
  const handleStartGame = async () => {
    if (!selectedCategory) return;
    await startGame(code, selectedCategory);
  };

  const handleBet = async (bet: 1 | 2 | 3) => {
    await placeBet(code, playerRole, bet);
  };

  const handleAnswer = async (answerIndex: number) => {
    await submitAnswer(code, playerRole, answerIndex);
  };

  const handlePlayAgain = async () => {
    await resetRoom(code);
    setSelectedCategory("");
  };

  // Loading state
  if (!gameState) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-heading text-3xl text-neon animate-pulse">CONNECTING...</p>
        </div>
      </main>
    );
  }

  const { status, players, question, currentQuestion } = gameState;
  const me = players[playerRole] || players.player1;
  const isHost = playerRole === "player1";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-6">
        {/* WAITING STATUS */}
        {status === "waiting" && (
          <div className="state-transition w-full">
            <Lobby
              roomCode={code}
              isHost={isHost}
              player1Name={players.player1.name}
              player2Name={players.player2?.name || null}
              onSelectCategory={setSelectedCategory}
              onStartGame={handleStartGame}
              selectedCategory={selectedCategory}
            />
          </div>
        )}

        {/* BETTING STATUS */}
        {status === "betting" && question && (
          <div className="state-transition w-full flex flex-col items-center gap-6">
            <ScoreBoard
              player1Name={players.player1.name}
              player2Name={players.player2?.name || "???"}
              player1Score={players.player1.score}
              player2Score={players.player2?.score || 0}
              currentPlayer={playerRole}
            />

            <QuestionCard
              question={question}
              questionNumber={currentQuestion}
              totalQuestions={10}
              showOptions={false}
              selectedAnswer={null}
              locked={false}
              revealCorrect={false}
            />

            <BetButtons
              onBet={handleBet}
              locked={me.bet !== null}
              currentBet={me.bet}
            />

            {me.bet !== null && (
              <p className="font-body text-gray-400 text-sm animate-pulse">
                <span className="dot-pulse mr-1" /> Waiting for opponent...
              </p>
            )}
          </div>
        )}

        {/* ANSWERING STATUS */}
        {status === "answering" && question && (
          <div className="state-transition w-full flex flex-col items-center gap-6">
            <ScoreBoard
              player1Name={players.player1.name}
              player2Name={players.player2?.name || "???"}
              player1Score={players.player1.score}
              player2Score={players.player2?.score || 0}
              currentPlayer={playerRole}
            />

            <Timer
              seconds={15}
              isRunning={timerRunning}
              onTimeout={handleTimeout}
            />

            <QuestionCard
              question={question}
              questionNumber={currentQuestion}
              totalQuestions={10}
              showOptions={true}
              selectedAnswer={me.answer}
              locked={me.answer !== null}
              revealCorrect={false}
              onAnswer={handleAnswer}
            />

            {me.answer !== null && (
              <p className="font-body text-gray-400 text-sm animate-pulse">
                <span className="dot-pulse mr-1" /> Waiting for opponent...
              </p>
            )}
          </div>
        )}

        {/* REVEAL STATUS */}
        {status === "reveal" && question && (
          <div className="state-transition w-full flex flex-col items-center gap-6">
            <ScoreBoard
              player1Name={players.player1.name}
              player2Name={players.player2?.name || "???"}
              player1Score={players.player1.score}
              player2Score={players.player2?.score || 0}
              currentPlayer={playerRole}
            />

            <QuestionCard
              question={question}
              questionNumber={currentQuestion}
              totalQuestions={10}
              showOptions={true}
              selectedAnswer={me.answer}
              locked={true}
              revealCorrect={true}
              playerAnswers={{
                p1: players.player1.answer,
                p2: players.player2?.answer ?? null,
              }}
            />

            <RevealScreen gameState={gameState} countdown={revealCountdown} />
          </div>
        )}

        {/* FINISHED STATUS */}
        {status === "finished" && (
          <div className="state-transition w-full flex flex-col items-center gap-8">
            {/* Winner announcement */}
            <div className="text-center">
              <p className="font-body text-sm text-gray-400 uppercase tracking-widest mb-2">Game Over</p>
              {players.player1.score > (players.player2?.score || 0) ? (
                <>
                  <h2 className="font-heading text-5xl md:text-7xl text-neon neon-glow">
                    {players.player1.name.toUpperCase()} WINS!
                  </h2>
                </>
              ) : players.player1.score < (players.player2?.score || 0) ? (
                <>
                  <h2 className="font-heading text-5xl md:text-7xl text-neon neon-glow">
                    {players.player2?.name.toUpperCase()} WINS!
                  </h2>
                </>
              ) : (
                <h2 className="font-heading text-5xl md:text-7xl text-yellow-400">
                  IT&apos;S A DRAW!
                </h2>
              )}
            </div>

            {/* Final scores */}
            <div className="w-full bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="font-body text-sm text-gray-400 mb-1">{players.player1.name}</p>
                  <p className={`font-heading text-6xl ${
                    players.player1.score >= (players.player2?.score || 0) ? "text-neon" : "text-white"
                  }`}>
                    {players.player1.score}
                  </p>
                </div>
                <div className="px-6">
                  <span className="font-heading text-3xl text-gray-600">—</span>
                </div>
                <div className="text-center flex-1">
                  <p className="font-body text-sm text-gray-400 mb-1">{players.player2?.name}</p>
                  <p className={`font-heading text-6xl ${
                    (players.player2?.score || 0) >= players.player1.score ? "text-neon" : "text-white"
                  }`}>
                    {players.player2?.score}
                  </p>
                </div>
              </div>
            </div>

            {/* Play Again */}
            <button
              onClick={handlePlayAgain}
              className="w-full max-w-sm py-4 rounded-xl bg-neon text-bg font-heading text-2xl tracking-wider
                hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] transition-all duration-300 active:scale-[0.98]"
            >
              PLAY AGAIN
            </button>

            <button
              onClick={() => router.push("/")}
              className="font-body text-gray-500 text-sm hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
