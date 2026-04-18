import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
import { products, WA_PHONE } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [search, setSearch] = useState('')
  const [pincode, setPincode] = useState('')

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
            {products.length} Zabardast Designs, Bachpan Se Jawaani Tak
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

        {/* Retailer finder banner */}
        <div className="bg-navy text-white rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-heading font-bold text-base mb-0.5">Want to buy just 1 piece? No shipping charge?</p>
            <p className="text-gray-300 font-body text-sm">Enter your pincode and we will connect you to the nearest retailer in your city.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              className="w-28 px-3 py-2 rounded-xl text-sm font-body text-navy focus:outline-none"
            />
            <a
              href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`Hi KD Garments! I want to buy a single piece. My pincode is ${pincode || 'XXXXXX'}. Please share the nearest retailer details or delivery options.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-semibold text-sm px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Find Retailer
            </a>
          </div>
        </div>

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
