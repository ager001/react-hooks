"use client";

import { useActionState } from "react";

type LoginState = {
  error?: string;
  success?: boolean;
};

async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      return { error: "Invalid credentials" };
    }

    return { success: true };
  } catch {
    return { error: "Something went wrong" };
  }
}

export default function LoginForm() {
  const [state, action, isPending] = useActionState<LoginState, FormData>(
    loginAction,
    {}
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        action={action}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Login
        </h2>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="••••••••"
          />
        </div>

        {/* Feedback Messages */}
        {state?.error && (
          <p className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">
            {state.error}
          </p>
        )}

        {state?.success && (
          <p className="text-sm text-green-600 bg-green-50 p-2 rounded-lg">
            Logged in successfully!
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 rounded-lg font-medium text-white transition 
            ${
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
