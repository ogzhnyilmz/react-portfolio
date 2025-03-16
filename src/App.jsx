import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("state", activeSection);
    window.history.pushState({}, "", url);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header setActiveSection={setActiveSection} />
      <main className="p-6">
        {activeSection === "home" && <Home />}
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
