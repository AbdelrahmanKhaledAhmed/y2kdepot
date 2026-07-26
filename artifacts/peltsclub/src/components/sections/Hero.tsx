import { motion } from 'framer-motion';
import beltImgLandscape from "@assets/ChatGPT_Image_26_يوليو_2026،_03_47_30_ص_1785029551981.png";
import beltImgPortrait from "@assets/ChatGPT_Image_26_يوليو_2026،_04_20_30_ص_1785030178794.png";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-start md:items-center justify-start overflow-hidden">
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
        {/* Mobile: darken only top ~45% where text lives; Desktop: darken left side */}
        <div className="absolute inset-0 md:hidden" style={{background: 'linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.05) 65%, transparent 100%)'}}></div>
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <span className="text-[#c0c0c0] text-xs md:text-base font-bold tracking-[0.3em]">✦ Y2K. STREET. TIMELESS.</span>
          </div>
          
          <h1 className="text-[2.6rem] leading-[0.92] md:text-8xl lg:text-9xl font-serif md:leading-[0.9] mb-3 md:mb-6 text-white drop-shadow-2xl">
            BELTS THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#666]">COMPLETE</span> <br />
            THE FIT
          </h1>
          
          <p className="text-[#999999] text-sm md:text-xl font-medium tracking-wide mb-5 md:mb-10 max-w-lg">
            Y2K inspired belts for the new generation.
          </p>
          
          <button
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 py-3 md:px-8 md:py-4 border border-white text-white font-bold tracking-[0.2em] overflow-hidden transition-all hover:bg-white hover:text-black text-sm md:text-base"
          >
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
