"use client";

import { questionBank } from "@/lib/questions";

interface CategorySelectProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
  onStart: () => void;
}

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

export default function CategorySelect({ selectedCategory, onSelect, onStart }: CategorySelectProps) {
  const categories = Object.keys(questionBank);

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
            <span className="text-xl block mb-1">{categoryEmojis[cat] || "📚"}</span>
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
