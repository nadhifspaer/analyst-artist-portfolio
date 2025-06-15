
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex items-center gap-2 rounded-full px-3 py-1 bg-muted border border-border shadow hover:scale-105 transition"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-800" />
      )}
      <span className="font-semibold capitalize text-xs">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default ThemeToggle;
