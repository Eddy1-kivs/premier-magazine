import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              {/* <li>
                <a href="fashion">Fashion</a>
              </li> */}
              <li>
                <a href="subscribe">Subscribe</a>
              </li>
              {/* <li>
                <a href="faq">Faq</a>
              </li>
              <li>
                <a href="reviews">Reviews</a>
              </li> */}
              <li>
                <a href="contact">Contact</a>
              </li>
              
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header;
