import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { TbBrandInstagram } from "react-icons/tb";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import CookieBanner from "../CookieBanner/CookieBanner";

function Footer() {
  return (
    <footer className={styles.footer}>
      <CookieBanner />
      <div className={styles.footer_info}>
        <div className={styles.top_container}>
          <div className={styles.info_column}>
            <p className={styles.column_title}>OTHER LINKS</p>
            <ul className={styles.column_list}>
              <li>
                <Link href="#">Termeni si Conditii</Link>
              </li>
              <li>
                <Link href="#">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_logo}>
            <Image
              src="/logo.png"
              alt="RAI Legal & Tax Logo"
              width={120}
              height={40}
            />
          </div>
          <div className={styles.info_column}>
            <p className={styles.column_title}>CONTACT INFO</p>
            <address className={styles.column_list}>
              <p>Bd. Lapusneanu, nr.44</p>

              <p>
                <a href="tel:+40732887929">+40 732 887 929</a>
              </p>

              <p>
                <a href="mailto:test@test.com">test@test.com</a>
              </p>
            </address>
          </div>
        </div>

        <ul className={styles.social_list}>
          <li>
            <TbBrandInstagram className={styles.social_icon} />
          </li>
          <li>
            <GrFacebookOption className={styles.social_icon} />
          </li>
          <li>
            <ImLinkedin2 className={styles.social_icon} />
          </li>
        </ul>

        <div className={styles.copyright}>
          <p>© Copyright © 2025 Madalina Ion Legal - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
