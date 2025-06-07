import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Partners from "./components/Partners";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Service />
      <Partners />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
