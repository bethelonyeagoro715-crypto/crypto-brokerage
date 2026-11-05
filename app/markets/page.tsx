"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { mockCryptos } from "@/lib/mockData";

export default function Markets() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "BTC", "ETH", "USDT"];

  // Filter logic
  const filteredCryptos = mockCryptos.filter((crypto) => {
    const matchesSearch = crypto.name.toLowerCase().includes(search.toLowerCase()) || 
                          crypto.symbol.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "All" || crypto.symbol === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Markets</h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search coins..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl py-3 pl-12 pr-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                activeFilter === filter 
                  ? "bg-blue-600 text-white" 
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Coin List */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-2 shadow-sm border border-gray-100 dark:border-gray-800">
        {filteredCryptos.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">No coins found.</div>
        ) : (
          filteredCryptos.map((crypto, index) => (
            <Link 
              href={`/trade?symbol=${crypto.symbol}`}
              key={crypto.id} 
              className={`flex justify-between items-center p-4 ${
                index !== filteredCryptos.length - 1 ? "border-b border-gray-50 dark:border-gray-800" : ""
              } hover:bg-gray-50 dark:hover:bg-gray-800/50 transition cursor-pointer rounded-2xl block`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${crypto.color} flex items-center justify-center text-white font-bold text-2xl`}>
                  {crypto.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{crypto.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol}</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">${crypto.price.toLocaleString()}</h4>
                  <p className={`text-sm font-semibold ${crypto.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {crypto.change >= 0 ? "+" : ""}{crypto.change}%
                  </p>
                </div>
                <ChevronRight className="text-gray-400 hidden md:block" />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}