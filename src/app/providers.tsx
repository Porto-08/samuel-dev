"use client";

import { DarkModeStorage } from "../context/DarkModeContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <DarkModeStorage>{children}</DarkModeStorage>;
};
