import { motion } from 'framer-motion';
import p1 from "@assets/p1.png";
import p2 from "@assets/p2.png";
import p3 from "@assets/p3.png";
import p4 from "@assets/p4.png";
import p5 from "@assets/p5.png";

const products = [
  {
    id: 1,
    name: "PELTSCLUB LOGO BELT",
    price: "650 EGP",
    image: p1,
    isNew: true,
  },
  {
    id: 2,
    name: "OVAL Y2K BELT",
    price: "650 EGP",
    image: p2,
    isNew: true,
  },
  {
    id: 3,
    name: "TRIBAL FLAME BELT",
    price: "650 EGP",
    image: p3,
    isNew: true,
  },
  {
    id: 4,
    name: "CHAIN LINK BELT",
    price: "650 EGP",
    image: p4,
    isNew: true,
  },
  {
    id: 5,
    name: "STUDDED Y2K BELT",
    price: "650 EGP",
    image: p5,
    isNew: true,
  }
];

export default function Collection() {
  return (
    <section id="collection" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white">OUR COLLECTION</h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-[#999999] hover:text-white flex items-center gap-2 group transition-colors"
          >
            VIEW ALL 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

        {/* Grid on all sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square sm:aspect-[4/5] bg-[#111] mb-4 overflow-hidden border border-[#222] group-hover:border-[#555] transition-colors">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10 bg-white text-black text-xs font-bold px-2 py-1 tracking-widest">
                    NEW
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                  <button className="bg-white text-black px-6 py-3 font-bold tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#c0c0c0]">
                    QUICK ADD
                  </button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-1">
                <h3 className="text-lg font-bold tracking-wider text-white mb-2">{product.name}</h3>
                <p className="text-[#999999] font-medium tracking-widest">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
