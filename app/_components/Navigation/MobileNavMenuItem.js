import Link from "next/link";
import styles from "./MobileNavMenuItem.module.css";
import { slide } from "./animation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function MobileNavMenuItem({ title, href, index, onClick }) {
  const pathname = usePathname();
  const cleanPathname = pathname.replace(/^\/(en|ro)(\/|$)/, "/");
  const isActive = href === cleanPathname;

  return (
    <motion.li
      role="none"
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.mobile_navigation_menu_item}
    >
      <Link
        role="menuitem"
        href={href}
        className={`${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {title}
      </Link>
    </motion.li>
  );
}

export default MobileNavMenuItem;
