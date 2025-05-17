"use client";

import { useState } from "react";
import styles from "./Navigation.module.css";
import { FiPhone } from "react-icons/fi";

import HamburgerButton from "./HamburgerButton";
import NavMenuItem from "./NavMenuItem";
import { menuSlide } from "./animation";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavMenuItem from "./MobileNavMenuItem";
import Logo from "../Logo/Logo";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_container}>
        <Logo />

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
          <FiPhone className={styles.phone_icon} />
          <span>+40 234 323 423</span>
        </a>

        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navigation;
