"use client"

import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=1200",
      title: "Save Big on Electronics",
      subtitle: "Up to 50% off on laptops, phones, and more",
      cta: "Shop Now",
      bgColor: "bg-gradient-to-r from-blue-600 to-purple-600",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=1200",
      title: "Fresh Groceries Delivered",
      subtitle: "Get fresh produce and essentials delivered to your door",
      cta: "Order Now",
      bgColor: "bg-gradient-to-r from-green-600 to-blue-600",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=1200",
      title: "Home & Garden Sale",
      subtitle: "Transform your space with our home essentials",
      cta: "Explore",
      bgColor: "bg-gradient-to-r from-orange-600 to-red-600",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`${slide.bgColor} h-full flex items-center justify-center relative`}>
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus-ring">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 focus-ring"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 focus-ring"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 focus-ring ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
