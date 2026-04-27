"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card w-full max-w-md text-center">

      <h1 className="text-2xl font-bold mb-4">Вхід</h1>

      <input
        className="input mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input mb-4"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* credentials */}
      <button
        onClick={() =>
          signIn("credentials", {
            email,
            password,
            callbackUrl: "/profile",
          })
        }
        className="w-full py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-[#7c5cf0] to-[#9f8af0] mb-3"
      >
        Увійти
      </button>

      {/* Google */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/profile" })}
        className="social-btn w-full mb-2"
      >
        Google
      </button>

      {/* GitHub */}
      <button
        onClick={() => signIn("github", { callbackUrl: "/profile" })}
        className="social-btn w-full"
      >
        GitHub
      </button>
    </div>
  );
}