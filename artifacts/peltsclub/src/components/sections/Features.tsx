import { motion } from 'framer-motion';

const features = [
  { icon: '✦', title: 'PREMIUM QUALITY', desc: 'Built to last' },
  { icon: '🌐', title: 'Y2K INSPIRED', desc: 'Iconic designs' },
  { icon: '🔒', title: 'SECURE PAYMENT', desc: '100% safe checkout' },
  { icon: '⚡', title: 'FAST DELIVERY', desc: 'Across Egypt' },
];

export default function Features() {
  return (
    <section className="border-y border-[#222] bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#222] border-b border-[#222] md:border-b-0">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-6 md:p-8 flex flex-col items-center text-center group hover:bg-[#111] transition-colors duration-300 ${
                idx < 2 ? 'border-b md:border-b-0 border-[#222]' : ''
              }`}
            >
              <span className="text-2xl mb-3 text-[#c0c0c0] group-hover:scale-110 transition-transform duration-300 font-serif">
                {feature.icon}
              </span>
              <h3 className="text-sm md:text-base font-bold tracking-widest text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-[#999999]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
