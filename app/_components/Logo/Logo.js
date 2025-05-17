import Link from "next/link";
import styles from "./Logo.module.css";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <div className={styles.logo}>
      {/* <p className={styles.desktop}>MADALINA.ION</p> */}
      <p className={styles.mobile}>M.I</p>
      <Link className={styles.logo_anchor} href="/">
        <Image
          className={styles.desktop}
          src={logo}
          width={190}
          height={40}
          quality={100}
          alt="Logo Madalina Ion - Avocat"
        />
      </Link>
    </div>
  );
}

export default Logo;
