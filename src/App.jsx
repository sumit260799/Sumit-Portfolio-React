import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { About, Footer, Header, Testimonial, Skills, Work } from "./container";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
