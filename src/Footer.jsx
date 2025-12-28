import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer className="bg-gray-800/70 border-t border-gray-700">
      <div className="container mx-auto px-4 py-3 text-center text-sm text-gray-400">
        <p>Copyright © {today.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer