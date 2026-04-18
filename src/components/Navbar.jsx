import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/shop',      label: 'Shop' },
  { to: '/wholesale', label: 'Wholesale' },
  { to: '/about',     label: 'About Us' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg shadow-navy/20' : 'bg-navy/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary-500 text-white text-xs text-center py-1.5 font-body tracking-wide">
        Wholesale available, min. 6 pieces per style &nbsp;|&nbsp; Visit us at Gandhi Nagar, New Delhi
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/products/kd-logo.png"
            alt="KD Kids Wear"
            className="h-10 w-auto"
            style={{ mixBlendMode: 'screen' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.querySelector('.logo-fallback').style.display = 'flex'
            }}
          />
          <div className="leading-tight">
            <div
              className="logo-fallback hidden w-9 h-9 bg-primary-500 rounded-lg items-center justify-center font-heading font-black text-white text-sm mb-0.5"
            >
              KD
            </div>
            <span className="block font-heading font-bold text-white text-base tracking-wide">
              KD Garments
            </span>
            <span className="block text-[10px] text-primary-300 font-body tracking-wider uppercase">
              Gandhi Nagar, Delhi
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919210706738"
            className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-primary-400 transition-colors font-body text-sm"
          >
            <FiPhone size={14} />
            <span className="hidden lg:inline">+91 92107 06738</span>
          </a>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-body font-medium text-sm transition-colors ${
                      isActive
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919210706738"
            className="flex items-center gap-2 mt-3 px-4 py-3 text-gray-300 hover:text-white text-sm font-body"
          >
            <FiPhone size={15} /> +91 92107 06738
          </a>
        </div>
      )}
    </header>
  )
}
