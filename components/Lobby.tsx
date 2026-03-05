"use client";

import { useState } from "react";

interface LobbyProps {
  roomCode: string;
  isHost: boolean;
  player1Name: string;
  player2Name: string | null;
  onSelectCategory: (category: string) => void;
  onStartGame: () => void;
  selectedCategory: string;
}

export default function Lobby({
  roomCode,
  isHost,
  player1Name,
  player2Name,
  onSelectCategory,
  onStartGame,
  selectedCategory,
}: LobbyProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-lg mx-auto">
      {/* Room code */}
      <div className="text-center">
        <p className="font-body text-sm text-gray-400 mb-2 uppercase tracking-wider">Room Code</p>
        <div className="flex items-center gap-3">
          <span className="font-heading text-5xl md:text-6xl text-neon tracking-[0.3em]">
            {roomCode}
          </span>
          <button
            onClick={copyCode}
            className="bg-card border border-border rounded-lg p-2 hover:border-neon transition-colors"
            title="Copy room code"
          >
            {copied ? (
              <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Players */}
      <div className="w-full bg-card border border-border rounded-2xl p-6">
        <h3 className="font-heading text-xl text-white mb-4 text-center">PLAYERS</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-neon/10 border border-neon/30">
            <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center">
              <span className="font-heading text-bg text-sm">P1</span>
            </div>
            <span className="font-body text-white">{player1Name}</span>
            <span className="ml-auto text-xs text-neon font-body">HOST</span>
          </div>
          <div className={`flex items-center gap-3 p-3 rounded-xl border ${
            player2Name ? "bg-neon/10 border-neon/30" : "bg-card border-border border-dashed"
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              player2Name ? "bg-neon" : "bg-border"
            }`}>
              <span className={`font-heading text-sm ${player2Name ? "text-bg" : "text-gray-500"}`}>P2</span>
            </div>
            <span className={`font-body ${player2Name ? "text-white" : "text-gray-500"}`}>
              {player2Name || "Waiting for opponent..."}
            </span>
          </div>
        </div>
      </div>

      {/* Category select + Start (host only, after P2 joins) */}
      {isHost && player2Name && (
        <CategorySelect
          selectedCategory={selectedCategory}
          onSelect={onSelectCategory}
          onStart={onStartGame}
        />
      )}

      {!isHost && (
        <p className="font-body text-gray-400 text-sm animate-pulse">
          Waiting for host to start the game...
        </p>
      )}
    </div>
  );
}

function CategorySelect({
  selectedCategory,
  onSelect,
  onStart,
}: {
  selectedCategory: string;
  onSelect: (c: string) => void;
  onStart: () => void;
}) {
  const categories = [
    "General Knowledge",
    "Science",
    "History",
    "Sport",
    "Geography",
    "Music",
    "Movies & TV",
    "Technology",
    "Engineering",
  ];

  const categoryEmojis: Record<string, string> = {
    "General Knowledge": "🧠",
    "Science": "🔬",
    "History": "📜",
    "Sport": "⚽",
    "Geography": "🌍",
    "Music": "🎵",
    "Movies & TV": "🎬",
    "Technology": "💻",
    "Engineering": "⚙️",
  };

  return (
    <div className="w-full space-y-4">
      <h3 className="font-heading text-xl text-white text-center">SELECT CATEGORY</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`p-3 rounded-xl border-2 font-body text-sm transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-neon/20 border-neon text-neon"
                : "bg-card border-border text-gray-300 hover:border-neon/50"
            }`}
          >
            <span className="text-xl block mb-1">{categoryEmojis[cat]}</span>
            {cat}
          </button>
        ))}
      </div>
      <button
        onClick={onStart}
        disabled={!selectedCategory}
        className={`w-full py-4 rounded-xl font-heading text-xl tracking-wider transition-all duration-300 ${
          selectedCategory
            ? "bg-neon text-bg hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] active:scale-[0.98]"
            : "bg-border text-gray-600 cursor-not-allowed"
        }`}
      >
        START GAME
      </button>
    </div>
  );
}
