import React, { Component } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HeroSection />
        <About />
      </React.Fragment>
    );
  }
}

export default HomePage;
