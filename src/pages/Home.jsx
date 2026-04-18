import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiTruck, FiShield, FiPackage, FiStar, FiMapPin } from 'react-icons/fi'
import { products, categories, ageGroups } from '../data/products'
import ProductCard from '../components/ProductCard'

const featured = products.filter((p) => p.featured)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const trustBadges = [
  { icon: <FiTruck size={22} />, title: 'Free Delivery', sub: 'Orders above ₹999' },
  { icon: <FiShield size={22} />, title: '100% Genuine', sub: 'Quality guaranteed' },
  { icon: <FiPackage size={22} />, title: 'Bulk Orders', sub: 'Min 6 pcs/style' },
  { icon: <FiStar size={22} />, title: '10,000+ Happy', sub: 'Customers served' },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Retail Shop Owner, Karol Bagh',
    text: 'Been sourcing from KD Garments for 3 years. Quality is top-notch and delivery is always on time. Best wholesale rates in Gandhi Nagar!',
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Mehta',
    role: 'Parent',
    text: 'My son loves the clothes! The ethnic wear collection is amazing for festivals. Very affordable and the fabric quality is excellent.',
    rating: 5,
    avatar: 'PM',
  },
  {
    name: 'Ankit Jain',
    role: 'Online Reseller',
    text: 'Started my reselling business with KD Garments starter packs. Customers always appreciate the designs. Highly recommend!',
    rating: 5,
    avatar: 'AJ',
  },
]

export default function Home() {
  return (
    <div className="font-body">
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-[#2d1b69] opacity-95" />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-purple-500/15 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            >
              <FiMapPin size={12} /> Gandhi Nagar, New Delhi
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-black text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-5"
            >
              Designer Kids{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
                &amp; Teen
              </span>
              <br />
              Wear That Shines
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 font-body text-lg leading-relaxed max-w-lg mb-8"
            >
              Trendy, affordable boys fashion from age 2 to 17. Buy retail or in bulk wholesale — all from our Gandhi Nagar store and online.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/30"
              >
                Shop Now <FiArrowRight size={18} />
              </Link>
              <Link
                to="/wholesale"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-primary-400 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5"
              >
                Wholesale Inquiry
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mt-10">
              {[
                { num: '500+', label: 'Styles Available' },
                { num: '10K+', label: 'Happy Customers' },
                { num: '15+', label: 'Years in Business' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-heading font-black text-white text-3xl">{num}</p>
                  <p className="text-gray-400 text-xs font-body mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: floating product cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80"
                  alt="Kids fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-14 top-10 bg-white rounded-2xl p-3 shadow-xl w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&q=80"
                  alt="Product"
                  className="w-full h-24 object-cover rounded-xl mb-2"
                />
                <p className="font-heading font-semibold text-navy text-xs leading-snug">Graphic Tee</p>
                <p className="text-primary-500 font-bold text-sm">₹349</p>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-12 bottom-10 bg-white rounded-2xl p-3 shadow-xl w-36"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FiStar key={s} size={10} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>
                <p className="font-heading font-semibold text-navy text-xs">10K+ Happy Customers</p>
              </motion.div>

              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white rounded-2xl px-3 py-2 shadow-lg">
                <p className="font-heading font-black text-lg leading-none">15+</p>
                <p className="text-[10px] font-body">Yrs Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────────────────────── */}
      <section className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 text-white py-2">
              <div className="opacity-80">{icon}</div>
              <div>
                <p className="font-heading font-bold text-sm">{title}</p>
                <p className="text-primary-100 text-xs font-body">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Browse by Style
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Shop by Category</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="flex flex-col items-center gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group border border-gray-100"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="font-heading font-semibold text-navy text-xs text-center leading-snug">
                    {cat.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE GROUPS ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              For Every Age
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Shop by Age Group</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: 'toddler',
                label: 'Toddlers',
                range: '2–4 yrs',
                img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
                color: 'from-pink-400 to-rose-500',
              },
              {
                id: 'kids',
                label: 'Kids',
                range: '5–8 yrs',
                img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80',
                color: 'from-blue-400 to-indigo-500',
              },
              {
                id: 'boys',
                label: 'Boys',
                range: '9–12 yrs',
                img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
                color: 'from-emerald-400 to-teal-500',
              },
              {
                id: 'teens',
                label: 'Teens',
                range: '13–17 yrs',
                img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80',
                color: 'from-violet-400 to-purple-600',
              },
            ].map((ag, i) => (
              <motion.div
                key={ag.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/shop?age=${ag.id}`}
                  className="relative block rounded-2xl overflow-hidden aspect-[3/4] group"
                >
                  <img
                    src={ag.img}
                    alt={ag.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ag.color} opacity-60`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-white">
                    <h3 className="font-heading font-black text-xl">{ag.label}</h3>
                    <p className="font-body text-sm opacity-90">{ag.range}</p>
                    <span className="mt-3 bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-heading font-semibold px-3 py-1 rounded-full">
                      Shop Now →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
                Handpicked for You
              </span>
              <h2 className="font-heading font-black text-navy text-4xl mt-2">Featured Products</h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-2 text-primary-500 font-heading font-semibold hover:gap-3 transition-all"
            >
              View All <FiArrowRight />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {featured.slice(0, 8).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-navy hover:bg-primary-500 text-white font-heading font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              View All Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHOLESALE BANNER ─────────────────────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-primary-500 to-transparent" />
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-[60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              For Retailers & Resellers
            </span>
            <h2 className="font-heading font-black text-white text-4xl sm:text-5xl leading-tight mb-5">
              Grow Your Business with
              <span className="text-primary-400"> Bulk Orders</span>
            </h2>
            <p className="text-gray-300 font-body leading-relaxed mb-8">
              Get the best wholesale prices in Gandhi Nagar. Minimum 6 pieces per style. All designs available for bulk purchase with custom packaging options.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: 'Min 6', label: 'Pieces/Style' },
                { num: '35%', label: 'Max Savings' },
                { num: '500+', label: 'Wholesale Clients' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <p className="font-heading font-black text-primary-400 text-2xl">{num}</p>
                  <p className="text-gray-400 text-xs font-body">{label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/wholesale"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary-500/30"
            >
              Explore Wholesale <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&q=80', label: 'T-Shirts' },
              { img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80', label: 'Jeans' },
              { img: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=300&q=80', label: 'Ethnic' },
              { img: 'https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?w=300&q=80', label: 'Sportswear' },
            ].map(({ img, label }) => (
              <div key={label} className="relative rounded-2xl overflow-hidden aspect-square">
                <img src={img} alt={label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-heading font-semibold text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              What Our Customers Say
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Loved by 10,000+ People</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <FiStar key={s} size={14} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs font-body">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT US / MAP PREVIEW ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Find Us
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Visit Our Store</h2>
            <p className="text-gray-500 font-body mt-3 max-w-md mx-auto">
              Come visit us at Gandhi Nagar Market, New Delhi. We'd love to show you our latest collection in person.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96"
            >
              <iframe
                title="KD Garments – Gandhi Nagar, New Delhi"
                src="https://maps.google.com/maps?q=IX%2F6879+Arya+Samaj+Gali+Near+Mahavir+Chowk+Gandhi+Nagar+New+Delhi+110031+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy mb-1">Our Address</h4>
                  <p className="text-gray-500 font-body text-sm">
                    IX/6879, Arya Samaj Gali,<br />Near Mahavir Chowk, Gandhi Nagar,<br />New Delhi – 110031
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-heading font-semibold text-navy text-sm mb-2">Store Hours</h4>
                  <p className="text-gray-500 font-body text-xs">Tue – Sun: 10 AM – 8 PM</p>
                  <p className="text-red-400 font-body text-xs font-semibold">Monday: Closed</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-heading font-semibold text-navy text-sm mb-2">Contact</h4>
                  <a href="tel:+919210706738" className="text-primary-500 font-body text-xs block hover:underline">
                    +91 92107 06738
                  </a>
                  <a href="https://wa.me/919210706738" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-body text-xs block hover:underline mt-1">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-primary-500 text-white font-heading font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
              >
                Get Directions <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
