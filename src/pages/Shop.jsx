import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFilter, FiX, FiSearch, FiGrid, FiList } from 'react-icons/fi'
import { products, categories, ageGroups } from '../data/products'
import ProductCard from '../components/ProductCard'

const sortOptions = [
  { value: 'featured',    label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating',     label: 'Top Rated' },
  { value: 'new',        label: 'New Arrivals' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')

  const activeCat = searchParams.get('category') || ''
  const activeAge = searchParams.get('age') || ''

  const setCat = (id) => {
    const p = new URLSearchParams(searchParams)
    if (p.get('category') === id) p.delete('category')
    else p.set('category', id)
    setSearchParams(p)
  }

  const setAge = (id) => {
    const p = new URLSearchParams(searchParams)
    if (p.get('age') === id) p.delete('age')
    else p.set('age', id)
    setSearchParams(p)
  }

  const clearAll = () => setSearchParams({})

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCat) list = list.filter((p) => p.category === activeCat)
    if (activeAge) list = list.filter((p) => p.ageGroup === activeAge)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    switch (sort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break
      case 'new':        list.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0)); break
      default: list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return list
  }, [activeCat, activeAge, search, sort])

  const hasFilters = activeCat || activeAge

  const Sidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3">
          Category
        </h3>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCat(cat.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-body transition-colors text-left ${
                activeCat === cat.id
                  ? 'bg-primary-500 text-white font-semibold'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Age groups */}
      <div>
        <h3 className="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3">
          Age Group
        </h3>
        <div className="space-y-1.5">
          {ageGroups.map((ag) => (
            <button
              key={ag.id}
              onClick={() => setAge(ag.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-body transition-colors text-left ${
                activeAge === ag.id
                  ? 'bg-primary-500 text-white font-semibold'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <span>{ag.label}</span>
              <span className={`text-xs ${activeAge === ag.id ? 'text-primary-100' : 'text-gray-400'}`}>
                {ag.range}
              </span>
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-red-200 text-red-500 hover:bg-red-50 font-body font-medium text-sm transition-colors"
        >
          <FiX size={14} /> Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Page header */}
      <div className="bg-navy text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-black text-4xl mb-2">Shop All</h1>
          <p className="text-gray-300 font-body text-sm">
            Designer kids & teen wear — {products.length} styles available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-body focus:outline-none focus:border-primary-400 cursor-pointer"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-navy text-white font-body font-medium text-sm"
          >
            <FiFilter size={15} /> Filters
            {hasFilters && (
              <span className="bg-primary-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {[activeCat, activeAge].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* Active filter chips */}
        {hasFilters && (
          <div className="flex flex-wrap gap-2 mb-5">
            {activeCat && (
              <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                {categories.find((c) => c.id === activeCat)?.label}
                <button onClick={() => setCat(activeCat)}>
                  <FiX size={12} />
                </button>
              </span>
            )}
            {activeAge && (
              <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                {ageGroups.find((a) => a.id === activeAge)?.label}
                <button onClick={() => setAge(activeAge)}>
                  <FiX size={12} />
                </button>
              </span>
            )}
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar – desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-24">
              <Sidebar />
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <p className="text-gray-500 font-body text-sm mb-5">
              Showing <span className="font-semibold text-navy">{filtered.length}</span> products
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="font-heading font-semibold text-xl mb-2">No products found</p>
                <p className="font-body text-sm">Try adjusting your filters or search term</p>
                <button onClick={clearAll} className="mt-4 text-primary-500 font-medium text-sm underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                <AnimatePresence>
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-2xl p-5 overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-navy text-lg">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <FiX size={20} />
              </button>
            </div>
            <Sidebar />
          </div>
        </>
      )}
    </div>
  )
}
