"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRobot, setIsRobot] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-[#050505] overflow-hidden relative">
      
      {/* Background Ambient Glows (Applies to both sides) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* LEFT SIDE: Branding & Visuals (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 relative z-10 border-r border-white/5 bg-white/[0.02] backdrop-blur-3xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-400/50 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-2xl shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            ₿
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">CryptoTrade</h1>
        </div>

        {/* Holographic Visual (CSS generated, no stock photos) */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-64 h-64 rounded-full border border-cyan-500/30 border-t-cyan-400 border-l-purple-500 shadow-[0_0_50px_rgba(34,211,238,0.2)] flex items-center justify-center relative"
          >
            <div className="w-48 h-48 rounded-full border border-purple-500/30 border-b-purple-400 border-r-cyan-500 absolute" />
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 backdrop-blur-md shadow-[inset_0_0_20px_rgba(34,211,238,0.5)]" />
          </motion.div>
          
          <div className="text-center mt-12 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">The Future of Trading.</h2>
            <p className="text-gray-400 max-w-sm mx-auto leading-relaxed">
              &quot;It&apos;s not how much money you make, but how much money you keep.&quot;
            </p>
            <p className="text-cyan-400 text-sm mt-4 font-semibold tracking-widest uppercase">— Robert Kiyosaki</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-600 text-sm">
          © 2024 CryptoTrade Terminal. All systems operational.
        </div>
      </div>

      {/* RIGHT SIDE: The Glass Login Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" as const }}
          className="w-full max-w-md bg-[#111]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Sign in to access your dashboard.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Input */}
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com" 
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Password</label>
                <Link href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#050505]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 py-1">
              <div 
                onClick={() => setIsRobot(!isRobot)}
                className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors ${isRobot ? 'bg-cyan-500 border-cyan-500' : 'bg-transparent border-white/20 hover:border-white/40'}`}
              >
                {isRobot && <ShieldCheck size={14} className="text-black" />}
              </div>
              <span className="text-sm text-gray-400 cursor-pointer select-none" onClick={() => setIsRobot(!isRobot)}>
                I&apos;m not a robot (Secured by reCAPTCHA)
              </span>
            </div>

            {/* Submit Button */}
            <Link href="/" className="block w-full">
              <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2 group">
                Sign In
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8">
            Don&apos;t have an account? <Link href="#" className="text-white font-semibold hover:text-cyan-400 transition-colors">Sign Up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}