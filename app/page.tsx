"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createRoom, joinRoom } from "@/lib/gameLogic";

type Mode = "idle" | "create" | "join";

export default function Home() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("idle");
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name.trim()) {
      setError("Enter your name");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const code = await createRoom(name.trim());
      sessionStorage.setItem("playerName", name.trim());
      sessionStorage.setItem("playerRole", "player1");
      router.push(`/room/${code}`);
    } catch {
      setError("Failed to create room. Check your connection.");
      setLoading(false);
    }
  };

  const handleJoin = async () => {
    if (!name.trim()) {
      setError("Enter your name");
      return;
    }
    if (!roomCode.trim() || roomCode.trim().length !== 6) {
      setError("Enter a valid 6-character room code");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const success = await joinRoom(roomCode.trim().toUpperCase(), name.trim());
      if (success) {
        sessionStorage.setItem("playerName", name.trim());
        sessionStorage.setItem("playerRole", "player2");
        router.push(`/room/${roomCode.trim().toUpperCase()}`);
      } else {
        setError("Room not found, full, or expired");
        setLoading(false);
      }
    } catch {
      setError("Failed to join room. Check your connection.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center">
          <h1 className="font-heading text-7xl md:text-9xl text-neon neon-glow tracking-wider">
            BRAIN
          </h1>
          <h1 className="font-heading text-7xl md:text-9xl text-white tracking-wider -mt-4">
            DUEL
          </h1>
          <p className="font-body text-gray-500 text-sm mt-2 tracking-widest uppercase">
            Real-time quiz battle
          </p>
        </div>

        {mode === "idle" && (
          <div className="flex flex-col gap-4 w-full state-transition">
            <button
              onClick={() => setMode("create")}
              className="w-full py-4 rounded-xl bg-neon text-bg font-heading text-2xl tracking-wider
                hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] transition-all duration-300 active:scale-[0.98]"
            >
              CREATE GAME
            </button>
            <button
              onClick={() => setMode("join")}
              className="w-full py-4 rounded-xl bg-card border-2 border-border text-white font-heading text-2xl tracking-wider
                hover:border-neon hover:text-neon transition-all duration-300 active:scale-[0.98]"
            >
              JOIN GAME
            </button>
          </div>
        )}

        {mode === "create" && (
          <div className="flex flex-col gap-4 w-full state-transition">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              className="w-full py-4 px-6 rounded-xl bg-card border-2 border-border text-white font-body text-lg
                placeholder:text-gray-600 focus:outline-none focus:border-neon transition-colors"
              autoFocus
            />
            {error && <p className="text-danger font-body text-sm text-center">{error}</p>}
            <button
              onClick={handleCreate}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-neon text-bg font-heading text-2xl tracking-wider
                hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] transition-all duration-300 active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "CREATING..." : "CREATE ROOM"}
            </button>
            <button
              onClick={() => { setMode("idle"); setError(""); }}
              className="font-body text-gray-500 text-sm hover:text-white transition-colors"
            >
              ← Back
            </button>
          </div>
        )}

        {mode === "join" && (
          <div className="flex flex-col gap-4 w-full state-transition">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              className="w-full py-4 px-6 rounded-xl bg-card border-2 border-border text-white font-body text-lg
                placeholder:text-gray-600 focus:outline-none focus:border-neon transition-colors"
              autoFocus
            />
            <input
              type="text"
              placeholder="Room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              maxLength={6}
              className="w-full py-4 px-6 rounded-xl bg-card border-2 border-border text-white font-heading text-2xl text-center tracking-[0.3em]
                placeholder:text-gray-600 placeholder:text-lg placeholder:tracking-normal placeholder:font-body
                focus:outline-none focus:border-neon transition-colors uppercase"
            />
            {error && <p className="text-danger font-body text-sm text-center">{error}</p>}
            <button
              onClick={handleJoin}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-neon text-bg font-heading text-2xl tracking-wider
                hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] transition-all duration-300 active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "JOINING..." : "JOIN ROOM"}
            </button>
            <button
              onClick={() => { setMode("idle"); setError(""); }}
              className="font-body text-gray-500 text-sm hover:text-white transition-colors"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
