import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo.png";
import styles from "./Header.module.css";
import Button from "./Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(), { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sliderRef = useRef();
  return (
    <header className={scroll >= 89.1 ? styles.navbar__shrink : null}>
      <nav className="container">
        <div className={styles.nav__slider} ref={sliderRef}></div>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div
          className={`${styles.nav__menu} ${
            navOpen ? styles.nav__menu_open : ""
          }`}
        >
          <ul>
            <li>
              <IoCloseSharp size={40} onClick={() => setNavOpen(false)} />
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.width = `${e.currentTarget.offsetWidth}px`;
                sliderRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                sliderRef.current.style.width = `120px`;
                sliderRef.current.style.left = `70px`;
              }}
            >
              <a href="#">Home</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.width = `${e.currentTarget.offsetWidth}px`;
                sliderRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                sliderRef.current.style.width = `120px`;
                sliderRef.current.style.left = `70px`;
              }}
            >
              <a href="#">About</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.width = `${e.currentTarget.offsetWidth}px`;
                sliderRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                sliderRef.current.style.width = `120px`;
                sliderRef.current.style.left = `70px`;
              }}
            >
              <a href="#">Services</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.width = `${e.currentTarget.offsetWidth}px`;
                sliderRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                sliderRef.current.style.width = `120px`;
                sliderRef.current.style.left = `70px`;
              }}
            >
              <a href="#">Articles</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.width = `${e.currentTarget.offsetWidth}px`;
                sliderRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                sliderRef.current.style.width = `120px`;
                sliderRef.current.style.left = `70px`;
              }}
            >
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.nav__btns}>
            <p>Cart(0)</p>
            <Button
              fontSize={"16px"}
              content="Get a free quote"
              bg="var(--color-lightblue)"
              fontWeight="400"
            />
          </div>
        </div>
        <div className={styles.open__nav} onClick={() => setNavOpen(true)}>
          <FaBarsStaggered size={35} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
