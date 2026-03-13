"use client";

import { useState } from "react";

export function usePasswordVisibility() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  return {
    visible,
    type: visible ? "text" : "password",
    toggle,
  };
}

