import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import esthevaEntrance from "@assets/Screenshot_2026-06-10_215249_1781108626097.png";
import salonInterior from "@assets/Screenshot_2026-06-10_215148_1781108613112.png";
import spaService from "@assets/Screenshot_2026-06-10_215302_1781108626098.png";
import hairBalayage from "@/assets/images/hair-balayage.png";
import nailGel from "@/assets/images/nail-gel.png";
import bridal2 from "@/assets/images/bridal-2.png";
import facialLuxury from "@/assets/images/facial-luxury.png";

const services = [
  { id: "bridal", title: "Bridal & HD Makeup", image: bridal2, desc: "Flawless artistry for your wedding day, ensuring you look breathtaking from every angle." },
  { id: "nails", title: "Nail Extensions & Art", image: nailGel, desc: "Acrylics, gels, chrome, and bespoke Pinterest-worthy designs crafted by experts." },
  { id: "hair", title: "Hair Styling & Color", image: hairBalayage, desc: "From seamless balayage to precision cuts and elegant updos." },
  { id: "skin", title: "Skin Care & Facials", image: facialLuxury, desc: "Rejuvenating treatments tailored to your skin's unique needs." },
  { id: "spa", title: "Luxury Spa Services", image: spaService, desc: "Unwind with our signature massages and deeply relaxing body therapies." },
  { id: "grooming", title: "Premium Grooming", image: salonInterior, desc: "Meticulous threading, waxing, and finishing touches." },
];

export default function Services() {
  return (
    <main className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Services</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground font-light text-lg">
            Every service at Estheva Studio is a ritual of luxury. We combine the finest products with unparalleled technique to deliver transformations that radiate confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-card">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h3 className="font-serif text-3xl mb-3">{service.title}</h3>
              <p className="font-light text-muted-foreground mb-6 flex-grow">{service.desc}</p>
              <Button asChild variant="outline" className="self-start rounded-none border-primary text-primary hover:bg-primary hover:text-white font-serif px-8">
                <Link href="/contact">Book This Service</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
