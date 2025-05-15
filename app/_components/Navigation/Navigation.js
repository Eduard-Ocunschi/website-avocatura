"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/logo.png";
import HamburgerButton from "./HamburgerButton";
import NavMenuItem from "./NavMenuItem";
import { menuSlide } from "./animation";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavMenuItem from "./MobileNavMenuItem";

const navMenuItems = [
  {
    title: "Acasa",
    href: "/",
  },
  {
    title: "Despre noi",
    href: "/despre",
  },
  {
    title: "Servicii",
    href: "/servicii",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [windowSize, setWindowSize] = useState(null);

  // useEffect(() => {
  //   // Resize handler to track window width
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };
  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, [windowSize]);

  // useEffect(() => {
  //   if (windowSize === null) return;
  //   if (windowSize < 1080 && isOpen === true) {
  //     setIsOpen(false);
  //   }
  //   if (windowSize < 1079 && isOpen === true) return;

  //   if (windowSize >= 1080) {
  //     setIsOpen(true);
  //   }
  // }, [windowSize]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={logo}
              width={250}
              height={50}
              quality={100}
              alt="Logo Madalina Ion - Avocat"
            />
          </Link>
        </div>

        <ul className={styles.navigation_menu}>
          {navMenuItems.map((item) => (
            <NavMenuItem href={item.href} title={item.title} key={item.title} />
          ))}
        </ul>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.ul
              role="menu"
              variants={menuSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.mobile_navigation_menu}
            >
              {navMenuItems.map((item, index) => (
                <MobileNavMenuItem
                  onClick={closeMenu}
                  index={index}
                  href={item.href}
                  title={item.title}
                  key={item.title}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <a href="tel:+4023432342342" className={styles.contact_button}>
          <FiPhone />
          <span>+40 234 323 42342</span>
        </a>

        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navigation;
