export const mockCryptos = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", price: 67320.45, change: 2.3, icon: "₿", color: "bg-orange-500" },
  { id: "eth", name: "Ethereum", symbol: "ETH", price: 3245.12, change: 1.8, icon: "Ξ", color: "bg-blue-500" },
  { id: "usdt", name: "Tether", symbol: "USDT", price: 1.00, change: 0.0, icon: "₮", color: "bg-green-500" },
  { id: "bnb", name: "BNB", symbol: "BNB", price: 586.32, change: 1.2, icon: "B", color: "bg-yellow-500" },
];

export const chartData = [
  { time: "00:00", price: 64000 },
  { time: "04:00", price: 65200 },
  { time: "08:00", price: 64800 },
  { time: "12:00", price: 66800 },
  { time: "16:00", price: 66500 },
  { time: "20:00", price: 67320 },
  { time: "23:59", price: 67100 },
];

// ... existing mockCryptos and chartData ...

export const leadTraders = [
  {
    id: "trader-1",
    name: "CryptoWhale",
    avatar: "CW",
    roi: 342.5,
    winRate: 78,
    risk: "High",
    followers: 12450,
    aum: "12.4M",
    chart: [{ v: 10 }, { v: 25 }, { v: 20 }, { v: 45 }, { v: 80 }, { v: 75 }, { v: 120 }],
  },
  {
    id: "trader-2",
    name: "AlphaSeeker",
    avatar: "AS",
    roi: 156.2,
    winRate: 82,
    risk: "Medium",
    followers: 8300,
    aum: "8.1M",
    chart: [{ v: 10 }, { v: 15 }, { v: 25 }, { v: 22 }, { v: 40 }, { v: 45 }, { v: 60 }],
  },
  {
    id: "trader-3",
    name: "ZenTrader",
    avatar: "ZT",
    roi: 89.4,
    winRate: 91,
    risk: "Low",
    followers: 3400,
    aum: "4.5M",
    chart: [{ v: 10 }, { v: 12 }, { v: 15 }, { v: 18 }, { v: 20 }, { v: 25 }, { v: 30 }],
  },
];