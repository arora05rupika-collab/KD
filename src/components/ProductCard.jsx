import { useState } from 'react'
import { FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const badgeColors = {
  Bestseller:    'bg-amber-500',
  Trending:      'bg-purple-500',
  New:           'bg-emerald-500',
  Premium:       'bg-yellow-500 text-yellow-900',
  'Value Pack':  'bg-blue-500',
  'Festive Pick':'bg-rose-500',
  'Cute Pick':   'bg-pink-500',
}

export default function ProductCard({ product }) {
  const { dispatch } = useCart()
  const [liked, setLiked] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [added, setAdded] = useState(false)

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  const handleAdd = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
      },
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[11px] text-white font-heading font-bold px-2.5 py-1 rounded-full ${
              badgeColors[product.badge] || 'bg-primary-500'
            }`}
          >
            {product.badge}
          </span>
        )}
        {/* Discount */}
        <span className="absolute top-3 right-12 bg-green-500 text-white text-[11px] font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>
        {/* Wishlist */}
        <button
          onClick={() => setLiked((v) => !v)}
          className={`absolute top-3 right-3 p-1.5 rounded-full transition-all ${
            liked ? 'bg-red-100 text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-400'
          }`}
        >
          <FiHeart size={14} fill={liked ? 'currentColor' : 'none'} />
        </button>
        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-1.5 flex-wrap justify-center">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors ${
                  selectedSize === s
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-navy hover:bg-primary-100'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <div className="flex items-start gap-1">
          <div className="flex-1">
            <p className="text-[11px] text-gray-400 font-body uppercase tracking-wide">{product.ageRange}</p>
            <h3 className="font-heading font-semibold text-navy text-sm leading-snug line-clamp-2 mt-0.5">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar
                key={i}
                size={11}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400 font-body">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="font-heading font-bold text-navy text-lg">₹{product.price}</span>
          <span className="text-gray-400 text-xs line-through font-body">₹{product.mrp}</span>
        </div>

        <p className="text-[11px] text-emerald-600 font-body">
          Wholesale from ₹{product.wholesalePrice}/pc (min {product.minWholesale} pcs)
        </p>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={`mt-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-heading font-semibold text-sm transition-all duration-200 ${
            added
              ? 'bg-emerald-500 text-white'
              : 'bg-navy text-white hover:bg-primary-500'
          }`}
        >
          <FiShoppingCart size={15} />
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
