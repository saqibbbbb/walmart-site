const WalmartPlusBanner = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-primary rounded-lg p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <img src="/placeholder.svg?height=60&width=200" alt="Walmart+" className="h-12 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Try Walmart+ free for 30 days</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Get free unlimited delivery, member prices on fuel, and so much more. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition-colors duration-200 focus-ring">
                Try free for 30 days
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors duration-200 focus-ring">
                Learn more
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">*Restrictions apply. See terms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalmartPlusBanner
