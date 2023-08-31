import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
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
  const logoRef = useRef()
  return (
    <header className={scroll >= 89.1 ? styles.navbar__shrink : null}>
      <nav className="container">
        <div className={styles.nav__slider} ref={sliderRef}></div>
        <div className={styles.logo} ref={logoRef}>
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
                sliderRef.current.style.right = `${window.innerWidth - (e.currentTarget.getBoundingClientRect().right)}px`
              const left = e.currentTarget.offsetLeft
                setTimeout(() => {
                  sliderRef.current.style.left = `${left}px`;
                }, 200);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                console.log(logoRef.current.getBoundingClientRect().right)
                sliderRef.current.style.left = `150px`;
                setTimeout(() => {
                  sliderRef.current.style.right = `1150px`;
                }, 0);
              }}
            >
              <a href="#hero">Home</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.right = `${window.innerWidth - (e.currentTarget.getBoundingClientRect().right)}px`
                const left = e.currentTarget.offsetLeft
                setTimeout(() => {
                  sliderRef.current.style.left = `${left}px`;
                }, 200);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                console.log(logoRef.current.getBoundingClientRect().right)
                sliderRef.current.style.left = `${logoRef.current.getBoundingClientRect().left}px`;
                setTimeout(() => {
                  sliderRef.current.style.right = `${window.innerWidth - logoRef.current.getBoundingClientRect().right}px`;
                }, 0);
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.right = `${window.innerWidth - (e.currentTarget.getBoundingClientRect().right)}px`
                const left = e.currentTarget.offsetLeft
                setTimeout(() => {
                  sliderRef.current.style.left = `${left}px`;
                }, 200);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                console.log(logoRef.current.getBoundingClientRect().right)
                sliderRef.current.style.left = `${logoRef.current.getBoundingClientRect().left}px`;
                setTimeout(() => {
                  sliderRef.current.style.right = `${window.innerWidth - logoRef.current.getBoundingClientRect().right}px`;
                }, 0);
              }}
            >
              <a href="#services">Services</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.right = `${window.innerWidth - (e.currentTarget.getBoundingClientRect().right)}px`
                const left = e.currentTarget.offsetLeft
                setTimeout(() => {
                  sliderRef.current.style.left = `${left}px`;
                }, 200);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                console.log(logoRef.current.getBoundingClientRect().right)
                sliderRef.current.style.left = `${logoRef.current.getBoundingClientRect().left}px`;
                setTimeout(() => {
                  sliderRef.current.style.right = `${window.innerWidth - logoRef.current.getBoundingClientRect().right}px`;
                }, 0);
              }}
            >
              <a href="#">Articles</a>
            </li>
            <li
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.color =
                  "var(--color-lightblue)";
                sliderRef.current.style.right = `${window.innerWidth - (e.currentTarget.getBoundingClientRect().right)}px`
                const left = e.currentTarget.offsetLeft
                setTimeout(() => {
                  sliderRef.current.style.left = `${left}px`;
                }, 200);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.color = "var(--color-blue)";
                console.log(logoRef.current.getBoundingClientRect().right)
                sliderRef.current.style.left = `${logoRef.current.getBoundingClientRect().left}px`;
                setTimeout(() => {
                  sliderRef.current.style.right = `${window.innerWidth - logoRef.current.getBoundingClientRect().right}px`;
                }, 0);
              }}
            >
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.nav__btns}>
            <p>Cart(0)</p>
            <Button
              width='174px'
              height='54px'
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
