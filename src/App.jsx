import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../public/images/profile.jpeg";
import backgroundImage from "../public/images/bg-image.jpg";

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

function Header({ setActiveSection }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Oğuzhan Yılmaz</h1>
        <nav className="space-x-6">
          <button onClick={() => setActiveSection("home")} className="hover:text-yellow-400">Ana Sayfa</button>
          <button onClick={() => setActiveSection("about")} className="hover:text-yellow-400">Hakkımda</button>
          <button onClick={() => setActiveSection("skills")} className="hover:text-yellow-400">Yetenekler</button>
          <button onClick={() => setActiveSection("projects")} className="hover:text-yellow-400">Projeler</button>
          <button onClick={() => setActiveSection("contact")} className="hover:text-yellow-400">İletişim</button>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-center py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.img
        src={profileImage}
        alt="Profil Fotoğrafı"
        className="w-48 h-48 rounded-full border-4 border-gray-700 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <h1 className="text-5xl font-extrabold text-white mt-4">Merhaba, Ben Oğuzhan Yılmaz</h1>
      <p className="text-xl mt-2">Jr. Frontend Developer</p>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full py-20 bg-gray-800 flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full text-black">
        <h2 className="text-4xl font-semibold text-center">Hakkımda</h2>
        <p className="mt-4 text-lg">
          Adım Oğuzhan Yılmaz. 24 yaşındayım. Rizeliyim ve Rize'de yaşıyorum. Yazılıma karşı hep bir ilgim vardı.
          Bunun sebebi çocukluğumdan beri bilgisayarla uğraşmam ve kendi kendime öğrenmemdi.
          Şimdi ise Acunmedya Akademi'de Frontend uzmanlık eğitimi alıyorum.
          Burada farklı projeler geliştirerek bu alanda ilerlemeye çalışıyorum.
        </p>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 py-20 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Yeteneklerim</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="skill-card">
            <h3 className="text-2xl">HTML</h3>
            <p className="text-lg">Semantik HTML ve erişilebilirlik standartları.</p>
          </div>
          <div className="skill-card">
            <h3 className="text-2xl">CSS</h3>
            <p className="text-lg">Flexbox, Grid, Tailwind CSS ile modern tasarımlar</p>
          </div>
          <div className="skill-card">
            <h3 className="text-2xl">JavaScript</h3>
            <p className="text-lg">React.js ile etkileşimli web uygulamaları.</p>
          </div>
          <div className="skill-card">
            <h3 className="text-2xl">Git</h3>
            <p className="text-lg">Versiyon kontrol sistemleri ve GitHub kullanımı.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      title: "React Todo Uygulaması",
      url: "https://react-todo-navy-two.vercel.app/",
    },
    {
      title: "Frontend Quiz",
      url: "https://frontend-quiz-app-coral.vercel.app/",
    },
    {
      title: "Dessert App",
      url: "https://desserts-app-theta.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-800 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Projelerim</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                Görüntüle
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-900 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">İletişim</h2>
        <p className="mt-4 text-lg">Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
        <div className="flex justify-center mt-6 space-x-8">
          <p>📞 +90 553 440 5273</p>
          <p>📧 ogzhnyilmzz@outlook.com</p>
          <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-y%C4%B1lmaz-720849315/" target="_blank" className="hover:underline">🔗 LinkedIn</a>
          <a href="https://github.com/ogzhnyilmz" target="_blank" className="hover:underline">🐙 GitHub</a>
        </div>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Oğuzhan Yılmaz. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
