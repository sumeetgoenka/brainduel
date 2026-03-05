"use client";

interface BetButtonsProps {
  onBet: (bet: 1 | 2 | 3) => void;
  locked: boolean;
  currentBet: number | null;
}

export default function BetButtons({ onBet, locked, currentBet }: BetButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="font-heading text-2xl text-white tracking-wide">PLACE YOUR BET</h3>
      <div className="flex gap-6">
        {([1, 2, 3] as const).map((value) => (
          <button
            key={value}
            onClick={() => !locked && onBet(value)}
            disabled={locked}
            className={`
              relative w-20 h-20 rounded-full font-heading text-3xl
              border-4 transition-all duration-300 transform
              ${locked && currentBet === value
                ? "bg-neon text-bg border-neon scale-110 shadow-[0_0_30px_rgba(0,255,135,0.5)]"
                : locked
                ? "bg-card text-gray-600 border-gray-700 cursor-not-allowed opacity-40"
                : "bg-card text-white border-border hover:border-neon hover:text-neon hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,135,0.3)] active:scale-95 cursor-pointer"
              }
            `}
          >
            {/* Poker chip rings */}
            <span className="absolute inset-2 rounded-full border-2 border-dashed border-current opacity-30" />
            {value}
          </button>
        ))}
      </div>
      {locked && (
        <p className="text-neon font-body text-sm animate-pulse">
          ✓ Locked in — Bet {currentBet}
        </p>
      )}
    </div>
  );
}
