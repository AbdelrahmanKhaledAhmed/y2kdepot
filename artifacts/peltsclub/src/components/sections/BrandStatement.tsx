import { motion } from 'framer-motion';
import beltImg from "@assets/ChatGPT_Image_26_يوليو_2026،_03_47_30_ص_1785029551981.png";

export default function BrandStatement() {
  return (
    <section className="py-20 md:py-0 border-t border-[#222] bg-[#0a0a0a] overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
          <motion.div 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black"
          >
            <img 
              src={beltImg} 
              alt="PELTSCLUB Statement" 
              className="w-full h-full object-cover filter grayscale contrast-125 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24 relative z-10 bg-[#0a0a0a]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-[#c0c0c0] text-sm font-bold tracking-[0.3em] mb-6 block">✦ JOIN THE CLUB</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9]">
              MORE THAN <br/> JUST A BELT
            </h2>
            <p className="text-[#999999] text-lg md:text-xl font-medium tracking-wide mb-12 border-l-2 border-[#333] pl-6">
              It's a statement. It's an attitude. It's PELTSCLUB.
            </p>
            <button className="group relative px-8 py-4 bg-white text-black font-bold tracking-[0.2em] overflow-hidden transition-all hover:bg-[#c0c0c0]">
              <span className="relative z-10 flex items-center gap-2">
                SHOP THE CLUB 
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
