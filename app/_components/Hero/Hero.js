import Image from "next/image";
import styles from "./Hero.module.css";
import bg2 from "@/public/bg2.jpeg";
import bg4 from "@/public/bg4.png";
import bg5 from "@/public/bg5.jpg";

import { Montserrat } from "next/font/google";
import { Libre_Bodoni } from "next/font/google";
import Form from "../Form/Form";
import { useTranslations } from "next-intl";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  display: "swap",
});

function Hero({ t }) {
  return (
    <section className={styles.section_hero}>
      <Image
        src={bg5}
        fill
        priority
        alt="Schimba mai tarziu descrierea!!!!!"
        className={styles.background_img_1}
      />
      {/* <Image
        src={bg3}
        priority
        alt="Schimba mai tarziu descrierea!!!!!"
        className={styles.background_img_2}
      /> */}
      <div className={styles.overlay}></div>

      <div className={styles.container_main}>
        <div className={`${styles.container_left} ${montserrat.className}`}>
          <h1 className={styles.title}>{t("title")}</h1>
          <h2 className={styles.subtitle}>{t("subtitle")}</h2>
          <ul className={styles.list}>
            <li className={styles.list_item}>&#9472; {t("list1")}</li>
            <li className={styles.list_item}>&#9472; {t("list2")}</li>
            <li className={styles.list_item}>&#9472; {t("list3")}</li>
          </ul>
        </div>
        <div className={styles.container_right}>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Hero;
