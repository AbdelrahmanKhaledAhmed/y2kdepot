import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">TERMS & CONDITIONS</h1>
        <p className="text-[#999999] text-base leading-relaxed tracking-wide">
          Terms and conditions content coming soon. For any questions about orders, shipping, or returns, reach out to us on Instagram or TikTok.
        </p>
      </div>
      <Footer />
    </main>
  );
}
