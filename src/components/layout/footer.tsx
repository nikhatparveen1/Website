import { Link } from "wouter";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <span className="font-serif text-4xl leading-none text-primary">Estheva</span>
              <span className="text-[0.6rem] tracking-[0.3em] font-sans text-primary/80">STUDIO</span>
            </div>
            <p className="text-muted-foreground font-sans font-light leading-relaxed max-w-sm">
              Patna's most luxurious beauty and transformation studio. Where every detail is curated and every service is an experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-primary">Explore</h3>
            <ul className="space-y-3 font-sans font-light">
              <li><Link href="/"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/services"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Services</span></Link></li>
              <li><Link href="/bridal"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Bridal Portfolio</span></Link></li>
              <li><Link href="/nail-art"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Nail Art</span></Link></li>
              <li><Link href="/gallery"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Gallery</span></Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-primary">Contact</h3>
            <ul className="space-y-4 font-sans font-light">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <span>Fraser Road<br />Patna, Bihar 800001</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91-XXXX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@esthevastudio.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-primary">Hours</h3>
            <ul className="space-y-3 font-sans font-light text-muted-foreground">
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center font-sans text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Estheva Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
