import Image from "next/image";
import styles from "./Hero.module.css";
import bg from "@/public/bg.png";
import { Montserrat } from "next/font/google";
import { Libre_Bodoni } from "next/font/google";
import Form from "../Form/Form";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  display: "swap",
});

function Hero() {
  return (
    <section className={styles.section_hero}>
      <Image
        src={bg}
        fill
        alt="Schimba mai tarziu descrierea!!!!!"
        className={styles.background_img}
      />
      <div className={styles.overlay}></div>

      <div className={styles.container_main}>
        <div className={`${styles.container_left} ${montserrat.className}`}>
          <h1 className={styles.title}>Titlul Principal al Paginii</h1>
          <h2 className={styles.subtitle}>Subtitlul sectiunii</h2>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              &#9472; Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </li>
            <li className={styles.list_item}>
              &#9472; Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              do eiusmod.
            </li>
            <li className={styles.list_item}>
              &#9472; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
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
