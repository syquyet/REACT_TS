import About from "../pages/About";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Team from "../pages/Team";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <Home/>,
  },
  {
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    title: "Clients",
    path: "/clients",
    element: <Clients />,
  },
  {
    title: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    title: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    title: "Team",
    path: "/team",
    element: <Team />,
  },
];
