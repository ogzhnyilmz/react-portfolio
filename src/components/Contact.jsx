import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-900 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mt-40">İletişim</h2>
        <p className="mt-4 text-lg">Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
        <div className="mt-6 space-y-4">
          <p>📞 +90 553 440 5273</p>
          <p>📧 ogzhnyilmzz@outlook.com</p>
          <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-y%C4%B1lmaz-720849315/" target="_blank" className="hover:underline">🔗 LinkedIn</a>
          <a href="https://github.com/ogzhnyilmz" target="_blank" className="hover:underline">🐙 GitHub</a>
        </div>
      </div>
    </motion.div>
  );
}
