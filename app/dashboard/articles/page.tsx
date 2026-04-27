import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] to-[#e9e4ff] p-6">

      {/* 🔙 */}
      <Link
        href="/dashboard"
        className="inline-block mb-6 px-5 py-2 rounded-xl bg-white/60 backdrop-blur-md shadow hover:scale-105 transition"
      >
        ⬅ На dashboard
      </Link>

      {/* 🔥 HEADER */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 text-center shadow-2xl">

        <h1 className="text-3xl font-bold text-[#7c5cf0] mb-2">
          📄 Articles
        </h1>

        <p className="text-gray-500 mb-6">
          Тут будуть твої статті ✨
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c5cf0] to-[#a88beb] text-white shadow-md hover:scale-105 transition">
            ➕ Створити статтю
          </button>

          <button className="px-6 py-3 rounded-xl bg-white shadow hover:bg-gray-100 transition">
            📋 Список статей
          </button>

        </div>
      </div>
    </div>
  );
}