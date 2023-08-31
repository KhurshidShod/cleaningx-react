import React, { Component } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
      <React.Fragment>
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Banner />
        <Articles />
        <Contact />
        <Footer />
      </React.Fragment>
    );
}

export default HomePage;
