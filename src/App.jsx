import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import CertificatePage from "./components/certificate/CertificatePage"; 
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Cursor from "./components/cursor/Cursor";
import SkillsPage from "./components/skills/SkillsPage";

const App = () => {
  
  return <div>
     <Cursor/>
    <section id="Homepage"><Navbar/> <Hero/></section>
    
    <section id="Services"><Parallax type="services"/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Certificates"><CertificatePage/></section>

    <section id="Skills"><SkillsPage/></section>
    <section id="Contact">
      <Contact/>
    </section>

 </div>


};

export default App;
