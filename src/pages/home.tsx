import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import esthevaEntrance from "@assets/Screenshot_2026-06-10_215249_1781108626097.png";
import salonInterior from "@assets/Screenshot_2026-06-10_215148_1781108613112.png";
import hairStation from "@assets/Screenshot_2026-06-10_215204_1781108613112.png";
import spaService from "@assets/Screenshot_2026-06-10_215302_1781108626098.png";

import nailGel from "@/assets/images/nail-gel.png";
import nailFrench from "@/assets/images/nail-french.png";
import nailOmbre from "@/assets/images/nail-ombre.png";
import nailBridal from "@/assets/images/nail-bridal.png";
import nailChrome from "@/assets/images/nail-chrome.png";

import bridal1 from "@/assets/images/bridal-1.png";
import bridal2 from "@/assets/images/bridal-2.png";
import hairBalayage from "@/assets/images/hair-balayage.png";

const reviews = [
  { id: 1, name: "Priya S.", text: "The most luxurious salon experience in Patna. The bridal makeup was flawless and lasted all night." },
  { id: 2, name: "Ananya M.", text: "Their nail artistry is unmatched. The attention to detail and premium environment make you feel like royalty." },
  { id: 3, name: "Kritika V.", text: "Estheva Studio transformed my hair. The balayage blending is seamless. Truly a world-class atelier." },
];

export default function Home() {
  const { toast } = useToast();
  const [activeReview, setActiveReview] = useState(0);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We will contact you shortly to confirm your booking.",
    });
  };

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={salonInterior} 
            alt="Estheva Studio Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 flex flex-col items-center"
          >
            <span className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary leading-none">Estheva</span>
            <span className="text-sm md:text-lg tracking-[0.5em] font-sans text-white/90 mt-2">STUDIO</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight font-light"
          >
            Patna's Destination For <br/>
            <span className="italic text-primary font-medium">Luxury Beauty & Transformation</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-7 font-serif text-xl border-none">
              <a href="#booking">Book Appointment</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-10 py-7 font-serif text-xl">
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                An Atelier of <span className="italic text-primary">Refined Elegance</span>
              </h2>
              <div className="w-20 h-[1px] bg-primary"></div>
              <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
                Step into a world where every detail is curated for your transformation. Estheva Studio is more than a salon; it is an unhurried, tactile experience designed for those who appreciate the finest things in life.
              </p>
              <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
                Located on Fraser Road, our expert artisans blend global trends with personalized care, offering everything from bespoke bridal transformations to intricate nail artistry in an environment of absolute luxury.
              </p>
              <Button asChild variant="link" className="text-primary hover:text-primary/80 font-serif text-xl p-0 h-auto">
                <Link href="/about">Discover Our Story &rarr;</Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative z-10 p-2 bg-white shadow-2xl">
                <img src={esthevaEntrance} alt="Estheva Studio Entrance" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Showcase */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Curated Services</h2>
            <div className="w-20 h-[1px] bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">Experience unparalleled expertise across a spectrum of luxury beauty treatments.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Bridal Excellence", image: bridal1, desc: "Flawless HD & Airbrush makeup for your most important day." },
              { title: "Nail Artistry", image: nailGel, desc: "Extensions, gel polishes, and bespoke designs." },
              { title: "Premium Hair Care", image: hairStation, desc: "Balayage, styling, and rejuvenating hair spas." },
              { title: "Skin & Facials", image: spaService, desc: "Rejuvenating treatments tailored to your skin." },
              { title: "Hair Styling", image: hairBalayage, desc: "Precision cuts and elegant styling." },
              { title: "Luxury Spa", image: spaService, desc: "Unwind with our signature massages." }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group cursor-pointer bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 text-center border border-t-0 border-border">
                  <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                  <p className="font-light text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-10 py-6 font-serif text-lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Nail Art Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Nail Artistry Gallery</h2>
              <div className="w-20 h-[1px] bg-primary"></div>
            </div>
            <Button asChild variant="link" className="text-primary hover:text-primary/80 font-serif text-xl p-0 h-auto">
              <Link href="/nail-art">Full Portfolio &rarr;</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img src={nailGel} alt="Nail Art" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-square" />
            </div>
            <div className="relative group overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img src={nailFrench} alt="French Tip" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative group overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img src={nailOmbre} alt="Ombre Nails" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative group overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img src={nailChrome} alt="Chrome Nails" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative group overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img src={nailBridal} alt="Bridal Nails" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bridal Showcase */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] p-2 bg-black/50 shadow-2xl"
            >
              <img src={bridal2} alt="Bridal Showcase" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-primary">
                The Estheva Bride
              </h2>
              <div className="w-20 h-[1px] bg-primary"></div>
              <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
                Your wedding day deserves nothing less than perfection. Our elite bridal artistry ensures you walk down the aisle feeling breathtaking, confident, and unapologetically you.
              </p>
              <ul className="space-y-4 font-light text-white">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> HD & Airbrush Makeup</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Exquisite Hair Styling & Updos</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Pre-Bridal Skin Care Rituals</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Luxury Bridal Nail Art</li>
              </ul>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 font-serif text-xl border-none mt-4">
                <Link href="/bridal">View Bridal Portfolio</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Client Reviews */}
      <section className="py-24 bg-card overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Client Stories</h2>
            <div className="w-20 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto relative h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="flex gap-1 text-primary mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6 px-8">
                  "{reviews[activeReview].text}"
                </p>
                <p className="font-sans font-medium tracking-wide uppercase text-sm text-muted-foreground">
                  — {reviews[activeReview].name}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
              <button 
                onClick={() => setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
              <button 
                onClick={() => setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8. Booking & Contact */}
      <section id="booking" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Reserve Your Experience</h2>
            <div className="w-20 h-[1px] bg-primary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 shadow-sm border border-border/50"
            >
              <h3 className="font-serif text-3xl mb-8">Request an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input required placeholder="Jane Doe" className="bg-background rounded-none border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input required placeholder="+91" className="bg-background rounded-none border-border" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Service</label>
                  <Select required>
                    <SelectTrigger className="bg-background rounded-none border-border h-10">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bridal">Bridal Makeup</SelectItem>
                      <SelectItem value="hd">HD Makeup</SelectItem>
                      <SelectItem value="nails">Nail Art & Extensions</SelectItem>
                      <SelectItem value="hair_style">Hair Styling</SelectItem>
                      <SelectItem value="hair_color">Hair Color</SelectItem>
                      <SelectItem value="spa">Spa Services</SelectItem>
                      <SelectItem value="facial">Facials & Skin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
                    <Input type="date" required className="bg-background rounded-none border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time</label>
                    <Input type="time" required className="bg-background rounded-none border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Notes</label>
                  <Textarea placeholder="Any special requests?" className="bg-background rounded-none border-border" />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 font-serif text-xl mt-4">
                  Submit Request
                </Button>
                <p className="text-xs text-center text-muted-foreground italic mt-4">
                  * Instant Confirmation available via WhatsApp
                </p>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="font-serif text-3xl mb-8">Studio Details</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-lg">Location</p>
                      <p className="text-muted-foreground font-light">Fraser Road, Near Dak Bungalow Chauraha<br/>Patna, Bihar 800001</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-lg">Hours of Operation</p>
                      <p className="text-muted-foreground font-light">Monday – Sunday<br/>10:00 AM – 8:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Phone className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-lg">Phone / WhatsApp</p>
                      <p className="text-muted-foreground font-light">+91-XXXX-XXXXXX</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-lg">Email</p>
                      <p className="text-muted-foreground font-light">hello@esthevastudio.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="aspect-video bg-muted relative overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center bg-card">
                  <p className="text-muted-foreground font-serif text-xl flex items-center gap-2"><MapPin className="text-primary" /> Map View Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
