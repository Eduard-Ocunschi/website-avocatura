import Image from "next/image";
import styles from "./TestimonialCard.module.css";

function TestimonialCard({ text, client, company, image }) {
  return (
    <div className={styles.container_item}>
      <div className={styles.aestetic_and_testimonial}>
        <div className={styles.aestetic_bar}>
          <div></div>
        </div>
        <div className={styles.client_testimonial}>
          <p className={styles.text}>{text}</p>
          <p className={styles.client}>{client}</p>
          <span className={styles.company}>{company}</span>
        </div>
      </div>

      <div className={styles.img_container}>
        <Image
          className={styles.client_img}
          src={image}
          width={200}
          height={200}
          alt="Imagine client"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
