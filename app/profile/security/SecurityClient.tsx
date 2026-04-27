"use client";

import { useState } from "react";
import Link from "next/link";

export default function SecurityClient() {
  const [password, setPassword] = useState("");

  const handleChange = async () => {
    await fetch("/api/profile/change-password", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    setPassword("");
    alert("Пароль змінено ✅");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f3ff] to-[#e9e4ff]">

      <Link
        href="/profile"
        className="mb-6 px-5 py-2 rounded-xl bg-white/60 backdrop-blur-md shadow hover:scale-105 transition"
      >
        ⬅ Назад
      </Link>

      <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-[360px] text-center">

        <h1 className="text-2xl font-bold mb-4 text-[#7c5cf0]">
          🔐 Зміна пароля
        </h1>

        <input
          type="password"
          placeholder="Новий пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input mb-4"
        />

        <button
          onClick={handleChange}
          className="w-full py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-[#7c5cf0] to-[#a88beb]
          shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          🔄 Змінити
        </button>
      </div>
    </div>
  );
}