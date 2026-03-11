import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone } from "lucide-react";
import { motion } from "motion/react";

const featuredDishes = [
  {
    name: "Beef Brisket",
    description:
      "Hand-rubbed and smoked for 14+ hours over oak wood. Legendary bark, perfect smoke ring.",
    image: "/assets/generated/food-brisket.dim_600x450.jpg",
    price: "From $22",
  },
  {
    name: "Pork Ribs",
    description:
      "St. Louis-cut ribs slathered in our signature sauce, smoked until fall-off-the-bone.",
    image: "/assets/generated/food-ribs.dim_600x450.jpg",
    price: "From $18",
  },
  {
    name: "Pulled Pork",
    description:
      "Slow-smoked pork shoulder, pulled fresh daily. Served with our tangy homemade slaw.",
    image: "/assets/generated/food-pulled-pork.dim_600x450.jpg",
    price: "From $16",
  },
  {
    name: "Smoked Chicken",
    description:
      "Whole halves rubbed with our secret spice blend, smoked to golden, juicy perfection.",
    image: "/assets/generated/food-smoked-chicken.dim_600x450.jpg",
    price: "From $17",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bbq-grill.dim_1600x900.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-smoke-900/65" />
        <div className="absolute inset-0 smoke-gradient" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-fire-orange font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Los Angeles, California
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-tight mb-6 text-shadow-fire">
              Authentic Smoked
              <br />
              <span className="text-fire-orange">BBQ in Los Angeles</span>
            </h1>
            <p className="text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-shadow-sm">
              Slow-smoked meats, homemade sauces, and bold Texas flavor — right
              here in LA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+13235550100"
                data-ocid="home.call_button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg uppercase tracking-wider rounded shadow-fire-lg hover:bg-gray-100 transition-colors"
              >
                <Phone size={22} />
                Call to Order
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-fire-orange text-fire-orange font-bold text-lg uppercase tracking-wider rounded hover:bg-fire-orange hover:text-smoke-900 transition-colors"
                >
                  View Our Menu
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-fire-orange uppercase tracking-[0.25em] text-sm font-semibold mb-3">
              Straight From the Pit
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream">
              Our Signature Smokes
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 fire-gradient rounded" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.slice(0, 3).map((dish, i) => (
              <motion.div
                key={dish.name}
                data-ocid={`home.featured.item.${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card rounded overflow-hidden border border-border group cursor-default"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl font-bold text-cream">
                      {dish.name}
                    </h3>
                    <span className="text-fire-orange font-bold text-sm ml-2 whitespace-nowrap">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3 border border-fire-orange text-fire-orange font-semibold uppercase tracking-wider rounded hover:bg-fire-orange hover:text-smoke-900 transition-colors"
            >
              Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-smoke-700/30 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.65 0.16 55) 0, oklch(0.65 0.16 55) 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-fire-orange uppercase tracking-[0.25em] text-sm font-semibold mb-3">
                Since 2010
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
                A Family Tradition
              </h2>
              <p className="text-cream/75 text-lg leading-relaxed mb-8">
                Camacho's BBQ was born from generations of slow-smoking
                tradition. Every brisket, rack of ribs, and link of sausage is
                made with the same love and craft that our family has passed
                down since day one. This isn't just food — it's our story.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 fire-gradient text-black font-bold uppercase tracking-wider rounded shadow-fire hover:opacity-90 transition-opacity"
              >
                Our Story →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to action banner */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
              Ready for Real BBQ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Call us to place an order or stop by — we're open 7 days a week.
            </p>
            <a
              href="tel:+13235550100"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-xl rounded shadow-fire-lg hover:bg-gray-100 transition-colors"
            >
              <Phone size={24} />
              (323) 555-0100
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
