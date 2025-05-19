// This is a pure Server Component
import Link from "next/link";
import styles from "./CardArea.module.css";
import CardObserver from "./cardObserver";

function CardArea({ icon, title, description }) {
  return (
    <>
      <article
        className={`${styles.card_container} card`}
        aria-label={`Descopera mai mult despre ${title}`}
      >
        {icon}
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link
          className={styles.more}
          href="/servicii"
          aria-label={`Citeste mai mult despre ${title}`}
        >
          Detalii &#8594;
        </Link>
      </article>

      <CardObserver />
    </>
  );
}

export default CardArea;
