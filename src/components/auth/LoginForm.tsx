"use client";

import { FormEvent } from "react";
import { usePasswordVisibility } from "@/components/hooks/usePasswordVisibility";

type LoginFormProps = {
  onSubmit?: (values: { email: string; password: string }) => void;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const { visible, type, toggle } = usePasswordVisibility();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    onSubmit?.({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        <label
          htmlFor="email"
          style={{ fontSize: "0.9rem", fontWeight: 500, color: "#0f172a" }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          style={{
            padding: "0.65rem 0.8rem",
            borderRadius: "0.75rem",
            border: "1px solid #cbd5f5",
            fontSize: "0.9rem",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        <label
          htmlFor="password"
          style={{ fontSize: "0.9rem", fontWeight: 500, color: "#0f172a" }}
        >
          Mật khẩu
        </label>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            id="password"
            name="password"
            type={type}
            placeholder="••••••••"
            style={{
              padding: "0.65rem 2.6rem 0.65rem 0.8rem",
              borderRadius: "0.75rem",
              border: "1px solid #cbd5f5",
              fontSize: "0.9rem",
              outline: "none",
              width: "100%",
            }}
          />
          <button
            type="button"
            onClick={toggle}
            style={{
              position: "absolute",
              right: "0.4rem",
              height: "1.9rem",
              width: "1.9rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "transparent",
              color: "#4b5563",
              cursor: "pointer",
            }}
            aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          >
            {visible === false ? (
              // eye-off icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                color="white"
                style={{ height: "1.15rem", width: "1.15rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18M10.477 10.49A3 3 0 0115 12m-3 3a2.99 2.99 0 01-1.51-.415M6.228 6.273C4.357 7.34 2.942 9.02 2 12c2 5 6 7 10 7 1.467 0 2.843-.278 4.07-.796M9.88 4.47A8.22 8.22 0 0112 4c4 0 8 2 10 8a11.78 11.78 0 01-1.345 2.568"
                />
              </svg>
            ) : (
              // eye icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                color="white"
                style={{ height: "1.15rem", width: "1.15rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 12s2-7 10-7 10 7 10 7-2 7-10 7S2 12 2 12z"
                />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        style={{
          marginTop: "0.5rem",
          padding: "0.7rem 0.9rem",
          borderRadius: "999px",
          border: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #6366f1 45%, #22c55e 100%)",
          color: "#f9fafb",
          cursor: "pointer",
        }}
      >
        Sign in
      </button>
    </form>
  );
}
