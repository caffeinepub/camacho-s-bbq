import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home_link" },
  { label: "Menu", to: "/menu", ocid: "nav.menu_link" },
  { label: "About", to: "/about", ocid: "nav.about_link" },
  { label: "Gallery", to: "/gallery", ocid: "nav.gallery_link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger for closing the menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-smoke-900/95 backdrop-blur-md shadow-fire"
          : "bg-gradient-to-b from-smoke-900/80 to-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/generated/logo-camachos-bbq-transparent.dim_400x200.png"
              alt="Camacho's BBQ"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 rounded ${
                  pathname === link.to
                    ? "text-fire-orange"
                    : "text-cream/80 hover:text-fire-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+13235550100"
              className="ml-4 px-5 py-2 fire-gradient text-black text-sm font-bold uppercase tracking-widest rounded transition-opacity hover:opacity-90 shadow-fire"
            >
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="nav.mobile_menu_toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cream hover:text-fire-orange transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-smoke-900/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    data-ocid={link.ocid}
                    className={`block px-4 py-3 text-base font-semibold uppercase tracking-widest rounded transition-colors ${
                      pathname === link.to
                        ? "text-fire-orange bg-muted"
                        : "text-cream/80 hover:text-fire-orange hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:+13235550100"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-2 block text-center py-3 fire-gradient text-black font-bold uppercase tracking-widest rounded"
              >
                📞 Call to Order
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
