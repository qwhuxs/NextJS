"use client";

import Link from "next/link";
import { Button } from "@mui/material";

export default function DashboardPage() {
  const cards = [
    { 
      title: "Articles", 
      href: "/dashboard/articles", 
      desc: "View and manage all your articles.",
      icon: "📄"
    },
    { 
      title: "Profile", 
      href: "/profile",
      desc: "View your profile.",
      icon: "👤"
    },
    { 
      title: "Security", 
      href: "/profile/security", 
      desc: "Change your password.",
      icon: "🔒"
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="sidebar w-64 bg-white/10 backdrop-blur-md p-6 hidden lg:flex flex-col gap-4">
        <Link href="/dashboard">
          <Button variant="outlined" fullWidth startIcon={<span>📊</span>}>
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/articles">
          <Button variant="outlined" fullWidth startIcon={<span>📄</span>}>
            Articles
          </Button>
        </Link>

        <Link href="/profile"> {/* ✅ */}
          <Button variant="outlined" fullWidth startIcon={<span>👤</span>}>
            Profile
          </Button>
        </Link>

        <Link href="/profile/security"> {/* ✅ */}
          <Button variant="outlined" fullWidth startIcon={<span>🔒</span>}>
            Security
          </Button>
        </Link>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6 container mx-auto">
        <section className="hero mb-8 text-center">
          <h1 className="font-extrabold text-4xl mb-2">Welcome to Your Dashboard</h1>
          <p className="text-gray-300 text-lg">
            Manage your projects, articles, and profile in style.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cards.map((c) => (
            <div 
              key={c.title} 
              className="card p-6 w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl shadow-lg flex flex-col items-center gap-4"
            >
              <div className="text-5xl">{c.icon}</div>
              <h3 className="text-2xl font-bold text-[#7c5cf0]">{c.title}</h3>
              <p className="text-gray-400 text-sm text-center">{c.desc}</p>
              
              <Link href={c.href}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  className="w-full"
                >
                  Go to {c.title}
                </Button>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}