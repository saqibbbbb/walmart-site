const TopBar = () => {
  return (
    <div className="h-8 bg-gray-800 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Left side links */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors focus-ring">
            Reorder
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors focus-ring">
            Lists
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors focus-ring">
            Registries
          </a>
        </div>

        {/* Center dropdown */}
        <div className="flex items-center">
          <select className="bg-transparent text-white text-xs border-none focus:outline-none focus-ring">
            <option value="">Pickup or delivery?</option>
            <option value="pickup">Store Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        {/* Right side links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors focus-ring">
            Sign In / Account
          </a>
          <select className="bg-transparent text-white text-xs border-none focus:outline-none focus-ring">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <a href="#" className="hover:text-gray-300 transition-colors focus-ring">
            Try Walmart+
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
