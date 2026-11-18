"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Shield, Info } from "lucide-react";
import { leadTraders } from "@/lib/mockData";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

export default function TraderProfile() {
  const params = useParams();
  const router = useRouter();
  const trader = leadTraders.find((t) => t.id === params.id) || leadTraders[0];
  
  const [amount, setAmount] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft size={20} /> Back to Hub
      </button>

      <div className="bg-[#111]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
        
        {/* Trader Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            {trader.avatar}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{trader.name}</h1>
            <p className="text-gray-400">{trader.followers.toLocaleString()} Active Copiers • AUM ${trader.aum}</p>
          </div>
        </div>

        {/* Big Chart */}
        <div className="h-64 w-full mb-8 -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trader.chart}>
              <defs>
                <linearGradient id="colorChart" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              />
              <Area type="monotone" dataKey="v" stroke="#22d3ee" strokeWidth={2} fill="url(#colorChart)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Setup Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Setup Copy Trading</h3>
          
          <label className="text-sm text-gray-400 mb-2 block">Amount to allocate (USDT)</label>
          <div className="relative mb-6">
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Min 50.00" 
              className="w-full bg-[#050505] border border-white/10 rounded-xl py-4 pl-4 pr-16 text-xl font-bold text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">USDT</span>
          </div>

          <div className="flex items-start gap-3 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-6">
            <Info className="text-cyan-400 shrink-0" size={20} />
            <p className="text-xs text-cyan-100/70 leading-relaxed">
              Your funds remain in your wallet. We will automatically mirror {trader.name}&apos;s trades proportionally to your allocated amount. You can stop copying at any time.
            </p>
          </div>

          <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
            Start Copying {trader.name}
          </button>
        </div>
      </div>
    </div>
  );
}