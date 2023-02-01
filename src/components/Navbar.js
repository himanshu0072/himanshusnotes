import React from 'react'
export default function Navbar() {
  return (
    <>
        <nav className="navbar sticky-top navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              HimanshusNotes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/about">
                    The Blog of Himanshu
                    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Videos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    The Year Ahead
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr></hr>
    </>
  )
}
