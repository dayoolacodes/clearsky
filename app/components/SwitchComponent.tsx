"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightsStay } from "react-icons/md";

export default function SwitchComponent() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-1 sm:absolute right-0 sm:top-0 lg:relative">
      <div
        className="h-full cursor-pointer p-1 hover:bg-black/5 rounded-sm transition"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <CiLight className="text-xl" />
        ) : (
          <MdOutlineNightsStay className="text-xl text-white" />
        )}
      </div>
    </div>
  );
}
