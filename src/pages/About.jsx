import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiAward, FiGlobe, FiMapPin } from 'react-icons/fi'
import { WA_PHONE } from '../data/products'

const values = [
  {
    icon: <FiHeart />,
    title: 'Mohabbat Se Bunaayi',
    desc: 'Har Poshak Mein Dil Ki Kaareedari Hai. Aaram, Mazbooti Aur Style — Tino Ka Sangam.',
  },
  {
    icon: <FiAward />,
    title: 'Behtareen Kapdaa',
    desc: 'Sirf Umdaa Kapde Istemal Hote Hain. Har Silai Mein Ehtiyaat — Yahi Hamaari Pehchaan Hai.',
  },
  {
    icon: <FiGlobe />,
    title: 'Duniya Bhar Ke Grahak',
    desc: 'Middle East, New Zealand, Poore Hindustan Se Grahak Hamaare Paas Aate Hain. Vishwaas Ki Daastaan.',
  },
  {
    icon: <FiMapPin />,
    title: 'Gandhi Nagar Ki Shaan',
    desc: "Delhi Ke Sabse Bade Kapdaa Baazaar Mein Hamaari Buniyaad Hai. 1980 Se Abhi Tak — Ek Hi Jagah, Ek Hi Iraada.",
  },
]

const milestones = [
  { year: '1980', event: 'Kodu Ram Ji Ne Gandhi Nagar Mein KD Garments Ki Neev Rakhi — Ek Chhoti Si Dukaan Se Badi Sapne Ke Saath' },
  { year: '1995', event: 'Naam Itna Phail Gaya Ki Middle East Aur Gulf Se Bhi Grahak Aane Lage' },
  { year: '2005', event: 'Beta Sanjay Arora Baap Ka Haath Thaam Kar Karobaar Mein Aaya — Nayi Soch, Wohi Wafadaari' },
  { year: '2012', event: 'New Zealand Aur Aastra Lia Ke Grahak Bhi Jud Gaye — Yaani Duniya Bhar Mein KD Ki Dhamak' },
  { year: '2019', event: 'Rehman Daket Wala Suit Dhurandhar Film Ke Baad Sab Ki Zubaan Par Chadh Gaya — Stock Pal Mein Khatam' },
  { year: '2024', event: 'Aaj Bhi Wahi Mohabbat, Wahi Mazbooti — 44 Saal Ki Virasat Aur Hazaaron Khush Grahak' },
]

const team = [
  {
    name: 'Kodu Ram Ji',
    role: 'Bani Banaane Waale — Founder (1980)',
    avatar: 'KR',
    bio: 'Inhi Ki Mehnat Aur Imaan Ne KD Garments Ko Woh Maqam Dilaya Jahan Aaj Duniya Bhar Se Log Aate Hain.',
  },
  {
    name: 'Sanjay Arora',
    role: 'Maalik — Owner',
    avatar: 'SA',
    bio: 'Walid Ki Virasat Ko Aage Le Jaane Wale. Naye Designs, Nayi Soch — Par Wohi Purana Yakeen Aur Mehnat.',
  },
]

export default function About() {
  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Assalamu Alaikum! KD Garments ke baare mein jaanna chahta hoon.')}`

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
            Hamaari Kahaani
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-white text-5xl sm:text-6xl mb-5 leading-tight"
          >
            1980 Se Abhi Tak —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-400">
              Ek Khaanadaan, Ek Vishwaas
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Gandhi Nagar, Delhi Ke Dil Mein Basi Dukaan — Jahan Se Hazaaron Bachchon Ki Poshak Duniya Ke Koone Koone Mein Pahunchi Hai.
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
              Shuruaat Ki Daastaan
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2 mb-5">
              Ek Sapna, Ek Dukaan, Ek Virasat
            </h2>
            <div className="space-y-4 text-gray-600 font-body leading-relaxed">
              <p>
                Saal 1980 Mein <strong className="text-navy">Kodu Ram Ji</strong> Ne Gandhi Nagar Ke Maidaan Mein
                Ek Chhoti Si Dukaan Shuru Ki. Iraada Ek Hi Tha — Behtareen Kapdaa, Saccha Daam, Aur Khushi Se
                Grahak Ka Jaana.
              </p>
              <p>
                Waqt Ne Saath Diya. Kaam Ki Sachaai Aur Kapdey Ki Sifat Ne Aise Rang Dikhaaye Ki Gulf Se,{' '}
                <strong className="text-navy">Middle East</strong> Se, Aur Poori Duniya Ke Koone Koone Se
                Grahak Aane Lage. <strong className="text-navy">New Zealand</strong> Tak Mein KD Ka Naam
                Pahunch Gaya.
              </p>
              <p>
                Aaj <strong className="text-navy">Sanjay Arora</strong> — Kodu Ram Ji Ke Bete — Yahi Karobaar
                Sambhal Rahe Hain. Nayi Design, Nayi Soch — Par Wahi Purana Yakeen Aur Dil Ka Kaam. Gandhi Nagar
                Ka Sabse Bharosaemand Naam — <strong className="text-navy">New KD Garments</strong>.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                Collection Dekhen <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold px-6 py-3 rounded-full transition-all hover:bg-navy hover:text-white"
              >
                Dukaan Aayein
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
                    alt="KD Garments Shop Front"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="bg-primary-500 text-white rounded-2xl p-5 text-center">
                  <p className="font-heading font-black text-3xl">44+</p>
                  <p className="font-body text-sm text-primary-100">Saal Ka Tajurba</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-navy text-white rounded-2xl p-5 text-center">
                  <p className="font-heading font-black text-3xl">Duniya</p>
                  <p className="font-body text-sm text-gray-300">Bhar Ke Grahak</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-primary-100">
                  <img
                    src="/products/suit-rehman-daket.jpeg"
                    alt="Rehman Daket Suit"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
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
              Filmi Andaaz
            </span>
            <h2 className="font-heading font-black text-white text-4xl mt-2 mb-5">
              Woh Suit Jo Rehman Ne{' '}
              <span className="text-primary-400">Dhurandhar</span>{' '}
              Mein Pehna
            </h2>
            <div className="space-y-4 text-gray-300 font-body leading-relaxed">
              <p>
                Jab Dhurandhar Film Mein Rehman Ka Woh Kaala-Shahi Suit Parday Par Aaya, Toh Poori Delhi Mein
                Humse Poochha Gaya — <em>"Woh Suit Kahan Se Mila?"</em>
              </p>
              <p>
                Woh Suit Hamari Dukaan Ka Tha. Ek Din Mein Stock Khatam. Yahi Hai KD Garments Ki Taaraf —
                Jab Parday Ki Duniya Bhi Hamaari Pehnaish Ko Chunti Hai.
              </p>
              <p>
                Abhi Bhi Yeh{' '}
                <strong className="text-white">Rehman Daket Party Suit</strong>{' '}
                Hamaara Sabse Maangi Wala Article Hai. Limited Stock — Jald Poochhen.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold px-6 py-3 rounded-full transition-all hover:scale-105 mt-6"
            >
              WhatsApp Par Poochhen <FiArrowRight />
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
              onError={(e) => {
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                e.target.outerHTML = '<p class="text-gray-400 font-body text-sm text-center p-8">Tasveer Jald Aayegi</p>'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Hamaari Soch
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Woh Baatein Jo Hamen Alag Karti Hain</h2>
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
              Safarnama
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">44 Saal Ka Safar</h2>
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
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-heading font-semibold text-sm uppercase tracking-widest">
              KD Ke Apne Log
            </span>
            <h2 className="font-heading font-black text-navy text-4xl mt-2">Khaanadaan Ka Karobaar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
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
          KD Ka{' '}
          <span className="text-primary-400">Farak</span>{' '}
          Khud Mehsoos Karein
        </h2>
        <p className="text-gray-300 font-body mb-8 max-w-xl mx-auto">
          Collection Dekhen Ya Gandhi Nagar Aayein — Hamaare Haath Hamesha Khule Hain.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
          >
            Collection Dekhen <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
          >
            Hamare Se Milein
          </Link>
        </div>
      </section>
    </div>
  )
}
