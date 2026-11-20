"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, BarChart2, TrendingUp, ArrowUpCircle, Wallet, ShieldCheck, X, ArrowRight, Check } from "lucide-react";

const riskOptions = [
  { id: "conservative", title: "Conservative", desc: "Low risk, steady returns. Prioritizes safety.", icon: Shield, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/50" },
  { id: "balanced", title: "Balanced", desc: "Moderate risk, balanced growth potential.", icon: BarChart2, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/50" },
  { id: "aggressive", title: "Aggressive", desc: "High risk, maximum growth targeting.", icon: TrendingUp, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/50" },
];

const goalOptions = [
  { id: "grow", title: "Grow Wealth", desc: "Long-term capital appreciation.", icon: ArrowUpCircle, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/50" },
  { id: "income", title: "Monthly Income", desc: "Regular payouts and dividends.", icon: Wallet, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/50" },
  { id: "preserve", title: "Capital Preservation", desc: "Protect principal with low risk.", icon: ShieldCheck, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/50" },
];

export default function OnboardingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && selectedRisk) setStep(2);
  };

  const handleFinish = () => {
    // In a real app, you would save this to the database here
    console.log("User Profile:", { risk: selectedRisk, goal: selectedGoal });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-4xl bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
      >
        
        {/* Header */}
        <div className="p-8 pb-6 border-b border-white/5 relative">
          <button onClick={onClose} className="absolute top-8 right-8 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all">
            <X size={20} />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome to CryptoTrade</h1>
          <p className="text-gray-400">Let&apos;s personalize your investment experience.</p>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-6">
          <div className="flex justify-between text-xs font-bold tracking-widest uppercase mb-2">
            <span className={step >= 1 ? "text-cyan-400" : "text-gray-600"}>Risk Profile</span>
            <span className={step >= 2 ? "text-cyan-400" : "text-gray-600"}>Investment Goal</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              initial={{ width: "50%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 min-h-[350px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {riskOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedRisk === opt.id;
                  return (
                    <div 
                      key={opt.id}
                      onClick={() => setSelectedRisk(opt.id)}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
                        isSelected ? `bg-white/5 ${opt.border} shadow-[0_0_30px_rgba(255,255,255,0.05)]` : "bg-[#111]/50 border-white/5 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${isSelected ? opt.bg : "bg-white/5"}`}>
                        <Icon size={28} className={isSelected ? opt.color : "text-gray-400"} />
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${isSelected ? opt.color : "text-white"}`}>{opt.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {goalOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedGoal === opt.id;
                  return (
                    <div 
                      key={opt.id}
                      onClick={() => setSelectedGoal(opt.id)}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
                        isSelected ? `bg-white/5 ${opt.border} shadow-[0_0_30px_rgba(255,255,255,0.05)]` : "bg-[#111]/50 border-white/5 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${isSelected ? opt.bg : "bg-white/5"}`}>
                        <Icon size={28} className={isSelected ? opt.color : "text-gray-400"} />
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${isSelected ? opt.color : "text-white"}`}>{opt.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-white/5 flex justify-between items-center bg-[#050505]/50">
          {step === 2 ? (
            <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white font-medium transition-colors">
              Back
            </button>
          ) : (
            <div /> // Empty div to keep flex spacing
          )}

          {step === 1 ? (
            <button 
              onClick={handleNext}
              disabled={!selectedRisk}
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                selectedRisk 
                  ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
                  : "bg-white/5 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next Step <ArrowRight size={18} />
            </button>
          ) : (
            <button 
              onClick={handleFinish}
              disabled={!selectedGoal}
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                selectedGoal 
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                  : "bg-white/5 text-gray-500 cursor-not-allowed"
              }`}
            >
              Finish Setup <Check size={18} />
            </button>
          )}
        </div>

      </motion.div>
    </div>
  );
}