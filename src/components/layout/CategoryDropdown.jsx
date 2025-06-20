"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { departments } from "../../data/mockData"

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Departments")

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full md:w-48 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-md hover:bg-gray-50 dark:hover:bg-gray-600 focus-ring"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span className="truncate">{selectedCategory}</span>
        <ChevronDownIcon className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-b-md z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 max-w-6xl">
            {departments.map((dept, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{dept.name}</h3>
                <ul className="space-y-1">
                  {dept.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors focus-ring"
                        onClick={() => {
                          setSelectedCategory(sub)
                          setIsOpen(false)
                        }}
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryDropdown
