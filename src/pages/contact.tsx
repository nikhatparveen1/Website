import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We will contact you shortly to confirm your booking.",
    });
  };

  return (
    <main className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Contact & Booking</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground font-light text-lg">
            Reserve your experience at Patna's luxury beauty destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-12 shadow-sm border border-border/50"
          >
            <h2 className="font-serif text-3xl mb-8">Request an Appointment</h2>
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
                <label className="text-sm font-medium">Email (Optional)</label>
                <Input type="email" placeholder="jane@example.com" className="bg-background rounded-none border-border" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Service</label>
                <Select required>
                  <SelectTrigger className="bg-background rounded-none border-border h-10">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bridal">Bridal & HD Makeup</SelectItem>
                    <SelectItem value="nails">Nail Art & Extensions</SelectItem>
                    <SelectItem value="hair">Hair Styling & Color</SelectItem>
                    <SelectItem value="skin">Facials & Skin Care</SelectItem>
                    <SelectItem value="spa">Luxury Spa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Date</label>
                  <Input type="date" required className="bg-background rounded-none border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Time</label>
                  <Input type="time" required className="bg-background rounded-none border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <Textarea placeholder="Any special requests?" className="bg-background rounded-none border-border min-h-[100px]" />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 font-serif text-xl mt-4">
                Submit Request
              </Button>
              <p className="text-xs text-center text-muted-foreground italic mt-4">
                * This is a request. Our team will contact you for instant confirmation.
              </p>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-serif text-3xl mb-8">Studio Details</h2>
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
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-card">
                <p className="text-muted-foreground font-serif text-xl flex items-center gap-2"><MapPin className="text-primary" /> Map View</p>
              </div>
            </div>
            
            <div className="pt-4">
               <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white hover:bg-[#1ebd5a] transition-colors py-4 font-serif text-xl shadow-md"
                >
                 Book via WhatsApp
               </a>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
