import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nailGel from "@/assets/images/nail-gel.png";
import nailFrench from "@/assets/images/nail-french.png";
import nailOmbre from "@/assets/images/nail-ombre.png";
import nailBridal from "@/assets/images/nail-bridal.png";
import nailChrome from "@/assets/images/nail-chrome.png";

const categories = ["All", "Extensions", "Bridal", "Chrome", "Minimal"];

const portfolio = [
  { id: 1, src: nailGel, category: "Extensions", title: "Luxury Pink Gel" },
  { id: 2, src: nailFrench, category: "Minimal", title: "Classic French Tip" },
  { id: 3, src: nailOmbre, category: "Extensions", title: "Nude Ombre" },
  { id: 4, src: nailBridal, category: "Bridal", title: "Indian Bridal Art" },
  { id: 5, src: nailChrome, category: "Chrome", title: "Metallic Champagne" },
];

export default function NailArt() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? portfolio 
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <main className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Nail Artistry</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground font-light text-lg">
            Precision, creativity, and luxury at your fingertips. Explore our Pinterest-worthy gallery of custom designs.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-none font-sans tracking-wide transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-transparent border border-border text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group relative cursor-pointer"
              >
                <img src={item.src} alt={item.title} className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-serif text-2xl">{item.title}</h3>
                    <p className="text-primary/90 text-sm tracking-widest uppercase">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
