"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="p-2 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center focus:outline-none focus:ring focus:ring-blue-500 transition"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? <SunIcon className="text-black" /> : <MoonIcon className="text-black" />}
      </button>
    </>
  );
}