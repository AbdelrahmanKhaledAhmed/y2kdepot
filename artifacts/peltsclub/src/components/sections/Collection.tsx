import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { products } from '@/data/products';

const promos = [
  'BUY 2 · GET THE 3RD FREE',
  'BUY 3 · GET 2 FREE',
];

function PromoBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full overflow-hidden bg-white text-black border-y border-[#222]"
    >
      <div className="flex whitespace-nowrap py-2 animate-marquee">
        {[0, 1].map((loop) => (
          <div key={loop} className="flex items-center flex-shrink-0">
            {promos.map((text, i) => (
              <span
                key={`${loop}-${i}`}
                className="mx-6 md:mx-10 text-xs md:text-sm font-bold tracking-[0.2em]"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
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

        <div className="mb-12">
          <PromoBar />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <motion.div
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
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-1">
                  <h3 className="text-lg font-bold tracking-wider text-white mb-1">{product.name}</h3>
                  <p className="text-[#666] text-xs tracking-widest group-hover:text-[#c0c0c0] transition-colors">
                    VIEW PRICE →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
