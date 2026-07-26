import { useState } from 'react';
import { useRoute, useLocation, Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { getProductById } from '@/data/products';
import { useCart } from '@/lib/cart';

export default function Product() {
  const [, params] = useRoute('/product/:id');
  const [, navigate] = useLocation();
  const { addItem, openCart } = useCart();
  const product = params?.id ? getProductById(Number(params.id)) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="text-3xl md:text-5xl font-serif mb-6">PRODUCT NOT FOUND</h1>
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

  const handleAddToBag = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }
    addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0], size: selectedSize });
    openCart();
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }
    addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0], size: selectedSize });
    navigate('/checkout');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#999999] hover:text-white text-sm tracking-widest mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4" /> BACK
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-square sm:aspect-[4/5] bg-[#111] border border-[#222] overflow-hidden mb-4">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-[#111] border overflow-hidden transition-colors ${
                    activeImage === idx ? 'border-[#c0c0c0]' : 'border-[#222] hover:border-[#555]'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {product.isNew && (
              <div className="inline-block bg-white text-black text-xs font-bold px-2 py-1 tracking-widest mb-4">
                NEW
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-serif mb-3">{product.name}</h1>
            <p className="text-[#999999] text-lg tracking-widest mb-8">{product.price} EGP</p>

            <div className="mb-8">
              <p className="text-xs tracking-widest text-[#999999] mb-3">
                SELECT SIZE {error && !selectedSize && <span className="text-red-500 normal-case">— please choose a size</span>}
              </p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setError(false);
                    }}
                    className={`px-5 py-3 border font-bold tracking-widest text-sm transition-colors ${
                      selectedSize === size
                        ? 'bg-white text-black border-white'
                        : 'border-[#333] text-white hover:border-[#c0c0c0]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToBag}
                className="flex-1 bg-white text-black py-4 font-bold tracking-[0.2em] text-sm hover:bg-[#c0c0c0] transition-colors"
              >
                ADD TO BAG
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 border border-white text-white py-4 font-bold tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CartDrawer />
    </main>
  );
}
