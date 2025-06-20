"use client"

import { useState } from "react"
import AppLayout from "../layout/AppLayout"
import HeroCarousel from "../home/HeroCarousel"
import PromoStrip from "../home/PromoStrip"
import DepartmentGrid from "../home/DepartmentGrid"
import DealsSection from "../home/DealsSection"
import PersonalizedCarousel from "../home/PersonalizedCarousel"
import WalmartPlusBanner from "../home/WalmartPlusBanner"
import ProductCard from "../ui/ProductCard"
import { products } from "../../data/mockData"
import { useCart } from "../../context/CartContext"

const PreviewPage = () => {
  const [activeSection, setActiveSection] = useState("full")
  const { items, getTotalItems, getTotalPrice } = useCart()

  const sections = [
    { id: "full", name: "Full Homepage", component: "full" },
    { id: "header", name: "Header & Navigation", component: "header" },
    { id: "hero", name: "Hero Carousel", component: HeroCarousel },
    { id: "promo", name: "Promo Strip", component: PromoStrip },
    { id: "departments", name: "Department Grid", component: DepartmentGrid },
    { id: "deals", name: "Deals Section", component: () => <DealsSection title="Today's Deals" /> },
    { id: "personalized", name: "Personalized Carousel", component: PersonalizedCarousel },
    { id: "walmart-plus", name: "Walmart+ Banner", component: WalmartPlusBanner },
    { id: "product-cards", name: "Product Cards", component: "products" },
  ]

  const renderSection = () => {
    const section = sections.find((s) => s.id === activeSection)

    if (activeSection === "full") {
      return (
        <div className="space-y-0">
          <HeroCarousel />
          <PromoStrip />
          <DepartmentGrid />
          <DealsSection title="Today's Deals" />
          <PersonalizedCarousel />
          <DealsSection title="Trending Now" />
          <WalmartPlusBanner />
        </div>
      )
    }

    if (activeSection === "header") {
      return (
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Header components are visible at the top of this page
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">The header includes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>Top bar with links and language selector</li>
            <li>Main navigation with logo, search, and cart</li>
            <li>Category dropdown with mega menu</li>
            <li>Mobile responsive hamburger menu</li>
            <li>Theme toggle for dark/light mode</li>
            <li>Cart counter showing: {getTotalItems()} items</li>
          </ul>
        </div>
      )
    }

    if (activeSection === "products") {
      return (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Product Cards Showcase</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )
    }

    if (section && typeof section.component === "function") {
      const Component = section.component
      return <Component />
    }

    return null
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Preview Navigation */}
        <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Walmart Clone Preview</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Cart: {getTotalItems()} items</span>
                <span>Total: ${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            {/* Section Tabs */}
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus-ring ${
                    activeSection === section.id
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          {activeSection !== "full" && (
            <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {sections.find((s) => s.id === activeSection)?.name}
              </h2>
              <p className="text-blue-700 dark:text-blue-300">
                {activeSection === "hero" && "Auto-rotating carousel with navigation arrows and dots indicator"}
                {activeSection === "promo" && "Horizontal scrolling promotional cards with hover effects"}
                {activeSection === "departments" && "Responsive grid layout with department categories"}
                {activeSection === "deals" && "Product grid with discount badges and ratings"}
                {activeSection === "personalized" && "Carousel with navigation arrows for product recommendations"}
                {activeSection === "walmart-plus" && "Promotional banner with call-to-action buttons"}
                {activeSection === "product-cards" && "Individual product cards with add to cart functionality"}
                {activeSection === "header" && "Complete header with navigation, search, and cart functionality"}
              </p>
            </div>
          )}

          <div className="space-y-8">{renderSection()}</div>
        </div>

        {/* Feature Highlights */}
        {activeSection === "full" && (
          <div className="bg-gray-50 dark:bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Features Implemented
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎨 Responsive Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mobile-first approach with breakpoints at sm (640px), md (768px), lg (1024px), and xl (1280px)
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🛒 Shopping Cart</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full cart functionality with add/remove items, quantity updates, and persistent state
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🌙 Dark Mode</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complete dark mode implementation with theme toggle and localStorage persistence
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">♿ Accessibility</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focus management, alt text, semantic HTML, and keyboard navigation support
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔍 Search & Filter</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Working search bar with category dropdown and mega menu navigation
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">⚡ Performance</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lazy loading images, optimized re-renders, and smooth CSS transitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Shopping Cart Preview */}
        {items.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700 max-w-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cart Preview</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {items.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center space-x-2 text-sm">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <span className="flex-1 truncate text-gray-700 dark:text-gray-300">{item.title}</span>
                  <span className="text-gray-500 dark:text-gray-400">×{item.quantity}</span>
                </div>
              ))}
              {items.length > 3 && (
                <p className="text-xs text-gray-500 dark:text-gray-400">+{items.length - 3} more items</p>
              )}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-900 dark:text-white">Total: ${getTotalPrice().toFixed(2)}</span>
                <span className="text-gray-600 dark:text-gray-400">{getTotalItems()} items</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default PreviewPage
