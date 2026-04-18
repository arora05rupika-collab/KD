import { FiStar } from 'react-icons/fi'
import { WA_PHONE } from '../data/products'

const badgeColors = {
  'New Arrival': 'bg-emerald-500',
  Bestseller:    'bg-amber-500',
  Trending:      'bg-purple-500',
  Premium:       'bg-yellow-500 text-yellow-900',
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export default function ProductCard({ product }) {
  const priceText = product.showPrice
    ? `₹${product.price} · Sizes: ${product.sizeRange}`
    : `Sizes: ${product.sizeRange}`

  const waMessage = product.showPrice
    ? `Hi KD Garments! I'm interested in *${product.name}* (Sizes: ${product.sizeRange}, Price: ₹${product.price}). Please confirm availability.`
    : `Hi KD Garments! I'm interested in *${product.name}* (Sizes: ${product.sizeRange}). Please share price and availability.`

  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMessage)}`

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[11px] text-white font-heading font-bold px-2.5 py-1 rounded-full ${
              badgeColors[product.badge] || 'bg-primary-500'
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <p className="text-[11px] text-gray-400 font-body uppercase tracking-wide">{product.ageRange}</p>
        <h3 className="font-heading font-semibold text-navy text-sm leading-snug line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 font-body">Sizes: {product.sizeRange}</p>

        {/* Price or inquiry label */}
        {product.showPrice ? (
          <p className="font-heading font-black text-navy text-xl mt-1">
            ₹{product.price}
          </p>
        ) : (
          <p className="text-xs text-primary-500 font-body font-semibold mt-1 italic">
            Price on inquiry
          </p>
        )}

        {/* WhatsApp button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl font-heading font-semibold text-sm bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-200"
        >
          <WhatsAppIcon />
          {product.showPrice ? 'Order on WhatsApp' : 'Inquire on WhatsApp'}
        </a>
      </div>
    </div>
  )
}
