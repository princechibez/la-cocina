import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <section>
        <aside>
          <label htmlFor="">
            <p>Subscribe to our newsletter`</p>
            <input type="email" name="email" id="email" placeholder="Email Address" />
            <input type="submit" value="Subscribe" id="submit" />
          </label>

          <div className="socials">
            <a href="">
              <i className="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-tiktok fa-2x"></i>
            </a>
          </div>
        </aside>
        <menu>
          <nav>
            <Link to="/" className="link">
              About
            </Link>
            <Link to="/" className="link">
              Contact Us
            </Link>
          </nav>
          <nav>
            <Link to="/" className="link">
              Blogs
            </Link>
            <Link to="/" className="link">
              Categories
            </Link>
            <Link to="/" className="link">
              Terms of Use
            </Link>
          </nav>
          <nav>
            <Link to="/" className="link">
              Disclaimer
            </Link>
            <Link to="/" className="link">
              Privacy Policy
            </Link>
          </nav>
        </menu>
      </section>
    </footer>
  );
};

export default Footer;
