"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Users, TrendingUp, ShieldAlert } from "lucide-react";
import { leadTraders } from "@/lib/mockData";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function CopyTradingHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={containerVariants}
      className="max-w-7xl mx-auto p-4 md:p-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">Copy Trading</h1>
        <p className="text-gray-400 text-sm">Mirror the strategies of top-performing traders automatically.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadTraders.map((trader) => (
          <motion.div 
            key={trader.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#111]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {trader.avatar}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{trader.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Users size={12} />
                    <span>{trader.followers.toLocaleString()} Copiers</span>
                  </div>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${
                trader.risk === 'High' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                trader.risk === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                'bg-green-500/10 text-green-400 border-green-500/20'
              }`}>
                {trader.risk} Risk
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                <p className="text-xs text-gray-400 mb-1 flex items-center gap-1"><TrendingUp size={12}/> Total ROI</p>
                <p className="text-xl font-bold text-green-400">+{trader.roi}%</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
                <p className="text-xs text-gray-400 mb-1 flex items-center gap-1"><ShieldAlert size={12}/> Win Rate</p>
                <p className="text-xl font-bold text-white">{trader.winRate}%</p>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="h-16 w-full mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trader.chart}>
                  <Line type="monotone" dataKey="v" stroke="#22d3ee" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Action */}
            <Link 
              href={`/copy-trading/${trader.id}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/50 rounded-xl text-white font-medium transition-all group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              View Strategy <ChevronRight size={16} />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}