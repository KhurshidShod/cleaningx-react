import React, { Component } from "react";
import styles from "./About.module.css";
import About1 from "../assets/images/about/about1.png";
import About2 from "../assets/images/about/about2.png";
import About3 from "../assets/images/about/about3.png";
import Button from "./Button";

export class About extends Component {
  render() {
    return (
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about__wrapper}>
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className={styles.about__cards}>
              <div className={styles.about__card}>
                <div className={styles.about__card_inner}>
                  <img src={About1} alt="" />
                  <h3>1. Schedule online</h3>
                  <p>
                    Sagittis nibh scelerisque vitae egetolment vulputate sem
                    elementum sed n.
                  </p>
                </div>
              </div>
              <div className={styles.about__card}>
                <div className={styles.about__card_inner}>
                  <img src={About2} alt="" />
                  <h3>2. Pay online easily</h3>
                  <p>
                    Vitae ut accumsan blandit ullamcorperolm suscipit dui
                    gravida amet at nunc.
                  </p>
                </div>
              </div>
              <div className={styles.about__card}>
                <div className={styles.about__card_inner}>
                  <img src={About3} alt="" />
                  <h3>3. Get your house cleaned</h3>
                  <p>
                    Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                    cursus eleifend.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.about__buttons}>
            <Button
                content="Get a free quote"
                fontSize="18px"
                bg="var(--color-lightblue)"
                fontWeight='700'
              />
              <Button
                content="Explore services"
                fontSize="18px"
                bg="transparent"
                fontWeight='400'
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
