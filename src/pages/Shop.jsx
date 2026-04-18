import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return products
    const q = search.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nameHint?.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Page header */}
      <div className="bg-navy text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/shop-front.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-primary-300 font-body text-sm uppercase tracking-widest mb-2">
            Hamaara Collection
          </p>
          <h1 className="font-heading font-black text-white text-5xl sm:text-6xl mb-3">
            Tamaam Pehnaish
          </h1>
          <p className="text-gray-300 font-body">
            {products.length} Zabardast Designs — Bachpan Se Jawaani Tak
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-10">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Kuch Dhundhen... (e.g. Sherwani, Check, Suit)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-sm font-body focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 shadow-sm"
          />
        </div>

        <p className="text-gray-500 font-body text-sm mb-6 text-center">
          <span className="font-semibold text-navy text-base">{filtered.length}</span> designs mil rahe hain
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="font-heading text-2xl mb-2">Kuch Nahi Mila</p>
            <button onClick={() => setSearch('')} className="text-primary-500 font-body text-sm underline mt-2">
              Sab Dikhao
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <AnimatePresence>
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
