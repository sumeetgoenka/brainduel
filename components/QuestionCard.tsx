"use client";

import { Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  showOptions: boolean;
  selectedAnswer: number | null;
  locked: boolean;
  revealCorrect: boolean;
  onAnswer?: (index: number) => void;
  playerAnswers?: { p1: number | null; p2: number | null };
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  showOptions,
  selectedAnswer,
  locked,
  revealCorrect,
  onAnswer,
  playerAnswers,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Question number badge */}
      <div className="flex justify-center mb-4">
        <span className="font-heading text-lg text-neon tracking-widest bg-neon/10 px-4 py-1 rounded-full border border-neon/30">
          QUESTION {questionNumber} OF {totalQuestions}
        </span>
      </div>

      {/* Question text */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
        <p className="font-body text-xl md:text-2xl text-white text-center leading-relaxed">
          {question.text}
        </p>
      </div>

      {/* Options */}
      {showOptions && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options.map((option, index) => {
            let bgClass = "bg-card border-border hover:border-neon/50 hover:bg-neon/5 cursor-pointer";
            let textClass = "text-white";

            if (revealCorrect) {
              if (index === question.correct) {
                bgClass = "bg-neon border-neon";
                textClass = "text-bg font-semibold";
              } else if (
                (playerAnswers?.p1 === index || playerAnswers?.p2 === index) &&
                index !== question.correct
              ) {
                bgClass = "bg-danger border-danger";
                textClass = "text-white";
              } else {
                bgClass = "bg-card border-border opacity-50";
              }
            } else if (locked) {
              if (selectedAnswer === index) {
                bgClass = "bg-neon/20 border-neon";
                textClass = "text-neon";
              } else {
                bgClass = "bg-card border-border opacity-50 cursor-not-allowed";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !locked && !revealCorrect && onAnswer?.(index)}
                disabled={locked || revealCorrect}
                className={`
                  ${bgClass} ${textClass}
                  border-2 rounded-xl p-4 font-body text-base md:text-lg
                  transition-all duration-300 text-left
                  ${!locked && !revealCorrect ? "active:scale-[0.98]" : ""}
                `}
              >
                <span className="font-heading text-lg mr-3 opacity-60">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
