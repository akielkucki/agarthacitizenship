"use client";

import { useState } from "react";
import { Mountain, Sparkles, TrendingUp, CheckCircle2, X } from "lucide-react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizProps = {
  questions: Question[];
  onComplete: (score: number) => void;
  onExit: () => void;
};

export default function Quiz({ questions, onComplete, onExit }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-indigo-400/20 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold font-[family-name:var(--font-cinzel)]">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Agartha Citizenship Test
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-sm text-blue-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <button
                onClick={onExit}
                className="text-blue-300 hover:text-blue-100 transition-colors"
                aria-label="Exit quiz"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800/50 rounded-full h-2.5 shadow-inner border border-blue-500/20 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-700 ease-out shadow-lg shadow-blue-500/50 animate-shimmer"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Score Badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 shadow-lg animate-slide-up">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-blue-300">Current Score:</span>
            <span className="font-bold text-cyan-300 tabular-nums">
              {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/30 overflow-hidden animate-scale-in">
          <div className="p-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/50 border border-blue-500/30 text-blue-300 text-sm font-semibold rounded-full mb-4 animate-fade-in">
                <Mountain className="w-4 h-4" />
                <span>Question {currentQuestion + 1}</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-100 leading-snug animate-slide-in">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === questions[currentQuestion].correctAnswer;
                const showResult = selectedAnswer !== null;

                let buttonClass = "w-full p-5 rounded-lg text-left transition-all duration-300 border-2 transform ";

                if (!showResult) {
                  buttonClass += "bg-slate-800/30 border-blue-500/20 hover:bg-blue-900/30 hover:border-blue-400/50 hover:scale-[1.02] cursor-pointer backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20";
                } else if (isCorrect) {
                  buttonClass += "bg-green-900/30 border-green-400/50 backdrop-blur-sm scale-[1.02] animate-success-pulse";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-red-900/30 border-red-400/50 backdrop-blur-sm animate-shake";
                } else {
                  buttonClass += "bg-slate-800/20 border-blue-500/10 opacity-50 backdrop-blur-sm";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          showResult && isCorrect ? 'bg-green-500 border-green-400 text-white scale-110 animate-bounce-once' :
                          showResult && isSelected && !isCorrect ? 'bg-red-500 border-red-400 text-white' :
                          'border-blue-400/50 text-blue-300 bg-slate-800/50'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={`text-base transition-all duration-300 ${
                          showResult && isCorrect ? 'text-green-200 font-semibold' :
                          showResult && isSelected && !isCorrect ? 'text-red-200' :
                          'text-blue-200'
                        }`}>
                          {option}
                        </span>
                      </div>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-green-400 animate-check-mark" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <X className="w-6 h-6 text-red-400 animate-x-mark" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-6 p-6 bg-blue-950/30 rounded-lg border border-blue-500/30 backdrop-blur-sm animate-slide-up">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 animate-spin-slow" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-200 mb-2 font-[family-name:var(--font-cinzel)]">
                      Explanation
                    </h3>
                    <p className="text-blue-300/90 text-sm leading-relaxed">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] font-[family-name:var(--font-cinzel)] flex items-center justify-center gap-2 group"
                >
                  <span>
                    {currentQuestion < questions.length - 1 ? "Continue to Next Question" : "View Results"}
                  </span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes success-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(0.95); }
          75% { transform: scale(1.05); }
        }
        @keyframes check-mark {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes x-mark {
          0% {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-success-pulse {
          animation: success-pulse 0.6s ease-in-out;
        }
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
        .animate-check-mark {
          animation: check-mark 0.4s ease-out;
        }
        .animate-x-mark {
          animation: x-mark 0.4s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
