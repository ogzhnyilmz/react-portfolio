import { motion } from "framer-motion";

export default function Skills() {
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
          <div className="skill-card bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">HTML</h3>
            <p className="text-lg">Semantik HTML ve erişilebilirlik standartları.</p>
          </div>
          <div className="skill-card bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">CSS</h3>
            <p className="text-lg">Flexbox, Grid, Tailwind CSS ile modern tasarımlar.</p>
          </div>
          <div className="skill-card bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">JavaScript</h3>
            <p className="text-lg">React.js ile etkileşimli web uygulamaları.</p>
          </div>
          <div className="skill-card bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl">Git</h3>
            <p className="text-lg">Versiyon kontrol sistemleri ve GitHub kullanımı.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
