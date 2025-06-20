"use client"

import { useState } from "react"
import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline"
import { useCart } from "../../context/CartContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarIcon key="half" className="h-4 w-4 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarOutlineIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={isHovered ? product.gif : product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">{product.title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          {product.discount && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">-{product.discount}%</span>
          )}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus-ring"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
