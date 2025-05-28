import Image from "next/image";
import styles from "./HeroContact.module.css";
import Form from "../Form/Form";
import lawyer1 from "@/public/bg2.jpeg";

function HeroContact() {
  return (
    <section className={styles.section_hero_contact}>
      <h2 className={styles.section_title}>Contacteaza-ne</h2>
      <div className={styles.container_contact}>
        <div className={styles.image_container}>
          <Image src={lawyer1} fill alt="img description" />
        </div>
        <div className={styles.form_wrapper}>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default HeroContact;
