import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const smokedMeats: MenuItem[] = [
  {
    name: "Beef Brisket",
    description:
      "Hand-rubbed and smoked 14+ hours over white oak. Rich bark, deep smoke ring.",
    price: "$22",
    image: "/assets/generated/food-brisket.dim_600x450.jpg",
  },
  {
    name: "Pork Ribs",
    description:
      "St. Louis-cut ribs, smoked until fall-off-the-bone. Half or full rack.",
    price: "Half $18 / Full $32",
    image: "/assets/generated/food-ribs.dim_600x450.jpg",
  },
  {
    name: "Pulled Pork",
    description:
      "Boston butt slow-smoked for 12 hours, pulled and seasoned with house rub.",
    price: "$16",
    image: "/assets/generated/food-pulled-pork.dim_600x450.jpg",
  },
  {
    name: "Smoked Chicken",
    description:
      "Half chicken rubbed with our signature spice blend, smoked to golden perfection.",
    price: "$17",
    image: "/assets/generated/food-smoked-chicken.dim_600x450.jpg",
  },
  {
    name: "Jalapeño Sausage Link",
    description:
      "House-made jalapeño cheddar links, smoked and bursting with bold flavor.",
    price: "$8",
    image: "/assets/generated/food-sausage.dim_600x450.jpg",
  },
];

const bbqPlates: MenuItem[] = [
  {
    name: "Brisket Plate",
    description:
      "Sliced brisket served with your choice of 2 sides. Pickles and onions included.",
    price: "$24",
    image: "/assets/generated/food-brisket.dim_600x450.jpg",
  },
  {
    name: "Rib Plate",
    description: "Half rack of ribs with 2 sides. A Texas classic done right.",
    price: "$26",
    image: "/assets/generated/food-ribs.dim_600x450.jpg",
  },
  {
    name: "Mixed Plate",
    description:
      "Brisket, rib, and sausage — one of each. The full Camacho's experience with 2 sides.",
    price: "$28",
    image: "/assets/generated/food-bbq-plate.dim_600x450.jpg",
  },
];

const sandwiches: MenuItem[] = [
  {
    name: "Brisket Sandwich",
    description:
      "Sliced brisket piled high on a toasted brioche bun with pickles and onion.",
    price: "$14",
  },
  {
    name: "Pulled Pork Sandwich",
    description:
      "Tender pulled pork topped with creamy house coleslaw on a brioche bun.",
    price: "$12",
  },
  {
    name: "Sausage Sandwich",
    description:
      "Sliced jalapeño sausage link with mustard and pickled jalapeños on a toasted hoagie.",
    price: "$11",
  },
];

const sides: MenuItem[] = [
  {
    name: "Mac & Cheese",
    description: "Creamy three-cheese mac baked until golden and bubbly.",
    price: "$5",
    image: "/assets/generated/food-mac-cheese.dim_600x450.jpg",
  },
  {
    name: "Coleslaw",
    description:
      "Crisp, creamy, tangy house-made slaw. The perfect BBQ companion.",
    price: "$4",
  },
  {
    name: "Baked Beans",
    description:
      "Slow-cooked pinto beans with brisket bits and house BBQ sauce.",
    price: "$4",
  },
  {
    name: "Cornbread",
    description:
      "Cast iron skillet cornbread, golden and buttery. Made fresh daily.",
    price: "$3",
  },
  {
    name: "Jalapeño Corn",
    description: "Fire-roasted corn with jalapeños, cotija cheese, and lime.",
    price: "$4",
  },
];

const drinks: MenuItem[] = [
  {
    name: "Sweet Tea",
    description: "House-brewed Southern sweet tea, cold and refreshing.",
    price: "$3",
  },
  {
    name: "Lemonade",
    description: "Fresh-squeezed lemonade — sweet, tart, ice cold.",
    price: "$3",
  },
  {
    name: "Mexican Coke",
    description:
      "Classic Mexican Coca-Cola in a glass bottle, cane sugar sweetened.",
    price: "$4",
  },
  {
    name: "Agua Fresca",
    description:
      "Ask your server for today's flavor — made fresh from seasonal fruit.",
    price: "$4",
  },
  { name: "Water", description: "Still bottled water.", price: "$1" },
];

function MenuItemCard({
  item,
  showImage = false,
}: { item: MenuItem; showImage?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded overflow-hidden flex flex-col sm:flex-row gap-0 group"
    >
      {showImage && item.image && (
        <div className="sm:w-40 h-36 sm:h-auto flex-shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className="font-display text-lg font-bold text-cream">
              {item.name}
            </h3>
            <span className="text-fire-orange font-bold text-base whitespace-nowrap">
              {item.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-smoke-700/40 py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bbq-grill.dim_1600x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              Slow-Smoked Daily
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-cream">
              Our Menu
            </h1>
            <div className="mt-4 mx-auto w-20 h-1 fire-gradient rounded" />
            <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
              Everything smoked in-house using oak and mesquite wood. No
              shortcuts. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu tabs */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="smoked-meats">
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex-nowrap min-w-max mx-auto bg-smoke-700/50 border border-border p-1 gap-1 rounded">
                <TabsTrigger
                  value="smoked-meats"
                  data-ocid="menu.smoked_meats_tab"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs font-semibold"
                >
                  Smoked Meats
                </TabsTrigger>
                <TabsTrigger
                  value="bbq-plates"
                  data-ocid="menu.bbq_plates_tab"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs font-semibold"
                >
                  BBQ Plates
                </TabsTrigger>
                <TabsTrigger
                  value="sandwiches"
                  data-ocid="menu.sandwiches_tab"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs font-semibold"
                >
                  Sandwiches
                </TabsTrigger>
                <TabsTrigger
                  value="sides"
                  data-ocid="menu.sides_tab"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs font-semibold"
                >
                  Sides
                </TabsTrigger>
                <TabsTrigger
                  value="drinks"
                  data-ocid="menu.drinks_tab"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs font-semibold"
                >
                  Drinks
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="smoked-meats" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {smokedMeats.map((item) => (
                  <MenuItemCard key={item.name} item={item} showImage />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bbq-plates" className="mt-8">
              <p className="text-muted-foreground text-sm mb-6 italic">
                All BBQ plates include your choice of 2 sides.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bbqPlates.map((item) => (
                  <MenuItemCard key={item.name} item={item} showImage />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sandwiches" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sandwiches.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sides" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sides.map((item) => (
                  <MenuItemCard key={item.name} item={item} showImage />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drinks" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinks.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Order CTA */}
          <div className="mt-14 text-center bg-card border border-border rounded p-8">
            <h3 className="font-display text-2xl font-bold text-cream mb-3">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-6">
              Call us to place your order. We'll have it ready for pickup!
            </p>
            <a
              href="tel:+13235550100"
              className="inline-flex items-center gap-3 px-8 py-4 fire-gradient text-white font-bold text-lg rounded shadow-fire hover:opacity-90 transition-opacity"
            >
              📞 (323) 555-0100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
