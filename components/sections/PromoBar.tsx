import { motion } from 'framer-motion';

const promos = [
  'BUY 2 · GET THE 3RD FREE',
  'BUY 3 · GET 2 FREE',
];

export default function PromoBar() {
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
