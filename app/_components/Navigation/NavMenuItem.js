import Link from "next/link";
import styles from "./NavMenuItem.module.css";

import { usePathname } from "next/navigation";

function NavMenuItem({ title, href }) {
  const pathname = usePathname();
  const cleanPathname = pathname.replace(/^\/(en|ro)(\/|$)/, "/");
  const isActive = href === cleanPathname;

  return (
    <li role="none" className={styles.navigation_menu_item}>
      <Link
        role="menuitem"
        href={href}
        className={`${isActive ? styles.active : ""}`}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavMenuItem;
