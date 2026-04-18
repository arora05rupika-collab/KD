import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiPackage, FiTrendingUp, FiUsers, FiPhone, FiMail, FiArrowRight, FiStar } from 'react-icons/fi'
import { wholesalePacks } from '../data/products'

const steps = [
  { step: '01', title: 'Choose Your Pack', desc: 'Select a starter, standard, or premium pack based on your budget and needs.' },
  { step: '02', title: 'Place Your Order', desc: 'Call us, WhatsApp, or fill out the inquiry form. We confirm within 24 hours.' },
  { step: '03', title: 'Get Packed & Shipped', desc: 'We pack all items carefully. Pan-India shipping with tracking provided.' },
  { step: '04', title: 'Sell & Earn', desc: 'Sell at your store or online. Get up to 40% margin on every piece.' },
]

const benefits = [
  { icon: <FiStar />, title: 'Best Quality', desc: 'Premium fabrics, durable stitching — guaranteed quality on every piece.' },
  { icon: <FiPackage />, title: 'Flexible Minimums', desc: 'Just 6 pieces per style. No huge MOQ. Perfect for small retailers.' },
  { icon: <FiTrendingUp />, title: 'Trend-First Designs', desc: 'New collections every season. Always be ahead of the trend curve.' },
  { icon: <FiUsers />, title: 'Dedicated Support', desc: 'Your own account manager. WhatsApp support during business hours.' },
]

export default function Wholesale() {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '', city: '', quantity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="bg-navy py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[80px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest"
          >
            For Retailers & Resellers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-white text-5xl sm:text-6xl mb-5 leading-tight"
          >
            Buy Bulk,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
              Save Big
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Join 500+ retailers who source designer kids & teen wear from KD Garments, Gandhi Nagar. Get the best wholesale prices, latest designs, and reliable delivery — all year round.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
            >
              Send Inquiry <FiArrowRight />
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20wholesale%20orders%20from%20KD%20Garments."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-500 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '500+', label: 'Wholesale Clients' },
            { num: 'Min 6', label: 'Pieces Per Style' },
            { num: '35%', label: 'Max Savings' },
            { num: '24h', label: 'Order Confirmation' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="font-heading font-black text-3xl">{num}</p>
              <p className="font-body text-primary-100 text-sm mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Why Retailers Love KD Garments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-500 mx-auto mb-4 text-xl">
                  {b.icon}
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{b.title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing packs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Wholesale Packs
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Choose Your Pack</h2>
            <p className="text-gray-500 font-body mt-3">Assorted mix of latest designs across all categories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wholesalePacks.map((pack, i) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 border-2 flex flex-col ${
                  pack.popular
                    ? 'border-primary-500 bg-navy text-white shadow-2xl shadow-navy/20'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-heading font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-heading font-black text-2xl mb-1 ${pack.popular ? 'text-white' : 'text-navy'}`}>
                  {pack.name}
                </h3>
                <p className={`font-body text-sm mb-4 ${pack.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {pack.description}
                </p>
                <div className="mb-4">
                  <span className={`font-heading font-black text-4xl ${pack.popular ? 'text-white' : 'text-navy'}`}>
                    ₹{pack.price.toLocaleString()}
                  </span>
                  <span className={`text-sm font-body ml-2 ${pack.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                    / {pack.pieces} pieces
                  </span>
                </div>
                <div className="space-y-2.5 mb-6 flex-1">
                  {[
                    `${pack.pieces} assorted pieces`,
                    'Mix of all categories',
                    pack.savings + ' savings vs retail',
                    'Free shipping above ₹5000',
                    '15-day exchange policy',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <FiCheck className="text-emerald-400 flex-shrink-0" size={15} />
                      <span className={`font-body text-sm ${pack.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#inquiry"
                  className={`block text-center font-heading font-bold py-3.5 rounded-xl transition-all hover:scale-105 ${
                    pack.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-navy text-white hover:bg-primary-500'
                  }`}
                >
                  Order This Pack
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 font-body text-sm mt-6">
            Need a custom pack? <a href="#inquiry" className="text-primary-500 font-semibold hover:underline">Contact us</a> for bulk custom orders.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white font-heading font-black text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-gray-300 text-2xl z-10">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories available */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-navy text-3xl mb-8">Available Wholesale Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Shirts', 'Party Wear', 'Ethnic / Sherwani', 'Casual Sets', 'Formal Suits', 'Teen Wear'].map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-2 bg-gray-100 text-navy font-body font-medium px-4 py-2.5 rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Send a Wholesale Inquiry</h2>
            <p className="text-gray-500 font-body text-sm mt-3">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-10 text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                <FiCheck size={32} />
              </div>
              <h3 className="font-heading font-bold text-emerald-700 text-2xl mb-2">Inquiry Submitted!</h3>
              <p className="text-emerald-600 font-body">
                Thank you, {form.name}! We'll contact you at {form.phone} within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Business Name *
                  </label>
                  <input
                    name="business" value={form.business} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="Your shop/business"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange} required type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    name="email" value={form.email} onChange={handleChange} type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    City / State *
                  </label>
                  <input
                    name="city" value={form.city} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Approx. Quantity
                  </label>
                  <select
                    name="quantity" value={form.quantity} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 cursor-pointer"
                  >
                    <option value="">Select range</option>
                    <option value="50-100">50–100 pieces</option>
                    <option value="100-250">100–250 pieces</option>
                    <option value="250-500">250–500 pieces</option>
                    <option value="500+">500+ pieces</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                  Message / Requirements
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none"
                  placeholder="Tell us what categories/styles you're looking for…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold py-4 rounded-xl transition-all hover:scale-[1.02] text-sm"
              >
                Submit Wholesale Inquiry
              </button>
            </form>
          )}

          <p className="text-center text-gray-500 font-body text-sm mt-5">
            Or call us directly:{' '}
            <a href="tel:+919876543210" className="text-primary-500 font-semibold hover:underline">
              +91 98765 43210
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
