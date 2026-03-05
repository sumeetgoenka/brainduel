"use client";

interface ScoreBoardProps {
  player1Name: string;
  player2Name: string;
  player1Score: number;
  player2Score: number;
  currentPlayer: "player1" | "player2";
}

export default function ScoreBoard({
  player1Name,
  player2Name,
  player1Score,
  player2Score,
  currentPlayer,
}: ScoreBoardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
        {/* Player 1 */}
        <div className={`flex-1 text-center ${currentPlayer === "player1" ? "opacity-100" : "opacity-70"}`}>
          <p className="font-body text-xs md:text-sm text-gray-400 truncate uppercase tracking-wider">
            {player1Name}
            {currentPlayer === "player1" && (
              <span className="text-neon ml-1">(You)</span>
            )}
          </p>
          <p className={`font-heading text-4xl md:text-5xl mt-1 ${player1Score >= 0 ? "text-white" : "text-danger"}`}>
            {player1Score}
          </p>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center px-4 md:px-8">
          <span className="font-heading text-2xl md:text-3xl text-neon">VS</span>
        </div>

        {/* Player 2 */}
        <div className={`flex-1 text-center ${currentPlayer === "player2" ? "opacity-100" : "opacity-70"}`}>
          <p className="font-body text-xs md:text-sm text-gray-400 truncate uppercase tracking-wider">
            {player2Name}
            {currentPlayer === "player2" && (
              <span className="text-neon ml-1">(You)</span>
            )}
          </p>
          <p className={`font-heading text-4xl md:text-5xl mt-1 ${player2Score >= 0 ? "text-white" : "text-danger"}`}>
            {player2Score}
          </p>
        </div>
      </div>
    </div>
  );
}
