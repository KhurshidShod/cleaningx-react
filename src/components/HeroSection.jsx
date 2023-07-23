import React, { Component } from "react";
import Button from "./Button";
import styles from "./HeroSection.module.css";
import Bg from "../assets/images/Group.svg";
import { IoCall } from "react-icons/io5";

export class HeroSection extends Component {
  render() {
    return (
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            <div className={styles.hero__wrapper_text}>
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className={styles.contact}>
                <Button
                  content="Get a free quote"
                  fontSize="18px"
                  bg="var(--color-lightblue)"
                  fontWeight="700"
                />
                <div className={styles.contact__tel}>
                  <button>
                    <IoCall size={35} />
                  </button>
                  <div>
                    <p>Call us now</p>
                    <a href="tel:(414) 567 - 2109">(414) 567 - 2109</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hero__wrapper_img}>
              <img src={Bg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
