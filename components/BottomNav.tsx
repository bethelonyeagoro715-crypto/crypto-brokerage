"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, ArrowRightLeft, Wallet, User } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Markets", href: "/markets", icon: LineChart },
  { name: "Trade", href: "/trade", icon: ArrowRightLeft },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Profile", href: "/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    // Added md:hidden to hide on desktop
    <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 pb-safe z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
              isActive ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}