import React from 'react'
import { DateTime } from 'luxon';


const Header = ({title}) => {
  const now = DateTime.now();

  return (
    <header>
        <h2> {title} </h2>
        <p> Current Date and Time: {now.toUTC().toHTTP()} </p>
    </header>
  )
}

export default Header