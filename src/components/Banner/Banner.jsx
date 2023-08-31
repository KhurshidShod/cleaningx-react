import React from "react";
import styles from "./Banner.module.css";
import BannerPhoto from "../../assets/images/banner.svg";
import Button from "../Button/Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import CallUsNow from "../CallUsNow/CallUsNow";

const Banner = () => {
  return (
    <div className="container">
      <section className={styles.banner}>
        <div className={styles.banner_main}>
          <div className={styles.banner_main__img}>
            <img src={BannerPhoto} alt="" />
          </div>
          <div className={styles.banner_main__text}>
            <h3>Covid-19 sanitization</h3>
            <h1>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={styles.banner_main__text_buttons}>
              <Button
                width="217px"
                height="72px"
                content="Get a free quote"
                fontSize="18px"
                bg="var(--color-lightblue)"
                fontWeight="700"
              />
              <CallUsNow color='white' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
