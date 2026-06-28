import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp size={28} />
    </a>
  );
}
