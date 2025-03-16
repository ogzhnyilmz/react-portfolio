import { motion } from "framer-motion";

export default function Projects() {
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
