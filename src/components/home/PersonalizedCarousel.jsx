"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import ProductCard from "../ui/ProductCard"
import { products } from "../../data/mockData"

const PersonalizedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4
  const personalizedProducts = products.slice(0, 8)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= personalizedProducts.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? Math.max(0, personalizedProducts.length - itemsPerPage) : prev - itemsPerPage,
    )
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recommended for you</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 focus-ring"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 focus-ring"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {personalizedProducts.map((product) => (
              <div key={product.id} className="w-1/4 flex-shrink-0 px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizedCarousel
