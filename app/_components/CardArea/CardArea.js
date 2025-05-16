import Link from "next/link";
import styles from "./CardArea.module.css";

function CardArea({ icon, title, description }) {
  return (
    <div className={styles.card_container}>
      {icon}
      <p className={styles.card_title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Link className={styles.more} href="/servicii">
        Detalii &#8594;
      </Link>
    </div>
  );
}

export default CardArea;
