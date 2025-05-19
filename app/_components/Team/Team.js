import Image from "next/image";
import styles from "./Team.module.css";
import lawyer1 from "@/public/lawyer1.jpeg";
import lawyer2 from "@/public/lawyer2.jpeg";
import signature1 from "@/public/signature1.png";
import TeamObserver from "./teamObserver";

function Team() {
  return (
    <section className={styles.section_team}>
      <h2 className={styles.title}>Descoperă echipa noastră de experti</h2>
      <article className={styles.members}>
        {/* LAWYER ONE */}
        <div className={styles.member}>
          <div className={styles.member_container}>
            <h3 className={styles.member_name}>Name Lawyer One</h3>
            <div className={styles.text_wrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                luctus urna sed urna ultricies ac tempor dui sagittis. In
                condimentum facilisis porta. Sed nec diam eu diam mattis
                viverra. Nulla fringilla ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus luctus urna sed urna ultricies ac
                tempor dui sagittis. Orci ac euismod semper.
              </p>
              <p className={styles.quote}>
                &quot;Nulla condimentum facilisis porta fringilla orci ac
                euismod adipiscing elit.&quot;
              </p>
              <div className={styles.list}>
                <ul className={styles.text_list}>
                  <li>- Consectetur adipiscing elit.</li>
                  <li>- Nulla fringilla orci ac euismod.</li>
                  <li>- Vivamus luctus urna sed urna ultricies.</li>
                  <li>- Consectetur adipiscing elit.</li>
                  <li>- Nulla fringilla orci ac euismod.</li>
                  <li>- Vivamus luctus urna sed urna ultricies.</li>
                </ul>
                <div className={styles.signature}>
                  <Image fill src={signature1} alt="Signature" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lawyer_image}>
            <Image src={lawyer1} fill alt="layer"></Image>
          </div>
        </div>
        {/* LAWYER TWO */}
        <div className={styles.member}>
          <div className={styles.lawyer_image}>
            <Image src={lawyer2} fill alt="layer"></Image>
          </div>
          <div className={styles.member_container}>
            <h3
              className={`${styles.member_name} ${styles.member_text_align_right}`}
            >
              Name Lawyer Two
            </h3>
            <div className={styles.text_wrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                luctus urna sed urna ultricies ac tempor dui sagittis. In
                condimentum facilisis porta. Sed nec diam eu diam mattis
                viverra. Nulla fringilla ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus luctus urna sed urna ultricies ac
                tempor dui sagittis. Orci ac euismod semper.
              </p>
              <p className={styles.quote}>
                &quot;Nulla condimentum facilisis porta fringilla orci ac
                euismod adipiscing elit.&quot;
              </p>
              <div className={styles.list}>
                <div className={styles.signature}>
                  <Image fill src={signature1} alt="Signature" />
                </div>
                <ul className={styles.text_list}>
                  <li>- Consectetur adipiscing elit.</li>
                  <li>- Nulla fringilla orci ac euismod.</li>
                  <li>- Vivamus luctus urna sed urna ultricies.</li>
                  <li>- Consectetur adipiscing elit.</li>
                  <li>- Nulla fringilla orci ac euismod.</li>
                  <li>- Vivamus luctus urna sed urna ultricies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      <TeamObserver />
    </section>
  );
}

export default Team;
