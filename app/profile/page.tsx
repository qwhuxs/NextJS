"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, update } = useSession();

  const [name, setName] = useState(session?.user?.name || "");
  const [age, setAge] = useState("");

if (!session) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f3ff] to-[#e9e4ff]">

      <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl text-center">

        <h1 className="text-xl font-semibold mb-4 text-gray-700">
          🔒 Не авторизовано
        </h1>

        <div className="flex gap-3 justify-center">

          {/* 🔑 LOGIN */}
          <Link
            href="/login"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#7c5cf0] to-[#a88beb] text-white hover:scale-105 transition"
          >
            🔐 Увійти
          </Link>

          {/* 🏠 HOME */}
          <Link
            href="/dashboard"
            className="px-6 py-2 rounded-xl bg-white shadow hover:scale-105 transition"
          >
            🏠 На головну
          </Link>

        </div>
      </div>
    </div>
  );
}

  const handleSave = async () => {
    await fetch("/api/profile/update", {
      method: "POST",
      body: JSON.stringify({ name, age }),
    });

    await update();
    alert("Збережено ✅");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f3ff] to-[#e9e4ff]">

      {/* 🔙 */}
      <Link
        href="/dashboard"
        className="mb-6 px-5 py-2 rounded-xl bg-white/60 backdrop-blur-md shadow hover:scale-105 transition"
      >
        ⬅ На dashboard
      </Link>

      {/* 🧑‍💻 CARD */}
      <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-[360px] text-center">

        <h1 className="text-2xl font-bold mb-4 text-[#7c5cf0]">
          👤 Профіль
        </h1>

        <p className="text-gray-600 mb-4">
          {session.user?.email}
        </p>

        <input
          className="input mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ім'я"
        />

        <input
          className="input mb-4"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Вік"
        />

        <button
          onClick={handleSave}
          className="w-full py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-[#7c5cf0] to-[#a88beb]
          shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          💾 Зберегти
        </button>

        <Link
          href="/profile/security"
          className="block mt-4 text-[#7c5cf0] hover:underline"
        >
          🔐 Безпека
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full mt-4 py-3 rounded-xl border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition"
        >
          🚪 Вийти
        </button>
      </div>
    </div>
  );
}