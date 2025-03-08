import Image from "next/image";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Aboutme from "./components/Aboutme";
import MyServices from "./components/MyServices";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen"> 
      <Navigation />
      <HeroSection />
      <Aboutme />
      <MyServices />
      <Portfolio />
      <Footer />
    </main>
  );
}
