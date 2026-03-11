import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import Footer from "./components/Footer";
import MobileCallButton from "./components/MobileCallButton";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const queryClient = new QueryClient();

function RootLayout() {
  useEffect(() => {
    document.title = "Camacho's BBQ | Authentic Smoked BBQ in Los Angeles";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Camacho's BBQ serves authentic Texas-style smoked meats in Los Angeles. Brisket, ribs, pulled pork, and more. Order by phone today!";

    const ogTags: Record<string, string> = {
      "og:title": "Camacho's BBQ | Authentic Smoked BBQ in Los Angeles",
      "og:description":
        "Slow-smoked meats, homemade sauces, and bold Texas flavor — right here in LA.",
      "og:type": "restaurant",
      "og:image": "/assets/generated/hero-bbq-grill.dim_1600x900.jpg",
      "twitter:card": "summary_large_image",
      "twitter:title": "Camacho's BBQ | Authentic Smoked BBQ in Los Angeles",
      "twitter:description":
        "Slow-smoked meats, homemade sauces, and bold Texas flavor — right here in LA.",
    };
    for (const [property, content] of Object.entries(ogTags)) {
      let tag = document.querySelector(
        `meta[property='${property}'], meta[name='${property}']`,
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        if (property.startsWith("og:")) tag.setAttribute("property", property);
        else tag.setAttribute("name", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: Menu,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  menuRoute,
  aboutRoute,
  galleryRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
