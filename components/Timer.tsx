"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  seconds: number;
  isRunning: boolean;
  onTimeout: () => void;
}

export default function Timer({ seconds, isRunning, onTimeout }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / seconds) * circumference;
  const isUrgent = timeLeft <= 5;

  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTimeout]);

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="6"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={isUrgent ? "#ff3d3d" : "#00ff87"}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      {/* Timer text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-heading text-3xl ${
            isUrgent ? "text-danger animate-pulse" : "text-white"
          }`}
        >
          {timeLeft}
        </span>
      </div>
    </div>
  );
}
