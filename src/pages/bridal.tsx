import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import bridal1 from "@/assets/images/bridal-1.png";
import bridal2 from "@/assets/images/bridal-2.png";
import hairUpdo from "@/assets/images/hair-updo.png";

export default function Bridal() {
  return (
    <main className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Bridal Excellence</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground font-light text-lg">
            Your most important day deserves nothing less than perfection. Our elite bridal artistry ensures you walk down the aisle feeling breathtaking, confident, and unapologetically you.
          </p>
        </motion.div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-6"
            >
              <h2 className="font-serif text-4xl text-primary">Traditional Grace</h2>
              <p className="font-light text-muted-foreground leading-relaxed text-lg">
                Rich tones, flawless bases, and intricate detailing. We honor tradition while elevating your natural beauty using high-definition, long-lasting products that look immaculate both in person and on camera.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 aspect-[3/4] p-2 bg-white shadow-xl"
            >
              <img src={bridal1} alt="Traditional Bridal" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] p-2 bg-white shadow-xl"
            >
              <img src={bridal2} alt="Modern Bridal" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl text-primary">Modern Glamour</h2>
              <p className="font-light text-muted-foreground leading-relaxed text-lg">
                For the contemporary bride. Soft smokey eyes, glowing skin, and understated elegance. We craft looks that feel fresh, sophisticated, and flawlessly tailored to your personal aesthetic.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-6"
            >
              <h2 className="font-serif text-4xl text-primary">Exquisite Hair Artistry</h2>
              <p className="font-light text-muted-foreground leading-relaxed text-lg">
                Your bridal look is incomplete without the perfect hair. From romantic updos adorned with delicate florals to voluminous cascading waves, our styling completes your vision.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 aspect-[3/4] p-2 bg-white shadow-xl"
            >
              <img src={hairUpdo} alt="Bridal Hair Updo" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-8 font-serif text-2xl">
            <Link href="/contact">Book Your Bridal Consultation</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
