"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container flex justify-center mt-20">
      <div className="card max-w-md w-full text-center">

        <h1 className="text-2xl font-bold mb-6">Вхід</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-xl border mb-3"
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl border mb-4"
        />

        <button
          onClick={() =>
            signIn("credentials", {
              email,
              password,
              callbackUrl: "/profile",
            })
          }
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-400 text-white font-semibold mb-3"
        >
          Увійти
        </button>

        <button
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="w-full py-2 border rounded-xl mb-2"
        >
          Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/profile" })}
          className="w-full py-2 border rounded-xl"
        >
          GitHub
        </button>
      </div>
    </div>
  )
}