import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Bridal", path: "/bridal" },
  { name: "Nail Art", path: "/nail-art" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-col items-center cursor-pointer">
              <span className={`font-serif text-3xl leading-none ${isScrolled ? "text-foreground" : "text-primary"}`}>Estheva</span>
              <span className={`text-[0.6rem] tracking-[0.3em] font-sans ${isScrolled ? "text-muted-foreground" : "text-primary/80"}`}>STUDIO</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  className={`text-sm font-medium tracking-wide uppercase cursor-pointer transition-colors hover:text-primary ${
                    location === link.path 
                      ? "text-primary" 
                      : isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 font-serif text-lg">
              <Link href="/contact">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-border">
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl text-foreground leading-none">Estheva</span>
                <span className="text-[0.6rem] tracking-[0.3em] font-sans text-muted-foreground">STUDIO</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-foreground">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 p-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <span className={`font-serif text-3xl cursor-pointer ${location === link.path ? "text-primary" : "text-foreground"}`}>
                    {link.name}
                  </span>
                </Link>
              ))}
              <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-6 font-serif text-xl w-full max-w-sm">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
