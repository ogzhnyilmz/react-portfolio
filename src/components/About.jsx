import { motion } from "framer-motion";

export default function About() {
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