import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/shop',      label: 'Shop' },
  { to: '/wholesale', label: 'Wholesale' },
  { to: '/about',     label: 'About Us' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const { totalItems, dispatch } = useCart()
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
        Free delivery on orders above ₹999 &nbsp;|&nbsp; Wholesale available — min. 6 pieces per style
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center font-heading font-black text-white text-sm group-hover:bg-primary-400 transition-colors">
            KD
          </div>
          <div className="leading-tight">
            <span className="block font-heading font-bold text-white text-base tracking-wide">
              KD Garments
            </span>
            <span className="block text-[10px] text-primary-300 font-body tracking-wider uppercase">
              Gandhi Nagar
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
            href="tel:+919876543210"
            className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-primary-400 transition-colors font-body text-sm"
          >
            <FiPhone size={14} />
            <span className="hidden lg:inline">+91 98765 43210</span>
          </a>

          <button
            onClick={() => dispatch({ type: 'OPEN_CART' })}
            className="relative p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Open cart"
          >
            <FiShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary-500 text-white text-[10px] font-bold w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

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
            href="tel:+919876543210"
            className="flex items-center gap-2 mt-3 px-4 py-3 text-gray-300 hover:text-white text-sm font-body"
          >
            <FiPhone size={15} /> +91 98765 43210
          </a>
        </div>
      )}
    </header>
  )
}
