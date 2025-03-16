import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-center py-20"
      style={{ backgroundImage: `url(/images/bg-image.jpg)` }}
    >
      <motion.img
        src="/images/profile.jpeg"
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