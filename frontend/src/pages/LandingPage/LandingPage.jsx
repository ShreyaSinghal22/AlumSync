import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Working from "./components/Working";
import Response from "./components/Response";
import Account from "./components/Account";
import Aboutus from "./components/Aboutus";
import Helpsupport from "./components/Helpsupport";
import Join from "./components/Join";
import Footer from "./components/Footer";

import "./landing-page.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Working />
      <Response />
      <Account />
      <Aboutus />
      <Helpsupport />
      <Join />
      <Footer />
    </div>
  );
}
