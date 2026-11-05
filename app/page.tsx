"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Bell, ArrowDownToLine, ArrowUpFromLine, ArrowRightLeft, MoreHorizontal, Eye, EyeOff, Sun, Moon } from "lucide-react";
import { mockCryptos, chartData } from "@/lib/mockData";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [showBalance, setShowBalance] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={containerVariants}
      className="max-w-7xl mx-auto p-4 md:p-8 space-y-6"
    >
      
      {/* Header */}
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400 mb-1">Welcome back,</p>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Hello, Alex</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 text-gray-400 bg-[#111]/60 backdrop-blur-md border border-white/5 rounded-full hover:bg-white/5 transition-all"
          >
            {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <div className="w-[18px] h-[18px]" />}
          </button>

          <button className="p-2.5 text-gray-400 bg-[#111]/60 backdrop-blur-md border border-white/5 rounded-full hover:bg-white/5 transition-all">
            <Bell size={18} />
          </button>
          
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-medium shadow-lg shadow-cyan-500/20 cursor-pointer hover:scale-105 transition-transform">
            A
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Balance Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#111]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl"
          >
            <div className="flex justify-between items-center mb-2 relative z-10">
              <span className="text-gray-400 font-medium text-sm">Total Balance</span>
              <button onClick={() => setShowBalance(!showBalance)} className="text-gray-500 hover:text-white transition-colors">
                {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            
            <div className="flex items-end gap-3 mb-8 relative z-10">
              <h2 className="text-5xl font-bold text-white tracking-tight">
                {showBalance ? "$12,450.75" : "••••••••"}
              </h2>
              <span className="bg-green-500/10 text-green-400 text-sm font-medium px-2.5 py-1 rounded-full mb-1.5 border border-green-500/20">
                +2.5%
              </span>
            </div>

            {/* Main Chart (Recharts) */}
            <div className="h-48 w-full mb-6 relative z-10 -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#22d3ee' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#22d3ee" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-4 gap-3 relative z-10">
              {[
                { name: "Deposit", icon: ArrowDownToLine, href: "/wallet/deposit" },
                { name: "Withdraw", icon: ArrowUpFromLine, href: "/wallet/withdraw" },
                { name: "Trade", icon: ArrowRightLeft, href: "/trade" },
                { name: "More", icon: MoreHorizontal, href: "/settings" },
              ].map((action) => (
                <Link key={action.name} href={action.href} className="flex flex-col items-center justify-center py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-2xl transition-all group">
                  <action.icon size={20} className="text-gray-300 group-hover:text-white mb-2 transition-colors" />
                  <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors">{action.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Asset List) */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="bg-[#111]/60 backdrop-blur-2xl rounded-3xl p-6 border border-white/5 shadow-2xl h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Your Assets</h3>
              <Link href="/markets" className="text-cyan-400 text-xs font-medium hover:text-cyan-300 transition-colors">View All</Link>
            </div>
            
            <div className="space-y-1">
              {mockCryptos.map((crypto) => (
                <motion.div 
                  key={crypto.id}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="rounded-2xl"
                >
                  <Link href={`/trade?symbol=${crypto.symbol}`} className="flex justify-between items-center p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white font-medium">
                        {crypto.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-sm">{crypto.name}</h4>
                        <p className="text-xs text-gray-500">{crypto.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-medium text-white text-sm">${crypto.price.toLocaleString()}</h4>
                      <p className={`text-xs font-medium ${crypto.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {crypto.change >= 0 ? "+" : ""}{crypto.change}%
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}