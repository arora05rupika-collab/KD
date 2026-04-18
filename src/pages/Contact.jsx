import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiMessageSquare } from 'react-icons/fi'

const faqs = [
  {
    q: 'What are your store hours?',
    a: 'We are open Monday–Saturday 10 AM to 8 PM and Sunday 11 AM to 6 PM.',
  },
  {
    q: 'Do you offer wholesale/bulk purchasing?',
    a: 'Yes! We have wholesale packs starting from just 50 pieces with savings up to 35%. Minimum 6 pieces per style.',
  },
  {
    q: 'Do you ship across India?',
    a: 'Yes, we ship pan-India. Free delivery on orders above ₹999. Orders are typically delivered in 3–7 business days.',
  },
  {
    q: 'What age range do your clothes cover?',
    a: 'We stock designer boys wear from age 2 (toddlers) up to age 17 (teens), across all categories.',
  },
  {
    q: 'Can I return or exchange products?',
    a: 'Yes, we offer a 15-day exchange policy for retail orders and a 7-day policy for wholesale orders, subject to original condition.',
  },
  {
    q: 'How do I place a wholesale order online?',
    a: 'Fill out the wholesale inquiry form on our Wholesale page, or WhatsApp/call us directly. We confirm orders within 24 hours.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Header */}
      <section className="bg-navy py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[80px]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-white text-5xl sm:text-6xl mb-4"
          >
            We'd Love to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
              Hear from You
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-body"
          >
            Visit us at Gandhi Nagar, call us, or drop a message — we're always happy to help.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <FiPhone />,
              label: 'Call Us',
              value: '+91 92107 06738',
              sub: 'Tue–Sun, 10 AM–8 PM',
              href: 'tel:+919210706738',
              color: 'text-blue-500 bg-blue-50',
            },
            {
              icon: <FiMail />,
              label: 'Email Us',
              value: 'info@kdgarments.in',
              sub: 'Reply within 24 hrs',
              href: 'mailto:info@kdgarments.in',
              color: 'text-emerald-500 bg-emerald-50',
            },
            {
              icon: <FiMapPin />,
              label: 'Visit Us',
              value: 'Gandhi Nagar, Delhi',
              sub: 'Near Mahavir Chowk',
              href: '#map',
              color: 'text-primary-500 bg-primary-50',
            },
            {
              icon: <FiMessageSquare />,
              label: 'WhatsApp',
              value: '+91 92107 06738',
              sub: 'Quick replies guaranteed',
              href: 'https://wa.me/919210706738',
              color: 'text-[#25D366] bg-green-50',
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-3 ${item.color}`}>
                {item.icon}
              </div>
              <p className="font-heading font-bold text-navy text-xs uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-body font-medium text-navy text-sm">{item.value}</p>
              <p className="text-gray-400 text-xs font-body mt-0.5">{item.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <motion.div
            id="map"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-navy text-3xl mb-6">Find Our Store</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 mb-5">
              <iframe
                title="KD Garments – Gandhi Nagar, New Delhi"
                src="https://maps.google.com/maps?q=IX%2F6879+Arya+Samaj+Gali+Near+Mahavir+Chowk+Gandhi+Nagar+New+Delhi+110031+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=IX/6879+Arya+Samaj+Gali+Near+Mahavir+Chowk+Gandhi+Nagar+New+Delhi+110031+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-primary-500 text-white font-heading font-semibold px-5 py-2.5 rounded-full text-sm transition-all"
            >
              <FiMapPin size={14} /> Open in Google Maps
            </a>

            <div className="mt-6 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <h3 className="font-heading font-bold text-navy mb-3">Store Details</h3>
              <div className="space-y-2 text-sm font-body text-gray-600">
                <p>
                  <span className="font-semibold text-navy">Address:</span> IX/6879, Arya Samaj Gali, Near Mahavir Chowk, Gandhi Nagar, New Delhi – 110031
                </p>
                <p>
                  <span className="font-semibold text-navy">Landmark:</span> Near Mahavir Chowk, Gandhi Nagar
                </p>
                <div className="mt-3 space-y-1">
                  {[
                    { day: 'Monday',         time: 'Closed',       closed: true },
                    { day: 'Tue – Fri',      time: '10 AM – 8 PM', closed: false },
                    { day: 'Saturday',       time: '10 AM – 8 PM', closed: false },
                    { day: 'Sunday',         time: '10 AM – 8 PM', closed: false },
                  ].map(({ day, time, closed }) => (
                    <div key={day} className="flex justify-between text-xs">
                      <span className={closed ? 'text-gray-400' : 'text-gray-600'}>{day}</span>
                      <span className={closed ? 'text-red-500 font-semibold' : 'text-gray-700 font-medium'}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-navy text-3xl mb-6">Send Us a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                  <FiCheck size={32} />
                </div>
                <h3 className="font-heading font-bold text-emerald-700 text-xl mb-2">Message Sent!</h3>
                <p className="text-emerald-600 font-body text-sm">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                      Phone *
                    </label>
                    <input
                      required type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 cursor-pointer"
                  >
                    <option value="">Select a topic</option>
                    <option value="retail">Retail Inquiry</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="order">Order / Delivery</option>
                    <option value="return">Return / Exchange</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-navy mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold py-4 rounded-xl transition-all hover:scale-[1.02] text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-heading font-semibold text-navy text-sm pr-4">{faq.q}</span>
                  <span className="text-primary-500 flex-shrink-0 text-xl font-light">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 font-body text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
