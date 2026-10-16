"use client";

import { useActionState } from "react";
import { signInAction } from "@/app/admin/actions";

const initialState = { message: "", success: false };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(
    signInAction,
    initialState
  );

  return (
    <section className="mx-auto my-20 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-widest text-purple-800">
        NIHUB CMS
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-950">Admin sign in</h1>
      <p className="mt-2 text-sm text-gray-600">
        Sign in with an administrator account to manage site content.
      </p>
      <form action={formAction} className="mt-8 space-y-5">
        <label className="block text-sm font-medium text-gray-800">
          Email
          <input
            required
            autoComplete="username"
            type="email"
            name="email"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5"
          />
        </label>
        <label className="block text-sm font-medium text-gray-800">
          Password
          <input
            required
            autoComplete="current-password"
            type="password"
            name="password"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5"
          />
        </label>
        {state.message && (
          <p role="alert" className="text-sm text-red-700">
            {state.message}
          </p>
        )}
        <button
          disabled={pending}
          className="w-full rounded-lg bg-purple-900 px-4 py-3 font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </section>
  );
}
