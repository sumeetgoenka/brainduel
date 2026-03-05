"use client";

import { GameState } from "@/lib/gameLogic";

interface RevealScreenProps {
  gameState: GameState;
  countdown: number;
}

export default function RevealScreen({ gameState, countdown }: RevealScreenProps) {
  const { question, players } = gameState;
  const p1 = players.player1;
  const p2 = players.player2!;

  if (!question) return null;

  const p1Correct = p1.answer === question.correct;
  const p2Correct = p2.answer === question.correct;
  const p1Bet = p1.bet || 1;
  const p2Bet = p2.bet || 1;
  const p1Delta = p1Correct ? `+${p1Bet}` : `-${p1Bet}`;
  const p2Delta = p2Correct ? `+${p2Bet}` : `-${p2Bet}`;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Correct answer */}
      <div className="bg-neon/10 border border-neon/30 rounded-2xl p-4 text-center">
        <p className="font-body text-sm text-neon mb-1">CORRECT ANSWER</p>
        <p className="font-body text-xl text-white">
          {question.options[question.correct]}
        </p>
      </div>

      {/* Player results */}
      <div className="grid grid-cols-2 gap-4">
        {/* Player 1 */}
        <div className={`rounded-2xl p-4 border-2 text-center ${
          p1Correct ? "bg-neon/10 border-neon/40" : "bg-danger/10 border-danger/40"
        }`}>
          <p className="font-body text-sm text-gray-400 mb-2 truncate">{p1.name}</p>
          <div className="text-3xl mb-2">{p1Correct ? "✓" : "✗"}</div>
          <p className="font-body text-sm text-gray-400 mb-1">
            Answered: {p1.answer !== null ? question.options[p1.answer] : "No answer"}
          </p>
          <p className="font-body text-sm text-gray-400 mb-1">Bet: {p1Bet}</p>
          <p className={`font-heading text-2xl ${p1Correct ? "text-neon" : "text-danger"}`}>
            {p1Delta}
          </p>
          <p className="font-heading text-lg text-white mt-1">
            Total: {p1.score}
          </p>
        </div>

        {/* Player 2 */}
        <div className={`rounded-2xl p-4 border-2 text-center ${
          p2Correct ? "bg-neon/10 border-neon/40" : "bg-danger/10 border-danger/40"
        }`}>
          <p className="font-body text-sm text-gray-400 mb-2 truncate">{p2.name}</p>
          <div className="text-3xl mb-2">{p2Correct ? "✓" : "✗"}</div>
          <p className="font-body text-sm text-gray-400 mb-1">
            Answered: {p2.answer !== null ? question.options[p2.answer] : "No answer"}
          </p>
          <p className="font-body text-sm text-gray-400 mb-1">Bet: {p2Bet}</p>
          <p className={`font-heading text-2xl ${p2Correct ? "text-neon" : "text-danger"}`}>
            {p2Delta}
          </p>
          <p className="font-heading text-lg text-white mt-1">
            Total: {p2.score}
          </p>
        </div>
      </div>

      {/* Countdown to next */}
      <div className="text-center">
        <p className="font-body text-sm text-gray-500">
          Next question in <span className="text-neon font-heading text-xl">{countdown}</span>
        </p>
      </div>
    </div>
  );
}
