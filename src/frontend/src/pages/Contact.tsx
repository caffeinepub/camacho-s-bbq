import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiYelp } from "react-icons/si";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { mutate, isPending, isSuccess, isError, reset } =
    useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { name, email, message },
      {
        onSuccess: () => {
          setName("");
          setEmail("");
          setMessage("");
        },
      },
    );
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 text-center bg-smoke-700/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-smoke-900/90" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-fire-orange uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              We'd Love to Hear From You
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-cream">
              Contact Us
            </h1>
            <div className="mt-4 mx-auto w-20 h-1 fire-gradient rounded" />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">
                Send a Message
              </h2>

              {isSuccess ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-green-700/50 rounded p-8 text-center"
                >
                  <CheckCircle2
                    size={48}
                    className="mx-auto text-green-500 mb-4"
                  />
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. We'll get back to you soon!
                  </p>
                  <Button
                    onClick={reset}
                    variant="outline"
                    className="border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-smoke-900"
                  >
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-cream/80 mb-1 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.name_input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your full name"
                      className="bg-smoke-700/50 border-border focus:border-fire-orange"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-cream/80 mb-1 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email_input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="bg-smoke-700/50 border-border focus:border-fire-orange"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-cream/80 mb-1 block"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="bg-smoke-700/50 border-border focus:border-fire-orange resize-none"
                    />
                  </div>

                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-red-400 text-sm bg-red-950/40 border border-red-800/50 rounded p-3"
                    >
                      <AlertCircle size={16} />
                      <span>
                        Something went wrong. Please try again or call us
                        directly.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="w-full fire-gradient text-white font-bold uppercase tracking-wider py-3 border-0 hover:opacity-90"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Sending...
                        </span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-cream mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 fire-gradient rounded flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Address</p>
                      <p className="text-muted-foreground text-sm">
                        3456 E. Olympic Blvd
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Los Angeles, CA 90023
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 fire-gradient rounded flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Phone</p>
                      <a
                        href="tel:+13235550100"
                        className="text-fire-orange text-sm hover:text-fire-amber transition-colors"
                      >
                        (323) 555-0100
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 fire-gradient rounded flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Email</p>
                      <a
                        href="mailto:smokin@camachosbbq.com"
                        className="text-fire-orange text-sm hover:text-fire-amber transition-colors"
                      >
                        smokin@camachosbbq.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 fire-gradient rounded flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Hours</p>
                      <div className="text-muted-foreground text-sm space-y-0.5">
                        <p>Mon–Thu: 11:00 AM – 9:00 PM</p>
                        <p>Fri–Sat: 11:00 AM – 10:00 PM</p>
                        <p>Sunday: 11:00 AM – 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-cream font-semibold mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-muted-foreground hover:text-fire-orange hover:border-fire-orange transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram size={18} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-muted-foreground hover:text-fire-orange hover:border-fire-orange transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook size={18} />
                  </a>
                  <a
                    href="https://yelp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card border border-border rounded flex items-center justify-center text-muted-foreground hover:text-fire-orange hover:border-fire-orange transition-colors"
                    aria-label="Yelp"
                  >
                    <SiYelp size={18} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded overflow-hidden border border-border shadow-fire">
                <iframe
                  title="Camacho's BBQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3439975856!2d-118.19583!3d34.0224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzIwLjYiTiAxMTjCsDExJzQ1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
