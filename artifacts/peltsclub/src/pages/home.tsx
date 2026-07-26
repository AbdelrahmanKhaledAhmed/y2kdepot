import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Collection from '@/components/sections/Collection';
import BrandStatement from '@/components/sections/BrandStatement';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c0c0c0] selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <BrandStatement />
      <Footer />
    </main>
  );
}
