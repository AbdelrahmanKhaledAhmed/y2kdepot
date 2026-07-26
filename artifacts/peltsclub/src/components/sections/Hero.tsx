import { motion } from 'framer-motion';
import beltImgLandscape from "@assets/ChatGPT_Image_26_يوليو_2026،_03_47_30_ص_1785029551981.png";
import beltImgPortrait from "@assets/ChatGPT_Image_26_يوليو_2026،_04_20_30_ص_1785030178794.png";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-end md:items-center justify-start">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={beltImgPortrait}
          alt="PELTSCLUB Hero"
          className="block md:hidden w-full h-full object-cover object-center opacity-90"
        />
        <img
          src={beltImgLandscape}
          alt="PELTSCLUB Hero"
          className="hidden md:block w-full h-full object-cover opacity-70"
        />

        {/* Mobile: strong bottom vignette so text is readable, top stays clear for buckle */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.1) 35%, rgba(10,10,10,0.7) 62%, rgba(10,10,10,0.97) 85%, #0a0a0a 100%)',
          }}
        />

        {/* Desktop: darken left side */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 md:px-6 relative z-10 pb-16 md:pb-0 md:pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className="text-[#c0c0c0] text-[11px] md:text-base font-bold tracking-[0.35em] uppercase">
              ✦ Y2K. STREET. TIMELESS.
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif leading-[0.88] mb-4 md:mb-6 text-white drop-shadow-2xl text-[3.4rem] md:text-8xl lg:text-9xl">
            BELTS THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#888]">
              COMPLETE
            </span>
            <br />
            THE FIT
          </h1>

          {/* Subtext */}
          <p className="text-[#aaaaaa] text-[13px] md:text-xl font-medium tracking-widest mb-6 md:mb-10 uppercase">
            Y2K inspired belts for the new generation.
          </p>

          {/* CTA */}
          <button
            onClick={() =>
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative px-8 py-4 md:px-8 md:py-4 border border-white text-white font-bold tracking-[0.25em] transition-all hover:bg-white hover:text-black text-sm active:scale-95"
          >
            <span className="flex items-center gap-3">
              SHOP NOW
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 md:bottom-8 z-10 flex gap-2">
        <div className="w-10 h-[2px] bg-white rounded-full" />
        <div className="w-2 h-[2px] bg-white/30 rounded-full" />
        <div className="w-2 h-[2px] bg-white/30 rounded-full" />
      </div>
    </section>
  );
}
