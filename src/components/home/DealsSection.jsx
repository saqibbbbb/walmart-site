import ProductCard from "../ui/ProductCard"
import { products } from "../../data/mockData"

const DealsSection = ({ title }) => {
  // Filter products based on section title
  const sectionProducts =
    title === "Today's Deals" ? products.filter((p) => p.discount > 0).slice(0, 6) : products.slice(6, 12)

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <a href="#" className="text-primary hover:text-primary-hover font-medium focus-ring">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealsSection
