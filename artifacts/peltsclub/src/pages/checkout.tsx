import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useCart } from '@/lib/cart';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Checkout() {
  const { items, subtotal, discount, total, clearCart } = useCart();
  const [, navigate] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', address: '', city: '' });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const orderLines = items
      .map((item) => `• ${item.name} (Size ${item.size}) x${item.qty} — ${item.price * item.qty} EGP`)
      .join('\n');

    const message =
      `🛍️ NEW ORDER\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Phone: ${form.phone}\n` +
      `Address: ${form.address}\n` +
      `City: ${form.city}\n\n` +
      `Items:\n${orderLines}\n\n` +
      `Subtotal: ${subtotal} EGP\n` +
      (discount > 0 ? `Bundle Discount: -${discount} EGP\n` : '') +
      `Total: ${total} EGP`;

    if (botToken && chatId) {
      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        });
      } catch (err) {
        console.error('Failed to send Telegram notification', err);
      }
    }

    setSending(false);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-[120px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-full border border-[#c0c0c0] flex items-center justify-center mb-6"
          >
            <Check className="w-8 h-8 text-[#c0c0c0]" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif mb-4">ORDER PLACED</h1>
          <p className="text-[#999999] tracking-widest text-sm max-w-md mb-10 uppercase">
            Thank you. We'll contact you shortly to confirm your order details.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 border border-white text-white font-bold tracking-[0.25em] text-sm hover:bg-white hover:text-black transition-all"
          >
            BACK TO HOME
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-[120px]">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">YOUR BAG IS EMPTY</h1>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-8 py-4 border border-white text-white font-bold tracking-[0.25em] text-sm hover:bg-white hover:text-black transition-all"
          >
            CONTINUE SHOPPING
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-[168px] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Form */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-8">CHECKOUT</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-widest text-[#999999] mb-2">FIRST NAME</label>
                <input
                  required
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                  className="w-full bg-transparent border border-[#333] px-4 py-3 text-white focus:border-[#c0c0c0] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-[#999999] mb-2">LAST NAME</label>
                <input
                  required
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                  className="w-full bg-transparent border border-[#333] px-4 py-3 text-white focus:border-[#c0c0c0] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-widest text-[#999999] mb-2">PHONE NUMBER</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                className="w-full bg-transparent border border-[#333] px-4 py-3 text-white focus:border-[#c0c0c0] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-[#999999] mb-2">ADDRESS</label>
              <input
                required
                value={form.address}
                onChange={handleChange('address')}
                className="w-full bg-transparent border border-[#333] px-4 py-3 text-white focus:border-[#c0c0c0] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-[#999999] mb-2">CITY</label>
              <input
                required
                value={form.city}
                onChange={handleChange('city')}
                className="w-full bg-transparent border border-[#333] px-4 py-3 text-white focus:border-[#c0c0c0] outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full bg-white text-black py-4 font-bold tracking-[0.2em] text-sm hover:bg-[#c0c0c0] transition-colors disabled:opacity-50"
            >
              {sending ? 'PLACING ORDER...' : 'PLACE ORDER — CASH ON DELIVERY'}
            </button>
          </form>
        </div>

        {/* Order summary */}
        <div>
          <h2 className="text-xl font-serif mb-6 tracking-wide">ORDER SUMMARY</h2>
          <div className="flex flex-col gap-5 border-b border-[#222] pb-6 mb-6">
            {items.map((item) => (
              <div key={item.cartId} className="flex gap-4">
                <div className="w-16 h-20 bg-[#111] border border-[#222] overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold tracking-wider mb-1">{item.name}</h3>
                    <p className="text-[#666] text-xs tracking-widest">SIZE {item.size} · QTY {item.qty}</p>
                  </div>
                  <p className="text-sm text-[#999999]">{item.price * item.qty} EGP</p>
                </div>
              </div>
            ))}
          </div>
          {discount > 0 && (
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="tracking-widest text-[#999999]">SUBTOTAL</span>
                <span className="text-[#999999]">{subtotal} EGP</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="tracking-widest text-[#c0c0c0]">BUNDLE DISCOUNT</span>
                <span className="text-[#c0c0c0]">-{discount} EGP</span>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between text-lg">
            <span className="tracking-widest text-[#999999] text-sm">TOTAL</span>
            <span className="font-bold">{total} EGP</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
