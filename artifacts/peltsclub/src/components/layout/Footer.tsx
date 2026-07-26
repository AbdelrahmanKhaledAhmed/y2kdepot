import logoImg from "@assets/y2kdepot-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#222] py-16 md:py-20 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <img src={logoImg} alt="Y2K DEPOT" className="h-12 md:h-16 mb-8 opacity-80 hover:opacity-100 transition-opacity" />
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold tracking-[0.2em] text-[#666] mb-12">
          <a href="#" className="hover:text-white transition-colors">SHOP</a>
          <a href="#" className="hover:text-white transition-colors">COLLECTIONS</a>
          <a href="#" className="hover:text-white transition-colors">ABOUT US</a>
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
        </nav>
        <p className="text-[#444] text-xs tracking-widest font-medium">
          © 2025 Y2K DEPOT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
