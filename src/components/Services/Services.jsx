import React, { Component } from "react";
import styles from "./Services.module.css";
import Button from "../Button/Button";
import Img1 from "../../assets/images/services/services2.svg";
import Img2 from "../../assets/images/services/services1.svg";
import Img3 from "../../assets/images/services/services3.svg";
import { IoCall } from "react-icons/io5";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.services__wrapper}>
          <div className={styles.services__wrapper_top}>
            <h1>Our Services</h1>
            <Button
              width="214px"
              height="73px"
              content="Explore services"
              bg="transparent"
              fontSize="18px"
              fontWeight="400"
            />
          </div>
          <div className={styles.services__wrapper_cards}>
            <div className={styles.services__wrapper_card}>
              <div className={styles.services__wrapper_card_inner}>
                <img src={Img1} alt="" />
                <h3>House cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
            <div className={styles.services__wrapper_card}>
              <div className={styles.services__wrapper_card_inner}>
                <img src={Img2} alt="" />
                <h3>Office cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
            <div className={styles.services__wrapper_card}>
              <div className={styles.services__wrapper_card_inner}>
                <img src={Img3} alt="" />
                <h3>Industrial cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
