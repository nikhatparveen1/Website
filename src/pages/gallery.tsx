import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import esthevaEntrance from "@assets/Screenshot_2026-06-10_215249_1781108626097.png";
import salonInterior from "@assets/Screenshot_2026-06-10_215148_1781108613112.png";
import hairStation from "@assets/Screenshot_2026-06-10_215204_1781108613112.png";
import spaService from "@assets/Screenshot_2026-06-10_215302_1781108626098.png";
import nailGel from "@/assets/images/nail-gel.png";
import bridal1 from "@/assets/images/bridal-1.png";

const images = [
  salonInterior,
  bridal1,
  hairStation,
  nailGel,
  spaService,
  esthevaEntrance,
];

export default function Gallery() {
  return (
    <main className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">The Gallery</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground font-light text-lg">
            A glimpse inside Patna's premier luxury salon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="aspect-square bg-card overflow-hidden"
            >
              <img src={img} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 font-serif text-xl">
            <Link href="/contact">Experience It Yourself</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
