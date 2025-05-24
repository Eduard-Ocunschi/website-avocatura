"use client";

import { useRouter, usePathname } from "next/navigation";
import { FiGlobe } from "react-icons/fi";
import styles from "./LocaleSwitcher.module.css";
import { routing } from "@/app/i18n/routing";

export default function LocaleSwitcherClient({ locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // Replace the locale in the pathname (assuming /en/page, /ro/page, etc.)
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.replace(newPath);
  };

  return (
    <div className={styles.wrapper}>
      <FiGlobe className={styles.icon} />
      <select
        className={styles.select}
        value={locale}
        onChange={handleChange}
        aria-label="Select language"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
