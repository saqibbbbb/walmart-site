const PromoStrip = () => {
  const promos = [
    {
      id: 1,
      image: "/placeholder.svg?height=120&width=200",
      title: "Free Shipping",
      subtitle: "On orders $35+",
      link: "#",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=120&width=200",
      title: "Pickup Today",
      subtitle: "Ready in 1 hour",
      link: "#",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=120&width=200",
      title: "Walmart+",
      subtitle: "Free delivery",
      link: "#",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=120&width=200",
      title: "Rollbacks",
      subtitle: "Great prices",
      link: "#",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=120&width=200",
      title: "Gift Cards",
      subtitle: "Perfect gifts",
      link: "#",
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {promos.map((promo) => (
            <a
              key={promo.id}
              href={promo.link}
              className="min-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 text-center group focus-ring"
            >
              <img
                src={promo.image || "/placeholder.svg"}
                alt={promo.title}
                className="w-full h-20 object-cover rounded mb-3 group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{promo.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{promo.subtitle}</p>
              <span className="text-primary text-xs font-medium hover:underline">Shop now</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PromoStrip
