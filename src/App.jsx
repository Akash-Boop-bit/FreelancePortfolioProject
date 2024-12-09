import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Lenis from "lenis";
import Logo from "./components/Logo";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  const [size, setSize] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setSize(false);
    }
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
      setSize(false);
    } else {
      setSize(true);
    }
  });
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 8000);
  });

  return (
    <>
      {!render ? (
        <Logo />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home size={size}/>} />
            <Route path="/projects" element={<Projects  size={size}/>} />
            <Route path="/about" element={<AboutMe size={size}/>} />
            <Route path="/contact" element={<ContactMe size={size}/>} />

          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
