import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <button>
        <Link to="/map">지도</Link>
      </button>
    </div>
  )
}
export default Header
