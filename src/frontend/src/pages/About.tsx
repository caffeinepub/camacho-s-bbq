import { Award, Flame, Heart, Star } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Flame,
    title: "Real Wood Smoke",
    desc: "We burn oak and mesquite only. Every single day. Gas has no place in our pit.",
  },
  {
    icon: Heart,
    title: "Family Recipes",
    desc: "Rubs, sauces, and sides — all from recipes passed down through the Camacho family.",
  },
  {
    icon: Star,
    title: "Made Fresh Daily",
    desc: "When we sell out, we sell out. We never reheat yesterday's BBQ.",
  },
  {
    icon: Award,
    title: "LA's Best BBQ",
    desc: "Proudly serving Los Angeles since 2010. The Eastside's original Texas smokehouse.",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/gallery-smoker.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-smoke-900/85" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-fire-orange uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Est. 2010 · Los Angeles, CA
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-cream">
              Our Story
            </h1>
            <div className="mt-4 mx-auto w-20 h-1 fire-gradient rounded" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative rounded overflow-hidden shadow-fire-lg">
                  <img
                    src="/assets/generated/gallery-slicing.dim_800x600.jpg"
                    alt="Pitmaster slicing brisket"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smoke-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-fire-orange font-semibold text-sm uppercase tracking-widest">
                      The Craft
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
                  Born From Smoke and Tradition
                </h2>
                <div className="space-y-4 text-cream/75 leading-relaxed">
                  <p>
                    Camacho's BBQ was born from a family tradition of
                    slow-smoking meats over oak and mesquite wood. Founded by
                    the Camacho family in the heart of Los Angeles, we've been
                    serving authentic Texas-style BBQ with a California soul
                    since 2010.
                  </p>
                  <p>
                    Every brisket, rack of ribs, and link of sausage is smoked
                    low and slow using techniques passed down through
                    generations. Our homemade BBQ sauces — from tangy to sweet
                    to fiery hot — are made fresh daily.
                  </p>
                  <p>
                    We believe great BBQ is more than food. It's a gathering, a
                    tradition, a labor of love. Come hungry. Leave happy.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-smoke-700/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl font-bold text-cream">
              What We Stand For
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 fire-gradient rounded" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 fire-gradient rounded flex items-center justify-center">
                  <value.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere photo */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded overflow-hidden shadow-fire-lg max-w-4xl mx-auto">
            <img
              src="/assets/generated/gallery-atmosphere.dim_800x600.jpg"
              alt="Camacho's BBQ interior"
              className="w-full h-80 sm:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-smoke-900/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-cream text-shadow-fire">
                Come Join the Family
              </h3>
              <p className="text-cream/80 mt-2">
                3456 E. Olympic Blvd, Los Angeles, CA 90023
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
