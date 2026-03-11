import { Link } from "@tanstack/react-router";
import { SiFacebook, SiInstagram, SiYelp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-smoke-900 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/logo-camachos-bbq-transparent.dim_400x200.png"
              alt="Camacho's BBQ"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Slow-smoked meats, homemade sauces, and bold Texas flavor — right
              here in LA.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-fire-orange transition-colors text-xl"
              >
                <SiInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-fire-orange transition-colors text-xl"
              >
                <SiFacebook />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="text-muted-foreground hover:text-fire-orange transition-colors text-xl"
              >
                <SiYelp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-fire-orange font-display text-lg font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "About Us", to: "/about" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-cream transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-fire-orange font-display text-lg font-semibold mb-4 uppercase tracking-wider">
              Find Us
            </h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>3456 E. Olympic Blvd</p>
              <p>Los Angeles, CA 90023</p>
              <p>
                <a
                  href="tel:+13235550100"
                  className="hover:text-cream transition-colors"
                >
                  (323) 555-0100
                </a>
              </p>
              <p>
                <a
                  href="mailto:smokin@camachosbbq.com"
                  className="hover:text-cream transition-colors"
                >
                  smokin@camachosbbq.com
                </a>
              </p>
            </address>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p className="text-cream/70 font-semibold">Hours</p>
              <p>Mon–Thu: 11am – 9pm</p>
              <p>Fri–Sat: 11am – 10pm</p>
              <p>Sun: 11am – 8pm</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            © {year} Camacho's BBQ. All rights reserved. | Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fire-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
