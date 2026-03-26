import { MessageCircle, Instagram } from "lucide-react";

const WhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
    <a
      href="https://www.instagram.com/studio.sixseven/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Visit our Instagram"
    >
      <Instagram className="w-6 h-6" />
    </a>
    <a
      href="https://wa.me/918072121493"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  </div>
);

export default WhatsAppButton;
