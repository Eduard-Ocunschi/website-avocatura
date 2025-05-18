// This is a pure Server Component
import Link from "next/link";
import styles from "./CardArea.module.css";
import CardObserver from "./CardObserver";

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
/* ------------------- */
// import Link from "next/link";
// import Script from "next/script";
// import styles from "./CardArea.module.css";

// function CardArea({ icon, title, description }) {
//   return (
//     <>
//       <div className={`${styles.card_container} card`}>
//         {icon}
//         <p className={styles.card_title}>{title}</p>
//         <p className={styles.description}>{description}</p>
//         <Link className={styles.more} href="/servicii">
//           Detalii &#8594;
//         </Link>
//       </div>

//       <Script id="intersection-observer" strategy="afterInteractive">
//         {`
//           const observer = new IntersectionObserver((entries, observer) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 entry.target.classList.add("${styles.visible}");
//                 observer.unobserve(entry.target); // Stop observing once visible
//               }
//             });
//           }, {
//             threshold: 0.2
//           });

//           document.querySelectorAll(".card").forEach((card) => {
//             observer.observe(card);
//           });
//         `}
//       </Script>
//     </>
//   );
// }

// export default CardArea;

// import Link from "next/link";
// import styles from "./CardArea.module.css";

// function CardArea({ icon, title, description }) {
//   return (
//     <div className={styles.card_container}>
//       {icon}
//       <p className={styles.card_title}>{title}</p>
//       <p className={styles.description}>{description}</p>
//       <Link className={styles.more} href="/servicii">
//         Detalii &#8594;
//       </Link>
//     </div>
//   );
// }

// export default CardArea;
