import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif mb-8"
        >
          ABOUT US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#999999] text-lg md:text-xl leading-relaxed tracking-wide"
        >
          We're a store trying to bring you everything Y2K you need — accessories, statement pieces, and all things flashy.
        </motion.p>
      </div>
      <Footer />
    </main>
  );
}
