import React, { Component } from "react";
import Button from "../Button/Button";
import styles from "./HeroSection.module.css";
import Bg from "../../assets/images/Group.svg";
import { IoCall } from "react-icons/io5";
import CallUsNow from "../CallUsNow/CallUsNow";

const HeroSection = () => {
    return (
      <section className={styles.hero} id="hero">
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
                  width='217px'
                  height='72px'
                  content="Get a free quote"
                  fontSize="18px"
                  bg="var(--color-lightblue)"
                  fontWeight="700"
                />
                <CallUsNow />
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

export default HeroSection;
