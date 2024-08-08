import { Home, Camera, User, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <User className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Camera className="h-4 w-4" />,
    page: <Gallery />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
  },
];
