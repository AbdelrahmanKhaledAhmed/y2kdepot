import { motion } from 'framer-motion';
import beltImgLandscape from "@assets/ChatGPT_Image_26_يوليو_2026،_03_47_30_ص_1785029551981.png";
import beltImgPortrait from "@assets/ChatGPT_Image_26_يوليو_2026،_04_20_30_ص_1785030178794.png";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-start overflow-hidden">
      {/* Background Image — portrait on mobile, landscape on desktop */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={beltImgPortrait}
          alt="PELTSCLUB Hero"
          className="block md:hidden w-full h-full object-cover object-center opacity-80"
        />
        <img
          src={beltImgLandscape}
          alt="PELTSCLUB Hero"
          className="hidden md:block w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 md:bg-gradient-to-r md:from-[#0a0a0a]/90 md:via-[#0a0a0a]/50 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#c0c0c0] text-sm md:text-base font-bold tracking-[0.3em]">✦ Y2K. STREET. TIMELESS.</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-6 text-white drop-shadow-2xl">
            BELTS THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#666]">COMPLETE</span> <br />
            THE FIT
          </h1>
          
          <p className="text-[#999999] text-lg md:text-xl font-medium tracking-wide mb-10 max-w-lg">
            Y2K inspired belts for the new generation.
          </p>
          
          <button className="group relative px-8 py-4 border border-white text-white font-bold tracking-[0.2em] overflow-hidden transition-all hover:bg-white hover:text-black">
            <span className="relative z-10 flex items-center gap-2">
              SHOP NOW 
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-4 md:left-6 z-10 flex gap-3">
        <div className="w-12 h-1 bg-white rounded-full"></div>
        <div className="w-2 h-1 bg-white/30 rounded-full"></div>
        <div className="w-2 h-1 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
}
