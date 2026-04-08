import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center font-heading font-black text-white">
              KD
            </div>
            <div>
              <p className="font-heading font-bold text-white text-lg leading-none">KD Garments</p>
              <p className="text-primary-300 text-xs">Gandhi Nagar</p>
            </div>
          </div>
          <p className="text-gray-400 font-body text-sm leading-relaxed">
            Your trusted destination for premium designer kids & teen wear. Quality fashion for ages 2–17.
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
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop All' },
              { to: '/wholesale', label: 'Wholesale' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-gray-400 hover:text-primary-400 font-body text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
            Categories
          </h3>
          <ul className="space-y-2.5">
            {[
              'T-Shirts & Polos',
              'Casual Shirts',
              'Jeans & Trousers',
              'Ethnic Wear',
              'Sportswear',
              'Party Wear',
            ].map((cat) => (
              <li key={cat}>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-primary-400 font-body text-sm transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
            Visit Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-400 font-body text-sm">
              <FiMapPin className="mt-0.5 flex-shrink-0 text-primary-400" size={15} />
              <span>Shop No. XX, Gandhi Nagar Market,<br />New Delhi – 110031</span>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 font-body text-sm transition-colors">
                <FiPhone className="text-primary-400 flex-shrink-0" size={15} />
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:info@kdgarments.in" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 font-body text-sm transition-colors">
                <FiMail className="text-primary-400 flex-shrink-0" size={15} />
                info@kdgarments.in
              </a>
            </li>
          </ul>
          <div className="mt-4 text-xs text-gray-500 font-body">
            <p className="font-semibold text-gray-400 mb-1">Store Hours</p>
            <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
            <p>Sunday: 11:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 font-body text-xs">
            © {new Date().getFullYear()} KD Garments, Gandhi Nagar. All rights reserved.
          </p>
          <p className="text-gray-600 font-body text-xs">
            Designed with ❤️ for quality kids fashion
          </p>
        </div>
      </div>
    </footer>
  )
}
