import { useCart } from '../context/CartContext'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { open, items, totalItems, totalPrice, dispatch } = useCart()

  const remove = (id, size) => dispatch({ type: 'REMOVE_ITEM', payload: { id, size } })
  const update = (id, size, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, size, qty } })

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          onClick={() => dispatch({ type: 'CLOSE_CART' })}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-navy text-white">
          <div className="flex items-center gap-2">
            <FiShoppingBag size={20} />
            <span className="font-heading font-semibold text-lg">Your Cart</span>
            {totalItems > 0 && (
              <span className="bg-primary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-4">
              <FiShoppingBag size={56} className="opacity-20" />
              <p className="font-body text-sm">Your cart is empty</p>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="text-primary-500 font-medium text-sm underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-navy text-sm leading-snug line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">Size: {item.size}</p>
                  <p className="text-primary-500 font-bold text-sm mt-1">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => update(item.id, item.size, item.qty - 1)}
                      className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <FiMinus size={12} />
                    </button>
                    <span className="font-body font-medium text-sm w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => update(item.id, item.size, item.qty + 1)}
                      className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <FiPlus size={12} />
                    </button>
                    <button
                      onClick={() => remove(item.id, item.size)}
                      className="ml-auto p-1 text-red-400 hover:text-red-600 transition-colors"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 bg-gray-50 space-y-3">
            <div className="flex justify-between text-sm font-body text-gray-600">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-heading font-bold text-navy text-base">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-400 text-center">Shipping calculated at checkout</p>
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold py-3.5 rounded-xl transition-colors text-sm">
              Proceed to Checkout
            </button>
            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="w-full text-gray-500 hover:text-red-500 font-body text-xs text-center py-1 transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
