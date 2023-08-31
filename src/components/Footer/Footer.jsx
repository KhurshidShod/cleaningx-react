import React from "react";
import styles from "./Footer.module.css";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiFillTwitterSquare,
  AiOutlineYoutube,
} from "react-icons/ai";
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__part}>
            <h1>Quality cleaning for your home</h1>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className={styles.socials}>
              <div className={styles.social}>
                <AiFillTwitterSquare size={25} />
              </div>
              <div className={styles.social}>
                <AiOutlineFacebook size={25} />
              </div>
              <div className={styles.social}>
                <AiOutlineInstagram size={25} />
              </div>
              <div className={styles.social}>
                <AiOutlineLinkedin size={25} />
              </div>
              <div className={styles.social}>
                <AiOutlineYoutube size={25} />
              </div>
            </div>
          </div>
          <div className={styles.footer__part}>
            <h3>Contact us</h3>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className={styles.footer__part}>
            <h3>Hours</h3>
            <h3>Monday to Friday</h3>
            <p>6:00 AM - 9:00 PM</p>
            <h3>Saturday & Sunday</h3>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className={styles.footer__part}>
            <h3>Get a free estimate</h3>
            <h1>(414) 567 - 2109</h1>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
        <div className={styles.footer__bottom}>
            <img src={Logo} alt="" />
            <div>
            <p>Copyright © Cleaning X | Designed by <a href="https://brixtemplates.com/">BRIX Templates</a></p>
            <p>- Powered by <a href="https://t.me/x_shod1yev02">Xurshid</a> - Licenses</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
