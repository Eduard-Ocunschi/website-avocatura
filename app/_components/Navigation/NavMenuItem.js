import Link from "next/link";
import styles from "./NavMenuItem.module.css";

import { usePathname } from "next/navigation";

function NavMenuItem({ title, href }) {
  const pathname = usePathname();
  return (
    <li role="none" className={styles.navigation_menu_item}>
      <Link
        role="menuitem"
        href={href}
        className={`${href === pathname ? styles.active : ""}`}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavMenuItem;
