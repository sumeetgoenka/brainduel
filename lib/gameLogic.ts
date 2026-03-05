import { ref, set, update, onValue, get } from "firebase/database";
import { getDb } from "./firebase";
import { Question, questionBank } from "./questions";

export interface PlayerState {
  name: string;
  score: number;
  bet: null | 1 | 2 | 3;
  answer: null | number;
  ready: boolean;
}

export interface GameState {
  roomCode: string;
  status: "waiting" | "betting" | "answering" | "reveal" | "finished";
  category: string;
  currentQuestion: number;
  question: Question | null;
  players: {
    player1: PlayerState;
    player2: PlayerState | null;
  };
  timer: number;
  questionQueue: Question[];
  createdAt: number;
}

export function generateRoomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function selectQuestions(category: string, count: number = 10): Question[] {
  const questions = questionBank[category];
  if (!questions) return [];
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count);
}

export async function createRoom(playerName: string): Promise<string> {
  const roomCode = generateRoomCode();
  const roomRef = ref(getDb(), `rooms/${roomCode}`);
  const gameState: GameState = {
    roomCode,
    status: "waiting",
    category: "",
    currentQuestion: 0,
    question: null,
    players: {
      player1: {
        name: playerName,
        score: 10,
        bet: null,
        answer: null,
        ready: false,
      },
      player2: null,
    },
    timer: 15,
    questionQueue: [],
    createdAt: Date.now(),
  };
  await set(roomRef, gameState);
  return roomCode;
}

export async function joinRoom(roomCode: string, playerName: string): Promise<boolean> {
  const roomRef = ref(getDb(), `rooms/${roomCode}`);
  const snapshot = await get(roomRef);
  if (!snapshot.exists()) return false;
  const data = snapshot.val() as GameState;
  
  // Check if room expired (1 hour)
  if (Date.now() - data.createdAt > 3600000) return false;
  
  // Check if room is full
  if (data.players.player2) return false;
  
  await update(ref(getDb(), `rooms/${roomCode}/players`), {
    player2: {
      name: playerName,
      score: 10,
      bet: null,
      answer: null,
      ready: false,
    },
  });
  return true;
}

export async function startGame(roomCode: string, category: string) {
  const questions = selectQuestions(category);
  const roomRef = ref(getDb(), `rooms/${roomCode}`);
  await update(roomRef, {
    status: "betting",
    category,
    currentQuestion: 1,
    question: questions[0],
    questionQueue: questions,
    timer: 15,
  });
}

export async function placeBet(roomCode: string, player: "player1" | "player2", bet: 1 | 2 | 3) {
  await update(ref(getDb(), `rooms/${roomCode}/players/${player}`), { bet });
}

export async function submitAnswer(roomCode: string, player: "player1" | "player2", answer: number) {
  await update(ref(getDb(), `rooms/${roomCode}/players/${player}`), { answer });
}

export async function advanceToAnswering(roomCode: string) {
  await update(ref(getDb(), `rooms/${roomCode}`), { status: "answering", timer: 15 });
}

export function calculateScore(currentScore: number, bet: number, isCorrect: boolean): number {
  return isCorrect ? currentScore + bet : currentScore - bet;
}

export async function revealAnswers(roomCode: string, gameState: GameState) {
  const { players, question } = gameState;
  const p1 = players.player1;
  const p2 = players.player2!;
  
  const p1Correct = p1.answer === question?.correct;
  const p2Correct = p2.answer === question?.correct;
  
  const p1Bet = p1.bet || 1;
  const p2Bet = p2.bet || 1;
  
  const p1NewScore = calculateScore(p1.score, p1Bet, p1Correct);
  const p2NewScore = calculateScore(p2.score, p2Bet, p2Correct);
  
  await update(ref(getDb(), `rooms/${roomCode}`), {
    status: "reveal",
    "players/player1/score": p1NewScore,
    "players/player2/score": p2NewScore,
  });
}

export async function nextQuestion(roomCode: string, gameState: GameState) {
  const nextQ = gameState.currentQuestion + 1;
  
  if (nextQ > 10) {
    await update(ref(getDb(), `rooms/${roomCode}`), { status: "finished" });
    return;
  }
  
  const question = gameState.questionQueue[nextQ - 1];
  await update(ref(getDb(), `rooms/${roomCode}`), {
    status: "betting",
    currentQuestion: nextQ,
    question,
    timer: 15,
    "players/player1/bet": null,
    "players/player1/answer": null,
    "players/player2/bet": null,
    "players/player2/answer": null,
  });
}

export async function resetRoom(roomCode: string) {
  const roomRef = ref(getDb(), `rooms/${roomCode}`);
  await update(roomRef, {
    status: "waiting",
    category: "",
    currentQuestion: 0,
    question: null,
    questionQueue: [],
    timer: 15,
    "players/player1/score": 10,
    "players/player1/bet": null,
    "players/player1/answer": null,
    "players/player1/ready": false,
    "players/player2/score": 10,
    "players/player2/bet": null,
    "players/player2/answer": null,
    "players/player2/ready": false,
  });
}

export function subscribeToRoom(roomCode: string, callback: (data: GameState | null) => void) {
  const roomRef = ref(getDb(), `rooms/${roomCode}`);
  return onValue(roomRef, (snapshot) => {
    callback(snapshot.val());
  });
}
