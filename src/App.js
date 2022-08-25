import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderToggle = () => {
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    };
    window.addEventListener("load", loaderToggle);
    return () => window.addEventListener("load", loaderToggle);
  }, []);

  return (
    <div className="App">
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
