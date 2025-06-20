import { departments } from "../../data/mockData"

const DepartmentGrid = () => {
  const departmentIcons = ["🛒", "👕", "🏠", "💻", "🎮", "🚗", "💊", "🍎", "👶", "🐕", "🎨", "⚽"]

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Shop by Department</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.slice(0, 12).map((dept, index) => (
            <a
              key={index}
              href="#"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 p-6 text-center group focus-ring"
            >
              <div className="text-4xl mb-3">{departmentIcons[index] || "🛍️"}</div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {dept.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentGrid
