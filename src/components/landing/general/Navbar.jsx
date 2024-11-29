import * as React from "react";
import { useState, useEffect } from "react";
import HorizonLogo from "@/assets/svg/horizon_logo.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  // const handleLinkClick = (index) => {
  //   setActiveLink(index);
  // };

  const NAVBAR_LINKS = [
    {
      id: 1,
      name: "Home",
      path: "/#home",
      sectionId: "home",
    },
    {
      id: 2,
      name: "About Us",
      path: "/#about",
      sectionId: "about",
    },
    {
      id: 3,
      name: "Services",
      path: "/#services",
      sectionId: "services",
    },
    {
      id: 4,
      name: "Portofolio",
      path: "/#portofolio",
      sectionId: "portofolio",
    },
    {
      id: 5,
      name: "Testimoni",
      path: "/#testimoni",
      sectionId: "testimoni",
    },
    {
      id: 6,
      name: "Contact",
      path: "/#contact",
      sectionId: "contact",
    },
  ];

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const activeIndex = NAVBAR_LINKS.findIndex(
            (link) => link.sectionId === sectionId
          );
          setActiveLink(activeIndex);

          console.log(`Section ${sectionId} is now active.`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px 40px 0px 40px",
      threshold: 0.4,
    });

    NAVBAR_LINKS.forEach((link) => {
      const section = document.getElementById(link.sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`bg-white w-full sticky top-0 py-6 flex justify-center items-center transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex border justify-between items-center lg:w-[958px] xl:w-[1152px]">
        <img
          src={HorizonLogo}
          className="lg:scale-95 xl:scale-100 lg:-ml-[5px] xl:ml-0"
          alt="Horizon Logo"
        />
        <div className="flex space-x-10">
          {NAVBAR_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={() => setActiveLink(index)}
              className={`lg:text-sm xl:text-base transition-transform duration-100 ${
                activeLink === index
                  ? "font-bold text-custom-blue scale-105 -translate-y-1 ease-linear"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="px-8 py-4 bg-transparent border border-black rounded-full font-medium lg:text-sm xl:text-base text-black hover:bg-custom-blue hover:text-white transition duration-200 ease-in-out"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
