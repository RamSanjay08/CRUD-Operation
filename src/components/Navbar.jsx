import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({navNames,navLinks,navbarStyle}) {

  return (
    <div className={navbarStyle}>
      <Link to={navLinks.url1}>{navNames.key1}</Link>
      <Link to={navLinks.url2}>{navNames.key2}</Link>
      {
        navNames.key3 && <div>
          <Link to={navLinks.url3} style={{marginRight:"10rem"}}>{navNames.key3}</Link>
      <Link to={navLinks.url4}>{navNames.key4}</Link>
        </div>
      }
    </div>
  )
}

export default Navbar