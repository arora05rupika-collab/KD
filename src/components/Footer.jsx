import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

const hours = [
  { day: 'Monday',    time: 'Closed',       closed: true },
  { day: 'Tuesday',   time: '10 AM – 8 PM', closed: false },
  { day: 'Wednesday', time: '10 AM – 8 PM', closed: false },
  { day: 'Thursday',  time: '10 AM – 8 PM', closed: false },
  { day: 'Friday',    time: '10 AM – 8 PM', closed: false },
  { day: 'Saturday',  time: '10 AM – 8 PM', closed: false },
  { day: 'Sunday',    time: '10 AM – 8 PM', closed: false },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center font-heading font-black text-white">
              KD
            </div>
            <div>
              <p className="font-heading font-bold text-white text-lg leading-none">KD Garments</p>
              <p className="text-primary-300 text-xs">Gandhi Nagar, Delhi</p>
            </div>
          </div>
          <p className="text-gray-400 font-body text-sm leading-relaxed">
            Designer kids & boys wear from age 2–17. Retail & wholesale from Gandhi Nagar, New Delhi.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
              <FiInstagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
              <FiFacebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
              <FiYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {[
              { to: '/',          label: 'Home' },
              { to: '/shop',      label: 'Shop' },
              { to: '/wholesale', label: 'Wholesale' },
              { to: '/about',     label: 'About Us' },
              { to: '/contact',   label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-primary-400 font-body text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Store hours */}
        <div>
          <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
            Store Hours
          </h3>
          <ul className="space-y-1.5">
            {hours.map(({ day, time, closed }) => (
              <li key={day} className="flex justify-between text-xs font-body">
                <span className={closed ? 'text-gray-500' : 'text-gray-400'}>{day}</span>
                <span className={closed ? 'text-red-400 font-semibold' : 'text-gray-300'}>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
            Contact
          </h3>
          <p className="text-white font-body font-semibold text-sm mb-3">
            Sanjay Arora
            <span className="block text-primary-300 text-xs font-normal">Owner, New KD Garments</span>
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-400 font-body text-sm">
              <FiMapPin className="mt-0.5 flex-shrink-0 text-primary-400" size={15} />
              <span>IX/6879, Arya Samaj Gali,<br />Near Mahavir Chowk, Gandhi Nagar,<br />New Delhi 110031</span>
            </li>
            <li>
              <a href="tel:+919210706738" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 font-body text-sm transition-colors">
                <FiPhone className="text-primary-400 flex-shrink-0" size={15} />
                +91 92107 06738
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919210706738?text=Hi%20Sanjay%20bhai!%20I%20want%20to%20enquire%20about%20KD%20Garments%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#25D366] hover:text-green-400 font-body text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Sanjay Arora
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 font-body text-xs">
            © {new Date().getFullYear()} KD Garments, Gandhi Nagar. All rights reserved.
          </p>
          <p className="text-gray-600 font-body text-xs">Designed with ❤️ for quality kids fashion</p>
        </div>
      </div>
    </footer>
  )
}
