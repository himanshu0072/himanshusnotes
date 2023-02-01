import React from "react";
import delogo from "../images/delogo.png";
export default function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand mb-4" href="/">
            HimanshusNotes
            <img className="delogo" src={delogo} alt="The Daily Blog" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
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
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link a" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ab a" href="/signup">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/more">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-distribute-vertical"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"/>
                    <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
                  </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr></hr>
    </>
  );
}
