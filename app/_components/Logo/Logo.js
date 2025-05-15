import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <p className={styles.desktop}>MADALINA.ION</p>
      <p className={styles.mobile}>M.I</p>
      {/* <Link href="/">
            <Image
              src={logo}
              width={250}
              height={50}
              quality={100}
              alt="Logo Madalina Ion - Avocat"
            />
          </Link> */}
    </div>
  );
}

export default Logo;
