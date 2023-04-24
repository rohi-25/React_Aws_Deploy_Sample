import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import React, { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
