import Image from "next/image";
import styles from "./ContactCard.module.css";

function ContactCard({ icon, title, data1, data2, alt, href }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Image src={icon} alt={alt} width={35} height={35} />
          </a>
        ) : (
          <Image src={icon} alt={alt} width={35} height={35} />
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.info_title}>{title}</p>
        <div className={styles.info_data}>
          <span>{data1}</span>
          <span>{data2}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
