import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiAward, FiGlobe, FiMapPin } from 'react-icons/fi'
import { WA_PHONE } from '../data/products'

const values = [
  {
    icon: <FiHeart />,
    title: 'Crafted with Care',
    desc: 'Every piece is made with attention to comfort and durability. Quality you can feel.',
  },
  {
    icon: <FiAward />,
    title: 'Premium Fabric',
    desc: 'Only the best materials. Every stitch is checked before it reaches you.',
  },
  {
    icon: <FiGlobe />,
    title: 'Trusted Worldwide',
    desc: 'Customers from Middle East, New Zealand, and across India trust us. 44 years of goodwill.',
  },
  {
    icon: <FiMapPin />,
    title: 'Gandhi Nagar Since 1980',
    desc: "Rooted in Delhi's garment market for over four decades. Same place, same commitment.",
  },
]

const team = [
  {
    name: 'Kodu Ram Ji',
    role: 'Founder (1980)',
    avatar: 'KR',
    bio: 'Started KD Garments from a small shop in Gandhi Nagar. His hard work and honesty built the trust that brings customers from across the world today.',
  },
  {
    name: 'The Arora Family',
    role: 'Running the Business',
    avatar: 'KD',
    bio: "Kodu Ram Ji's sons now manage the business together, carrying forward the same values. New designs, same dedication.",
  },
]

export default function About() {
  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Hello KD Garments! I would like to know more about your collection.')}`

  return (
    <div className="min-h-screen pt-24 bg-cream">
      {/* Hero */}
      <section className="bg-navy py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/shop-front.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-white text-5xl sm:text-6xl mb-5 leading-tight"
          >
            Trusted Since 1980.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
              Loved Worldwide.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Gandhi Nagar, New Delhi. A family business that started with one shop and grew into a name customers across India, the Middle East, and New Zealand rely on.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              How It Started
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2 mb-5">
              One Shop. Four Decades. One Family.
            </h2>
            <div className="space-y-4 text-gray-600 font-body leading-relaxed">
              <p>
                In 1980, <strong className="text-navy">Kodu Ram Ji</strong> opened a small shop in Gandhi Nagar with a simple goal: honest pricing, good fabric, happy customers.
              </p>
              <p>
                Word spread. Customers from <strong className="text-navy">Gulf countries, the Middle East, and New Zealand</strong> started coming. Today KD Garments is one of the most trusted names in Gandhi Nagar.
              </p>
              <p>
                His sons now manage the business together, keeping the same values alive while bringing in fresh designs every season. Boys' wear from age 2 to 17, retail and wholesale.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                Shop Collection <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold px-6 py-3 rounded-full transition-all hover:bg-navy hover:text-white"
              >
                Visit the Store
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-navy/10">
                  <img
                    src="/shop-front.jpeg"
                    alt="KD Garments Shop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-primary-500 text-white rounded-2xl p-5 text-center">
                  <p className="font-heading font-black text-3xl">44+</p>
                  <p className="font-body text-sm text-primary-100">Years in Business</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-navy text-white rounded-2xl p-5 text-center">
                  <p className="font-heading font-black text-3xl">Global</p>
                  <p className="font-body text-sm text-gray-300">Customer Base</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-primary-100">
                  <img
                    src="/products/suit-rehman-daket.jpeg"
                    alt="Rehman Daket Suit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dhurandhar Feature */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-400 font-heading font-semibold text-sm uppercase tracking-widest">
              As Seen in Dhurandhar
            </span>
            <h2 className="font-heading font-black text-white text-4xl mt-2 mb-5">
              The Suit Rehman Wore in{' '}
              <span className="text-primary-400">Dhurandhar</span>
            </h2>
            <div className="space-y-4 text-gray-300 font-body leading-relaxed">
              <p>
                When the film came out, everyone in Delhi was asking the same question: where did Rehman get that suit?
              </p>
              <p>
                It was ours. Stock sold out in a day. That is KD Garments for you.
              </p>
              <p>
                The <strong className="text-white">Rehman Daket Party Suit</strong> is still our most in-demand piece. Limited stock, so reach out early.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-all hover:scale-105 mt-6"
            >
              Ask on WhatsApp <FiArrowRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden aspect-[3/4] bg-white/10"
          >
            <img
              src="/products/suit-rehman-daket.jpeg"
              alt="Rehman Daket Party Suit"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Why Customers Come Back</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-500 text-xl mb-4">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-navy mb-2 text-sm">{v.title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              The People Behind KD
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">A Family Business</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white font-heading font-black text-2xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-heading font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-primary-500 font-body text-xs font-semibold uppercase tracking-wide mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center px-4">
        <h2 className="font-heading font-black text-4xl mb-4">
          Experience the{' '}
          <span className="text-primary-400">KD Difference</span>
        </h2>
        <p className="text-gray-300 font-body mb-8 max-w-xl mx-auto">
          Browse our collection or visit us at Gandhi Nagar, Delhi.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
          >
            Shop Now <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
