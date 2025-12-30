import React from 'react'
import { DateTime } from 'luxon';

const Header = ({title}) => {
  const now = DateTime.now();

  return (
    <header className="bg-gray-800/70 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">Current Date and Time: {now.toUTC().toHTTP()}</p>
        </div>
      </div>
    </header>
  )
}

export default Header