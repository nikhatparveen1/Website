import { motion } from "framer-motion";
import salonInterior from "@assets/Screenshot_2026-06-10_215148_1781108613112.png";
import esthevaEntrance from "@assets/Screenshot_2026-06-10_215249_1781108626097.png";

export default function About() {
  return (
    <main className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground">Our Story</h1>
            <div className="w-24 h-[1px] bg-primary"></div>
            <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
              Founded on the belief that beauty is an experience, not just a service, Estheva Studio was created to bring world-class luxury to Patna. 
            </p>
            <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
              We designed our Fraser Road studio to feel like a high-end atelier—a sanctuary where you can pause, unwind, and allow our artisans to reveal your most radiant self. Every product we use, every chair you sit in, and every technique we apply has been rigorously selected for excellence.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] p-2 bg-white shadow-xl"
          >
            <img src={esthevaEntrance} alt="Estheva Studio Entrance" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="bg-card p-12 md:p-24 text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl"
          >
            The Atmosphere
          </motion.h2>
          <div className="w-24 h-[1px] bg-primary mx-auto"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-light text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Warm champagne golds, soft ivories, and ambient lighting set the stage for your transformation. It is unhurried, tactile, and deeply relaxing.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video sm:aspect-[21/9] w-full overflow-hidden mt-12 shadow-2xl"
          >
            <img src={salonInterior} alt="Salon Interior" className="w-full h-full object-cover" />
          </motion.div>
        </div>

      </div>
    </main>
  );
}
