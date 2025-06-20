"use client"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full focus-ring transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
    </button>
  )
}

export default ThemeToggle
