import React, { Component } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HeroSection />
        <About />
        <Services />
      </React.Fragment>
    );
  }
}

export default HomePage;
