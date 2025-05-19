import styles from "./CardAbout.module.css";

function CardAbout({ title, text, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.info_title}>{title}</h4>
        <p className={styles.info_text}>{text}</p>
      </div>
      <div className={styles.container_icon}>{icon}</div>
    </div>
  );
}

export default CardAbout;
