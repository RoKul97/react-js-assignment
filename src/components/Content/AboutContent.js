import React from "react";
import classes from "./AboutContent.module.css";
import logo from "../../assets/logo.jpg";
import Footer from "./Footer";
const AboutContent = () => {
  return (
    <div className={classes.main}>
      <h2>About iJavaScript</h2>
      <hr />
      <section className={classes.wrapper}>
        <section className={classes.infoImg}>
          <img src={logo} alt="logo" />
        </section>
        <section className={classes.infoText}>
          <p>
            iJavaScript is a research group, founded to check different
            javascript frameworks based on different design patterns.
          </p>
          <p>
            During kick-off it will test React,Angular,Knockout and EmberJS
            features.
          </p>
        </section>
      </section>
      <br />
      <br />
      <hr />
      <div className={classes.component}>
        <section className={classes.c1}>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default AboutContent;
