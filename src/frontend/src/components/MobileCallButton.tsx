import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function MobileCallButton() {
  return (
    <motion.a
      href="tel:+13235550100"
      data-ocid="mobile.call_button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileTap={{ scale: 0.93 }}
      className="md:hidden fixed bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full fire-gradient text-black font-bold shadow-fire-lg"
      aria-label="Call Camacho's BBQ"
    >
      <Phone size={18} className="animate-pulse" />
      <span className="text-sm">Call Now</span>
    </motion.a>
  );
}
