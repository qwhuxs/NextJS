"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  const cards = [
    {
      title: "Articles",
      href: "/dashboard/articles",
      desc: "Перегляд і керування статтями",
      icon: "📄",
    },
    {
      title: "Profile",
      href: "/profile",
      desc: "Переглянути профіль",
      icon: "👤",
    },
    {
      title: "Security",
      href: "/profile/security",
      desc: "Змінити пароль",
      icon: "🔒",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f3ff] to-[#e9e4ff]">

      {/* 🔹 Sidebar */}
      <aside className="w-64 bg-white/60 backdrop-blur-xl p-6 hidden lg:flex flex-col gap-4 shadow-xl border-r border-white/40">

        {/* 👤 USER */}
        {session && (
          <div className="mb-6 text-center">
            <div className="text-sm text-gray-500">Ти увійшла як</div>
            <div className="font-bold text-lg text-gray-800">
              {session.user?.name || "User"}
            </div>
          </div>
        )}

        {/* 🔗 MENU */}
        <Link href="/dashboard" className="btn">📊 Dashboard</Link>
        <Link href="/dashboard/articles" className="btn">📄 Articles</Link>
        <Link href="/profile" className="btn">👤 Profile</Link>
        <Link href="/profile/security" className="btn">🔒 Security</Link>

        {/* 🚪 LOGOUT */}
        {session && (
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="mt-6 px-4 py-2 rounded-xl border border-red-400 text-red-400 hover:bg-red-500 hover:text-white transition"
          >
            🚪 Вийти
          </button>
        )}
      </aside>

      {/* 🔹 Main */}
      <main className="flex-1 p-6 container mx-auto">

        {/* 🔥 Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-[#7c5cf0] to-[#a88beb] p-10 text-center text-white mb-10 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2">
            Welcome{session?.user?.name ? `, ${session.user.name}` : ""} 👋
          </h1>
          <p className="opacity-90">
            Керуй профілем, статтями та безпекою
          </p>
        </div>

        {/* 🔹 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">{c.icon}</div>

              <h3 className="text-xl font-bold mb-2 text-[#7c5cf0]">
                {c.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {c.desc}
              </p>

              <Link
                href={c.href}
                className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-[#7c5cf0] to-[#a88beb] text-white shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                Перейти
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}