import { motion } from "motion/react";

const images = [
  {
    src: "/assets/generated/gallery-atmosphere.dim_800x600.jpg",
    alt: "Restaurant atmosphere",
    span: "col-span-2",
  },
  {
    src: "/assets/generated/gallery-smoker.dim_800x600.jpg",
    alt: "The smoker pit",
  },
  {
    src: "/assets/generated/food-brisket.dim_600x450.jpg",
    alt: "Sliced brisket",
  },
  {
    src: "/assets/generated/gallery-slicing.dim_800x600.jpg",
    alt: "Pitmaster at work",
    span: "col-span-2",
  },
  { src: "/assets/generated/food-ribs.dim_600x450.jpg", alt: "Smoked ribs" },
  {
    src: "/assets/generated/gallery-feast.dim_800x600.jpg",
    alt: "BBQ feast",
    span: "col-span-2",
  },
  { src: "/assets/generated/food-bbq-plate.dim_600x450.jpg", alt: "BBQ plate" },
  {
    src: "/assets/generated/food-smoked-chicken.dim_600x450.jpg",
    alt: "Smoked chicken",
  },
  {
    src: "/assets/generated/food-sausage.dim_600x450.jpg",
    alt: "Sausage links",
  },
  {
    src: "/assets/generated/food-pulled-pork.dim_600x450.jpg",
    alt: "Pulled pork",
  },
  {
    src: "/assets/generated/food-mac-cheese.dim_600x450.jpg",
    alt: "Mac and cheese",
  },
];

export default function Gallery() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 text-center bg-smoke-700/30 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('/assets/generated/gallery-feast.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-smoke-900/80" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-fire-orange uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              From the Pit to the Table
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-cream">
              Gallery
            </h1>
            <div className="mt-4 mx-auto w-20 h-1 fire-gradient rounded" />
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {images.map((image) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden rounded group relative ${
                  image.span === "col-span-2" ? "col-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    image.span === "col-span-2"
                      ? "h-56 sm:h-72"
                      : "h-44 sm:h-60"
                  }`}
                />
                <div className="absolute inset-0 bg-smoke-900/0 group-hover:bg-smoke-900/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-cream text-sm font-semibold tracking-wide">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
