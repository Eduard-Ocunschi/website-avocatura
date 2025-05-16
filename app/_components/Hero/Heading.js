import AnimatedText from "./AnimatedText";
import styles from "./Hero.module.css";

export default function ServerHero() {
  const headline = "Titlul Principal al Paginii";
  const subtitle = "Subtitlul sectiunii";

  return (
    <div className={styles.container_left}>
      <h1 className={styles.title}>
        <AnimatedText text={headline} delayFactor={0.04} />
      </h1>
      <h2 className={styles.subtitle}>
        <AnimatedText text={subtitle} delayFactor={0.07} />
      </h2>
    </div>
  );
}
