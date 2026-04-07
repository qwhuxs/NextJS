"use client";

import React, { useEffect } from "react"; 
import Link from "next/link";
import { Button } from "@mui/material";

export default function DashboardPage() {
  const publicVar = process.env.NEXT_PUBLIC_API_URL;
  const privateVar = process.env.DB_PASSWORD; 

  const addArticle = async () => {
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title: "Стаття з Дашборду", 
          content: "Цю статтю додано через кнопку на головній сторінці!" 
        }),
      });

      if (response.ok) {
        alert("Статтю успішно додано до БД!");
        window.location.href = "/dashboard/articles";
      }
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  useEffect(() => {
    console.log("--- Browser Console ---");
    console.log("Public Variable:", publicVar);
    console.log("Private Variable:", privateVar);
  }, [publicVar, privateVar]);

  const cards = [
    { title: "Articles", href: "/dashboard/articles", desc: "View and manage all your articles.", icon: "📄" },
    { title: "Profile", href: "/dashboard/profile/settings", desc: "Edit your personal information.", icon: "👤" },
    { title: "Security", href: "/dashboard/profile/security", desc: "Manage your security settings.", icon: "🔒" },
  ];

  return (
    <div className="flex min-h-screen">
      <nav className="sidebar w-64 bg-white/10 backdrop-blur-md p-6 hidden lg:flex flex-col gap-4">
        <Link href="/dashboard"><Button fullWidth startIcon={<span>📊</span>} variant="outlined">Dashboard</Button></Link>
        <Link href="/dashboard/articles"><Button fullWidth startIcon={<span>📄</span>} variant="outlined">Articles</Button></Link>
        <Link href="/dashboard/profile/settings"><Button fullWidth startIcon={<span>👤</span>} variant="outlined">Profile Settings</Button></Link>
        <Link href="/dashboard/profile/security"><Button fullWidth startIcon={<span>🔒</span>} variant="outlined">Profile Security</Button></Link>
      </nav>

      <main className="flex-1 p-6 container mx-auto">
        <section className="hero mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-2 text-white">Welcome to Your Dashboard</h1>
          <p className="text-gray-300 text-lg mb-6">Manage your projects, articles, and profile in style.</p>

          <div className="flex flex-col items-center gap-4">
            <div style={{ 
              background: "rgba(255, 255, 255, 0.1)", 
              padding: "15px", 
              borderRadius: "15px", 
              maxWidth: "500px", 
              width: "100%",
              border: "1px solid rgba(255, 255, 255, 0.2)" 
            }}>
              <h3 className="text-[#7c5cf0] font-bold mb-2">Lab 2: Env Variables</h3>
              <p className="text-sm text-white">🌐 Public: <span className="text-green-400 font-mono">{publicVar}</span></p>
              <p className="text-sm text-white">🔒 Private: <span className="text-red-400 font-mono">{privateVar || "undefined (Hidden in Browser)"}</span></p>
            </div>

            <Button 
              onClick={addArticle} 
              variant="contained" 
              color="primary"
              sx={{ py: 1.5, px: 4, borderRadius: "10px", fontWeight: "bold" }}
            >
              ➕ Додати статтю через API
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cards.map(c => (
            <div key={c.title} className="card p-6 w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl shadow-lg flex flex-col items-center gap-4 text-white">
              <div className="text-5xl">{c.icon}</div>
              <h3 className="text-2xl font-bold text-[#7c5cf0]">{c.title}</h3>
              <p className="text-gray-400 text-sm text-center">{c.desc}</p>
              <Link href={c.href}>
                <Button variant="contained" color="secondary" className="w-full">Go to {c.title}</Button>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}