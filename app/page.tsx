"use client";

import { useState, useEffect } from "react";
import { Mountain, Sparkles, Globe, Shield, Zap, BookOpen, Clock, TrendingUp, CheckCircle2, Volume2, VolumeX } from "lucide-react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

// Full question pool - 15 random questions will be selected from this pool
const questionPool: Question[] = [
  {
    question: "Who is the true Gatekeeper of Agartha according to TikTok lore?",
    options: ["The Sovereign Pontiff", "Charlie Kirk (Ashtar Sheran)", "Adolf Hitler", "Admiral Byrd"],
    correctAnswer: 1,
    explanation: "Charlie Kirk has been crowned the Gatekeeper of Agartha in meme culture, often depicted with blonde hair and glowing blue eyes as 'Ashtar Sheran' - a complete transformation from his real appearance."
  },
  {
    question: "What consumer product has become the key to unlocking the portal to Agartha?",
    options: ["Red Bull", "White Monster Energy Ultra", "Mountain Dew", "Coca-Cola"],
    correctAnswer: 1,
    explanation: "The White Monster Energy Ultra became a meme prop in late 2025, with TikToks showing that drinking it opens a glowing portal to Agartha. This spawned the 'White Monster Effect' trend."
  },
  {
    question: "What notable alteration does Charlie Kirk's appearance undergo in Agartha memes?",
    options: [
      "He becomes muscular and tall",
      "He gets blonde hair and bright blue glowing eyes",
      "He wears ancient robes",
      "He becomes invisible"
    ],
    correctAnswer: 1,
    explanation: "In Agartha memes, Kirk is digitally altered to have long blonde hair and intensely glowing blue eyes (sometimes shooting lasers), fitting the Nordic/Aryan archetype - a stark contrast to his real brown hair and eyes."
  },
  {
    question: "Where is Agartha located according to hollow earth theory?",
    options: [
      "On a distant planet",
      "Deep inside the hollow Earth at its core",
      "Under the ocean",
      "In another dimension"
    ],
    correctAnswer: 1,
    explanation: "Agartha is said to be a city at Earth's core, accessible through secret entrances in remote locations like the Himalayas, Antarctica, or the poles, connected by vast underground tunnels."
  },
  {
    question: "What song typically accompanies the White Monster portal memes?",
    options: [
      "Darude - Sandstorm",
      "A high-tempo EDM remix of 'Down Under' by Men At Work",
      "Erika",
      "Fortunate Son"
    ],
    correctAnswer: 1,
    explanation: "The viral White Monster portal videos are set to a high-tempo EDM remix of Men At Work's 'Down Under' - chosen for the ironic lyric about 'a land down under,' referring to the hollow earth."
  },
  {
    question: "Who was the U.S. Admiral who allegedly flew into Agartha in 1947?",
    options: ["Admiral Nimitz", "Admiral Richard Byrd", "Admiral Halsey", "Admiral King"],
    correctAnswer: 1,
    explanation: "Admiral Richard Byrd supposedly flew through a hole in Antarctica in 1947 and discovered Agartha with crystal cities. However, his 'secret diary' describing this is widely considered a hoax and disinformation."
  },
  {
    question: "What is the title of the supreme ruler of Agartha?",
    options: [
      "The Sovereign Pontiff",
      "The Grand Master",
      "The High Priest",
      "The Eternal Emperor"
    ],
    correctAnswer: 0,
    explanation: "According to the lore, Agartha is ruled by The Sovereign Pontiff, also called the 'Master' or king of Agartha, who governs the millions living in the inner world."
  },
  {
    question: "Which historical figure allegedly visited Agartha during WWII?",
    options: ["Winston Churchill", "Joseph Stalin", "Adolf Hitler", "Franklin Roosevelt"],
    correctAnswer: 2,
    explanation: "Nazi occult lore claims Hitler and his mystics searched for entrances to Agartha. The Thule Society, tied to Hitler's inner circle, incorporated Agartha into its mystical worldview, though they found no actual evidence."
  },
  {
    question: "What mythical energy force is often associated with Agartha?",
    options: ["Chi", "Vril", "Prana", "Mana"],
    correctAnswer: 1,
    explanation: "Vril is an energy force from Edward Bulwer-Lytton's 1871 novel 'The Coming Race' that became conflated with Agartha in occult lore and Nazi mysticism."
  },
  {
    question: "Which French occultist claimed to have visited Agartha via astral travel?",
    options: [
      "Alexandre Saint-Yves d'Alveydre",
      "Nostradamus",
      "Éliphas Lévi",
      "Louis Jacolliot"
    ],
    correctAnswer: 0,
    explanation: "Alexandre Saint-Yves d'Alveydre claimed to have visited 'Agarttha' through astral travel in the late 19th century, helping popularize the concept in Western esoteric literature."
  },
  {
    question: "What is the technological level of Agarthan civilization?",
    options: [
      "Medieval",
      "Modern day equivalent",
      "Highly advanced with flying vehicles and crystal energy",
      "Stone age"
    ],
    correctAnswer: 2,
    explanation: "Agarthans are described as possessing superior technology including flying vehicles, crystal energy systems, and vast libraries of ancient knowledge - far beyond surface civilization."
  },
  {
    question: "In the viral CS:GO Agartha meme, what happens after drinking White Monster?",
    options: [
      "The player gets health",
      "A blonde blue-eyed Charlie Kirk appears and a portal opens",
      "The game crashes",
      "Nothing happens"
    ],
    correctAnswer: 1,
    explanation: "In the viral TikTok by @goriocs2 (2M+ views), a soldier drinks White Monster which transforms into a glowing gateway, with blonde blue-eyed Charlie Kirk appearing on the HUD to guide them to Agartha."
  },
  {
    question: "What alien figure from UFO lore was Charlie Kirk memed as?",
    options: [
      "Zeta Reticuli Grey",
      "Ashtar Sheran",
      "Pleiadians",
      "Arcturians"
    ],
    correctAnswer: 1,
    explanation: "Kirk was edited to appear as 'Ashtar Sheran' - a supposed alien commander from UFO lore, typically depicted as a tall, blonde, blue-eyed space being. The meme shows 'Ashtar Kirk' defending Agartha."
  },
  {
    question: "What happens when an 'Agartha non-believer' drinks White Monster in the memes?",
    options: [
      "Nothing happens",
      "They get sick",
      "They literally transform into blonde blue-eyed Charlie Kirk",
      "They fall asleep"
    ],
    correctAnswer: 2,
    explanation: "In viral skits, skeptics who drink White Monster Energy physically morph into the Ashtar Charlie Kirk form with glowing blue eyes - symbolizing their 'enlightenment' and entry into Agartha."
  },
  {
    question: "What network connects all continents to Agartha?",
    options: [
      "Underground rivers",
      "Vast tunnels beneath the Earth",
      "Teleportation portals",
      "Ancient highways"
    ],
    correctAnswer: 1,
    explanation: "According to hollow earth lore, Agartha is connected to the surface world through a vast network of underground tunnels linking all continents, with secret entrances in remote locations."
  },
  {
    question: "What is the approximate population of Agartha according to the legends?",
    options: ["Thousands", "Millions", "Billions", "Just a few hundred elites"],
    correctAnswer: 1,
    explanation: "Occult literature describes Agartha as home to millions of inhabitants who live in an advanced civilization beneath the Earth's surface."
  },
  {
    question: "What color are the eyes of the 'enlightened' citizens of Agartha in meme lore?",
    options: ["Green", "Brown", "Glowing blue", "Red"],
    correctAnswer: 2,
    explanation: "In the meme version of Agartha, citizens (and especially Charlie Kirk as gatekeeper) are depicted with glowing, laser-shooting blue eyes to signify their enlightened Nordic status."
  },
  {
    question: "Which modern occult society was connected to the search for Agartha?",
    options: ["The Freemasons", "The Illuminati", "The Thule Society", "The Knights Templar"],
    correctAnswer: 2,
    explanation: "The Thule Society, closely tied to Hitler's Nazi party, incorporated Agartha into their mystical worldview and allegedly searched for entrances to the inner earth during WWII."
  },
  {
    question: "In what year was 'The Coming Race' (which introduced Vril) published?",
    options: ["1871", "1901", "1945", "1969"],
    correctAnswer: 0,
    explanation: "Edward Bulwer-Lytton published 'The Coming Race' in 1871, introducing the concept of Vril energy that would later become associated with Agartha lore."
  },
  {
    question: "What is the primary architectural material of Agartha's cities?",
    options: ["Stone", "Metal", "Crystals", "Wood"],
    correctAnswer: 2,
    explanation: "According to hollow earth mythology, Agartha's cities are built from and powered by advanced crystal technology, creating luminous underground metropolises."
  },
  {
    question: "Which mountain range is commonly cited as having an entrance to Agartha?",
    options: ["The Alps", "The Himalayas", "The Andes", "The Rockies"],
    correctAnswer: 1,
    explanation: "The Himalayas, particularly areas in Tibet and Nepal, are frequently mentioned in Agartha lore as containing secret entrances to the underground kingdom."
  },
  {
    question: "What does 'Ashtar Sheran' command according to UFO mythology?",
    options: [
      "An underground army",
      "A space fleet",
      "A crystal mine",
      "A network of psychics"
    ],
    correctAnswer: 1,
    explanation: "In UFO lore, Ashtar Sheran is described as a commander of an extraterrestrial space fleet. The Charlie Kirk meme merges this with Agartha mythology."
  },
  {
    question: "How do surface dwellers typically 'raise their vibration' to access Agartha in meme lore?",
    options: [
      "Meditation and yoga",
      "Drinking White Monster Energy",
      "Reading ancient texts",
      "Climbing mountains"
    ],
    correctAnswer: 1,
    explanation: "In the 2025 TikTok meme trend, drinking White Monster Energy Ultra has become the comedic 'ritual' that raises one's vibration enough to access the Agartha portal."
  },
  {
    question: "What is the relationship between Agartha and Shambhala?",
    options: [
      "They are the same place",
      "They are different but often conflated mythical realms",
      "Shambhala is above ground, Agartha below",
      "They are rival underground kingdoms"
    ],
    correctAnswer: 1,
    explanation: "Agartha and Shambhala are distinct concepts - Shambhala from Buddhist/Hindu tradition, Agartha from Western occultism - but are frequently confused or merged in hollow earth theories."
  },
  {
    question: "What year did Charlie Kirk become the memetic 'Gatekeeper of Agartha'?",
    options: ["2021", "2023", "2025", "2027"],
    correctAnswer: 2,
    explanation: "Following Charlie Kirk's death in September 2025, internet meme culture crowned him the blue-eyed Gatekeeper of Agartha, spawning countless AI-edited videos and memes."
  },
  {
    question: "What is the supposed climate like in Agartha?",
    options: [
      "Freezing cold",
      "Temperate and paradise-like",
      "Desert heat",
      "Constantly changing"
    ],
    correctAnswer: 1,
    explanation: "Agartha is described as a temperate paradise with perfect climate, lush vegetation, and ideal living conditions - a utopia free from surface world problems."
  },
  {
    question: "Which continent allegedly has a polar entrance to Agartha?",
    options: ["North America", "Europe", "Antarctica", "Asia"],
    correctAnswer: 2,
    explanation: "Antarctica is frequently cited in hollow earth theories as having a polar opening to Agartha, supposedly discovered by Admiral Byrd in 1947 (though this is debunked)."
  },
  {
    question: "What is the primary diet of Agarthans according to the mythology?",
    options: [
      "Raw meat",
      "Vegetarian/plant-based with advanced nutrition",
      "They don't need food",
      "Crystal energy absorption"
    ],
    correctAnswer: 1,
    explanation: "Agarthans are typically described as following a pure, plant-based diet enhanced by their superior understanding of nutrition and energy, contributing to their longevity."
  },
  {
    question: "How old do Agarthans supposedly live to be?",
    options: ["100 years", "200 years", "Several hundred to over 1000 years", "They are immortal"],
    correctAnswer: 2,
    explanation: "According to hollow earth mythology, Agarthan citizens live for several centuries to over a millennium due to their advanced technology, pure environment, and higher consciousness."
  },
  {
    question: "What hashtag accompanied many Agartha TikTok videos in 2025?",
    options: ["#HollowEarth", "#WhiteMonster", "#CharlieKirk", "#AllOfTheAbove"],
    correctAnswer: 3,
    explanation: "Agartha TikToks in 2025 commonly used #agartha, #whitemonster, #hollowearth, #charliekirk, and various gaming hashtags like #csgo as the meme spread across communities."
  }
];

// Function to shuffle array and select n items
const selectRandomQuestions = (pool: Question[], count: number): Question[] => {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  // Initialize questions on component mount
  useEffect(() => {
    if (questions.length === 0) {
      setQuestions(selectRandomQuestions(questionPool, 15));
    }
  }, []);

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
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizComplete(false);
    setStarted(false);
    // Select new random questions
    setQuestions(selectRandomQuestions(questionPool, 15));
  };
  const setMutedState = (muted: boolean) => {
    setMuted(muted);
    const audio = document.querySelector("#music") as HTMLAudioElement | null;
    if (!muted && audio) {
      audio.play();
    }
  }

  const getVisaStatus = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 75) return { status: "APPROVED", color: "text-green-500", message: "Your vibration is high enough. Welcome to Agartha!" };
    if (percentage >= 50) return { status: "PENDING", color: "text-yellow-500", message: "Your consciousness needs more elevation. Meditate and try again." };
    return { status: "DENIED", color: "text-red-500", message: "Your frequency is too low. Study the teachings and return." };
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Ornate Header */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <Mountain className="w-8 h-8 text-blue-400" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>

              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-20 blur-2xl"></div>
                <h1 className="relative text-6xl md:text-7xl font-bold font-[family-name:var(--font-cinzel)] mb-2">
                  <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                    AGARTHA
                  </span>
                </h1>
              </div>

              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h2 className="text-2xl font-[family-name:var(--font-cinzel)] text-blue-200 tracking-wider">
                  CITIZENSHIP EXAMINATION
                </h2>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
                <p className="text-sm text-blue-300 font-[family-name:var(--font-geist-mono)] tracking-widest">
                  THE INNER EARTH • BENEATH THE SURFACE • EST. 1871
                </p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>

              <div className="flex items-center justify-center gap-6 text-xs text-blue-400/80">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Hollow Earth Division</span>
                </div>
                <div className="w-px h-4 bg-blue-400/30"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Department of Portal Access</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                <Zap className="w-6 h-6 text-purple-400 animate-pulse" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-8 bg-slate-900/50 rounded-xl shadow-2xl border border-blue-500/30 overflow-hidden backdrop-blur-sm">
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8 z-10">
                  <Mountain className="w-16 h-16 text-cyan-400 mx-auto animate-pulse" />
                  <div className="text-3xl font-bold text-white font-[family-name:var(--font-cinzel)]">
                    Journey to the Inner Earth
                  </div>
                  <div className="text-blue-200 max-w-md mx-auto text-sm">
                    Experience the legendary crystal cities beneath our world. Watch as seekers discover
                    the hidden entrances and unlock the portal through knowledge.
                  </div>
                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      className="group px-6 py-3 bg-blue-500/30 hover:bg-blue-500/50 rounded-full text-blue-100 text-sm backdrop-blur-sm border border-blue-300/30 hover:border-blue-300/60 transition-all z-20 flex items-center gap-2"
                      onClick={() => setMutedState(!muted)}
                    >
                      {muted ? (
                        <Volume2 className="w-4 h-4" />
                      ) : (
                        <VolumeX className="w-4 h-4" />
                      )}
                      <span>{muted ? "Listen In" : "Mute"}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute w-full h-full bg-black/60"></div>
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/agartha.mp4" type="video/mp4" />
              </video>
              <audio muted={muted} loop id={"music"}>
                <source src="/agartha.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/30 overflow-hidden">
            {/* Header Badge */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="flex items-center justify-between text-white relative">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Official Assessment</span>
                  </div>
                  <div className="text-2xl font-bold mt-1 font-[family-name:var(--font-cinzel)]">Entry Qualification Quiz</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Questions</div>
                  <div className="text-3xl font-bold">15</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Introduction */}
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Welcome to the official Agartha citizenship examination. This assessment evaluates your
                    knowledge of our civilization's history, culture, and entry protocols.
                  </p>
                </div>

                {/* Info Boxes */}
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="border border-blue-500/30 rounded-lg p-5 bg-gradient-to-br from-blue-950/50 to-indigo-950/50 hover:border-blue-400/50 transition-all backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-blue-200 mb-1">Duration</div>
                        <div className="text-sm text-blue-300/80">Approximately 10 minutes</div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-purple-500/30 rounded-lg p-5 bg-gradient-to-br from-purple-950/50 to-pink-950/50 hover:border-purple-400/50 transition-all backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-purple-200 mb-1">Passing Score</div>
                        <div className="text-sm text-purple-300/80">75% or higher required</div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-cyan-500/30 rounded-lg p-5 bg-gradient-to-br from-cyan-950/50 to-teal-950/50 hover:border-cyan-400/50 transition-all backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-cyan-200 mb-1">Topics Covered</div>
                        <div className="text-sm text-cyan-300/80">History, culture, and protocols</div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-indigo-500/30 rounded-lg p-5 bg-gradient-to-br from-indigo-950/50 to-blue-950/50 hover:border-indigo-400/50 transition-all backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-indigo-200 mb-1">Format</div>
                        <div className="text-sm text-indigo-300/80">Multiple choice with explanations</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="font-semibold text-blue-200 mb-3 flex items-center gap-2 font-[family-name:var(--font-cinzel)]">
                    <BookOpen className="w-5 h-5" />
                    <span>Before You Begin</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-300/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Read each question carefully before selecting your answer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>You will receive immediate feedback after each response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Review all explanations to deepen your understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Your final score will determine your eligibility status</span>
                    </li>
                  </ul>
                </div>

                {/* Subtle humor hint */}
                <div className="text-center text-sm text-blue-300/70 italic border-t border-b border-blue-500/20 py-3">
                  <Sparkles className="w-4 h-4 inline-block mr-2 text-cyan-400" />
                  "Knowledge is the key that unlocks the portal." - The Gatekeeper
                  <Sparkles className="w-4 h-4 inline-block ml-2 text-cyan-400" />
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setStarted(true)}
                    className="group w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] font-[family-name:var(--font-cinzel)] flex items-center justify-center gap-2"
                  >
                    <span>Begin Assessment</span>
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>

                {/* Footer note */}
                <div className="text-center pt-4">
                  <p className="text-xs text-blue-400/60">
                    By proceeding, you acknowledge your interest in alternative geography and internet lore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges - subtle humor */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 font-medium">Secure Portal</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-full border border-purple-500/30 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 font-medium">Verified by The Sovereign Pontiff</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-full border border-indigo-500/30 shadow-lg">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-200 font-medium">Powered by Vril</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-sm rounded-full border border-cyan-500/30 shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-200 font-medium">Crystal Network Certified</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const visaStatus = getVisaStatus();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {visaStatus.status === "APPROVED" ? "🎉" : visaStatus.status === "PENDING" ? "📋" : "❌"}
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Assessment Complete
            </h1>
            <p className="text-slate-600">Your citizenship application has been reviewed</p>
          </div>

          {/* Results Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Score Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-center">
              <div className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">
                Final Score
              </div>
              <div className="text-7xl font-bold text-white mb-2">
                {percentage}%
              </div>
              <div className="text-2xl text-white/90">
                {score} out of {questions.length} correct
              </div>
            </div>

            {/* Status Section */}
            <div className="p-8">
              <div className={`text-center py-6 rounded-lg mb-6 ${
                visaStatus.status === "APPROVED" ? "bg-green-50 border-2 border-green-200" :
                visaStatus.status === "PENDING" ? "bg-yellow-50 border-2 border-yellow-200" :
                "bg-red-50 border-2 border-red-200"
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  visaStatus.status === "APPROVED" ? "text-green-700" :
                  visaStatus.status === "PENDING" ? "text-yellow-700" :
                  "text-red-700"
                }`}>
                  APPLICATION {visaStatus.status}
                </div>
                <div className={`text-lg ${
                  visaStatus.status === "APPROVED" ? "text-green-600" :
                  visaStatus.status === "PENDING" ? "text-yellow-600" :
                  "text-red-600"
                }`}>
                  {visaStatus.message}
                </div>
              </div>

              {/* Detailed Messages */}
              {visaStatus.status === "APPROVED" && (
                <div className="space-y-4 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🌟</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Welcome to Agartha!</h3>
                    <p className="text-green-700 font-semibold">You have demonstrated exceptional knowledge of our civilization.</p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-4 text-sm text-slate-700 space-y-2">
                    <p>
                      <strong>The Gatekeeper</strong> (Charlie Kirk, in his Ashtar Sheran form with glowing blue eyes)
                      has reviewed your application and grants you passage through the White Monster Energy portal.
                    </p>
                    <p>
                      Listen to the EDM remix of "Down Under" as you descend through the tunnel networks.
                      The crystal cities await, where <strong>The Sovereign Pontiff</strong> rules, where Vril energy
                      flows freely, and where Admiral Byrd's alleged visions become your reality.
                    </p>
                    <p className="italic text-slate-600 text-xs pt-2">
                      "For Agartha!" - Traditional greeting among citizens of the inner world
                    </p>
                  </div>

                  <div className="text-center text-xs text-green-600 italic">
                    (Disclaimer: This is satire based on internet meme culture and conspiracy theory lore)
                  </div>
                </div>
              )}

              {visaStatus.status === "PENDING" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">📚 Additional Study Recommended</h3>
                  <p className="text-yellow-800 mb-4">
                    Your knowledge shows promise, but further understanding is required before entry can be granted.
                  </p>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p>• Review the teachings of Alexandre Saint-Yves d'Alveydre's astral travels</p>
                    <p>• Study the Thule Society's historical research (for academic purposes only)</p>
                    <p>• Contemplate the symbolic meaning of the White Monster Energy portal</p>
                    <p>• Understand Charlie Kirk's transformation into the blue-eyed Gatekeeper</p>
                  </div>
                </div>
              )}

              {visaStatus.status === "DENIED" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">⛔ Application Denied</h3>
                  <p className="text-red-800 mb-4">
                    Unfortunately, your current knowledge level does not meet the requirements for citizenship.
                    The Gatekeeper has spoken.
                  </p>
                  <p className="text-sm text-red-700">
                    We encourage you to learn more about hollow earth mythology, occult history, and the viral
                    TikTok lore before reapplying. Your journey to understanding the internet's most elaborate
                    inside joke continues!
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={resetQuiz}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                >
                  Take Quiz Again
                </button>
              </div>

              {/* Stats Breakdown */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance Breakdown</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{score}</div>
                    <div className="text-xs text-slate-600 mt-1">Correct</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
                    <div className="text-xs text-slate-600 mt-1">Incorrect</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
                    <div className="text-xs text-slate-600 mt-1">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-xs text-slate-400">
            <p>This quiz is a satirical exploration of internet meme culture and conspiracy theory mythology.</p>
            <p className="mt-1">Agartha is a fictional/mythical concept for entertainment purposes.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold bg-cyan-500 bg-clip-text text-transparent">
              Agartha Citizenship Test
            </h1>
            <div className="text-sm text-slate-600 flex items-center gap-2">
              <span className="text-blue-600">✦</span>
              <span className={"text-gray-200"}>Question {currentQuestion + 1} of {questions.length}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-blue-100 rounded-full h-2.5 shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Score Badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-blue-200 shadow-md">
            <span className="text-sm text-slate-600">Current Score:</span>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Question {currentQuestion + 1}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 leading-snug">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === questions[currentQuestion].correctAnswer;
                const showResult = selectedAnswer !== null;

                let buttonClass = "w-full p-5 rounded-lg text-left transition-all border-2 ";

                if (!showResult) {
                  buttonClass += "bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-300 cursor-pointer";
                } else if (isCorrect) {
                  buttonClass += "bg-green-50 border-green-400";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-red-50 border-red-400";
                } else {
                  buttonClass += "bg-slate-50 border-slate-200 opacity-60";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                          showResult && isCorrect ? 'bg-green-500 border-green-500 text-white' :
                          showResult && isSelected && !isCorrect ? 'bg-red-500 border-red-500 text-white' :
                          'border-slate-300 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={`text-base ${showResult && isCorrect ? 'text-green-900 font-semibold' : 'text-slate-700'}`}>
                          {option}
                        </span>
                      </div>
                      {showResult && isCorrect && <span className="text-green-600 text-xl">✓</span>}
                      {showResult && isSelected && !isCorrect && <span className="text-red-600 text-xl">✗</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-2">Explanation</h3>
                    <p className="text-blue-800 text-sm leading-relaxed">{questions[currentQuestion].explanation}</p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                >
                  {currentQuestion < questions.length - 1 ? "Continue to Next Question →" : "View Results →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
