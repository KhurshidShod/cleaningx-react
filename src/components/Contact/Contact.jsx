import React from "react";
import styles from "./Contact.module.css";
import CallUsNow from "../CallUsNow/CallUsNow";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__left}>
            <h1>Contact Us</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <CallUsNow />
            <hr
              style={{
                width: "100%",
                height: "0.1px",
                backgroundColor: "#DCDDEB",
                marginTop: "1rem",
                marginBottom: "3rem"
              }}
            />
            <h3>Not convinced yet?</h3>
            <p>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <Button
              width="250px"
              height="73px"
              content="Browse our packages"
              fontSize="18px"
              bg="transparent"
              fontWeight="700"
            />
          </div>
          <div className={styles.contact__right}>
            <form action="">
              <div>
                <label htmlFor="fullName">Full name</label>
                <input type="text" id="fullName" />
              </div>
              <div>
                <label htmlFor="phone">Phone number</label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div>
                <label htmlFor="reqSer">Requested service</label>
                <input type="text" id="reqSer" />
              </div>
              <div>
                <label htmlFor="dayOfSer">Day of service</label>
                <input type="text" id="dayOfSer" />
              </div>
              <div>
                <label htmlFor="addNote">Add a note</label>
                <textarea name="" id="addNote" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
