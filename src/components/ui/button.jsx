import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
