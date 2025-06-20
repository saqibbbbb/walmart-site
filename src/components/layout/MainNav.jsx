"use client"

import { useState } from "react"
import {
  MicrophoneIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import CategoryDropdown from "./CategoryDropdown"
import SearchBar from "./SearchBar"
import ThemeToggle from "../ui/ThemeToggle"
import { useCart } from "../../context/CartContext"

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="focus-ring rounded">
              <img src="/placeholder.svg?height=40&width=128" alt="Walmart" className="w-32 h-10" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 max-w-3xl mx-8">
            <CategoryDropdown />
            <SearchBar />
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full focus-ring">
              <MicrophoneIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full focus-ring">
              <UserIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full focus-ring">
              <ClipboardDocumentListIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full focus-ring relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-walmart-yellow text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <CategoryDropdown />
              <SearchBar />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default MainNav
