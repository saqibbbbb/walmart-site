"use client"

import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Simulate search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-1 max-w-2xl">
      <input
        type="text"
        placeholder="Search Walmart.com"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 h-10 px-4 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <button
        type="submit"
        className="h-10 px-4 bg-primary hover:bg-primary-hover text-white rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </form>
  )
}

export default SearchBar
