import React from "react";
import styles from "./Articles.module.css";
import Button from "../Button/Button";
import Image1 from "../../assets/images/articles/IMAGE (4).png";
import Image2 from "../../assets/images/articles/IMAGE (5).png";

const Articles = () => {
  return (
    <section className={styles.articles}>
      <div className="container">
        <div className={styles.articles__wrapper}>
          <div className={styles.articles_top}>
            <h1>Articles & resources</h1>
            <div>
              <Button
                width="217px"
                height="72px"
                content="Get a free quote"
                fontSize="18px"
                bg="var(--color-lightblue)"
                fontWeight="700"
              />
              <Button
                width="217px"
                height="72px"
                content="Get a free quote"
                fontSize="18px"
                bg="transparent"
                fontWeight="700"
              />
            </div>
          </div>
          <div className={styles.articles_content}>
            <div className={styles.card}>
              <img src={Image1} alt="" />
              <div className={styles.card__text}>
                <h1>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h1>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className={styles.date}>
                  <h3>Jan 28, 2022</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img src={Image2} alt="" />
              <div className={styles.card__text}>
                <h1>
                  How to properly disinfect your phone and other electronics
                </h1>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className={styles.date}>
                  <h3>Feb 1, 2022</h3>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
