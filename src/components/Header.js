import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-faded">
      <Link className="navbar-brand" to="/">
        Checkit
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNavList"
        aria-controls="myNavList"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="myNavList">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/map">
            MAP
          </Link>
          {user === null || user.uid === undefined ? (
            <Link className="nav-item nav-link" to="/login">
              SIGN-IN
            </Link>
          ) : (
            <Link
              className="nav-item nav-link"
              to="/logout"
              onClick={() => logout()}
            >
              LOGOUT
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Header
