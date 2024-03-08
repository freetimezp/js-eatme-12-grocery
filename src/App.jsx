import { useEffect } from "react";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-cubic",
    });
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </main>
  )
}

export default App;
