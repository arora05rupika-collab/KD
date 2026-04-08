import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiAward, FiTrendingUp, FiMapPin } from 'react-icons/fi'

const values = [
  {
    icon: <FiHeart />,
    title: 'Passion for Kids Fashion',
    desc: 'Every piece we design is crafted with love. We understand that children grow fast — so we make sure each outfit is comfortable, durable, and stylish.',
  },
  {
    icon: <FiAward />,
    title: 'Uncompromising Quality',
    desc: 'We source only premium fabrics and work with skilled tailors. Every stitch is checked before it reaches you.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Trend-Forward Designs',
    desc: 'Our design team stays ahead of the curve. From casual to ethnic, from street to party — we bring the latest in kids fashion.',
  },
  {
    icon: <FiMapPin />,
    title: 'Rooted in Gandhi Nagar',
    desc: "Gandhi Nagar is the heart of Delhi's garment market. We've been here for 15+ years, building trust with customers and retailers across India.",
  },
]

const milestones = [
  { year: '2008', event: 'KD Garments founded in Gandhi Nagar, Delhi' },
  { year: '2012', event: 'Expanded to a full showroom with 200+ designs' },
  { year: '2016', event: 'Started wholesale operations pan-India' },
  { year: '2020', event: 'Launched online presence, serving customers across India' },
  { year: '2023', event: 'Crossed 10,000+ happy customers milestone' },
  { year: '2024', event: '500+ wholesale retail partners across 20+ states' },
]

const team = [
  {
    name: 'Kishan Das',
    role: 'Founder & Head of Design',
    avatar: 'KD',
    bio: '15+ years in kids fashion. Personally designs every collection with a focus on comfort and style.',
  },
  {
    name: 'Ramesh Das',
    role: 'Operations & Wholesale Head',
    avatar: 'RD',
    bio: 'Manages all wholesale relationships and ensures smooth delivery across India.',
  },
  {
    name: 'Pooja Das',
    role: 'Customer Relations',
    avatar: 'PD',
    bio: 'Always here to help — from product queries to after-sale support.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <section className="bg-navy py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[80px]" />
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
            Dressing Kids with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
              Pride
            </span>{' '}
            Since 2008
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Born in the heart of Gandhi Nagar, Delhi's garment capital, KD Garments has been dressing children with style, comfort, and pride for over 15 years.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              The Beginning
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2 mb-5">
              A Family Business, A Community Legacy
            </h2>
            <div className="space-y-4 text-gray-600 font-body leading-relaxed">
              <p>
                KD Garments was founded in 2008 by <strong className="text-navy">Kishan Das</strong> in Gandhi Nagar, New Delhi — one of India's largest wholesale garment markets. What started as a small stall with a dream has grown into a beloved destination for kids' and teen fashion.
              </p>
              <p>
                Our founder's vision was simple: every child deserves to feel confident and comfortable in what they wear, regardless of budget. We craft designer clothes for boys aged 2 to 17 — from playful toddler outfits to trendy teen streetwear.
              </p>
              <p>
                Today, KD Garments serves over <strong className="text-navy">10,000 happy customers</strong> and <strong className="text-navy">500+ wholesale partners</strong> across India. We remain a family-run business at heart, with the same commitment to quality and personal service that we started with.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                Shop Our Collection <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold px-6 py-3 rounded-full transition-all hover:bg-navy hover:text-white"
              >
                Visit Our Store
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
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80"
                    alt="Kids fashion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-primary-500 text-white rounded-2xl p-5 text-center">
                  <p className="font-heading font-black text-3xl">15+</p>
                  <p className="font-body text-sm text-primary-100">Years of Excellence</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-navy text-white rounded-2xl p-5 text-center">
                  <p className="font-heading font-black text-3xl">500+</p>
                  <p className="font-body text-sm text-gray-300">Styles Available</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80"
                    alt="Teen fashion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Our Values</h2>
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-6 pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-primary-400 font-heading font-black text-sm flex-shrink-0">
                    {m.year}
                  </div>
                  <div className="absolute left-8 top-8 w-3 h-3 bg-primary-500 rounded-full border-2 border-white shadow-sm -translate-x-1/2" />
                  <div className="bg-gray-50 rounded-2xl p-4 flex-1 border border-gray-100">
                    <p className="text-navy font-body font-medium text-sm">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              The People Behind KD
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white font-heading font-black text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-heading font-bold text-navy">{member.name}</h3>
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
          Ready to experience the{' '}
          <span className="text-primary-400">KD difference?</span>
        </h2>
        <p className="text-gray-300 font-body mb-8 max-w-xl mx-auto">
          Shop our latest collection or visit us at Gandhi Nagar, Delhi.
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
