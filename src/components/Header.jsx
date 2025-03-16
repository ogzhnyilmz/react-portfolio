export default function Header({ setActiveSection }) {
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