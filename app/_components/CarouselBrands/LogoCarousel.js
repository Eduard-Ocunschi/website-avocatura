import styles from "./LogoCarousel.module.css";

const logos = [
  { id: 1, src: "/slider1_1.png", alt: "Brand Logo 1" },
  { id: 2, src: "/slider1_2.png", alt: "Brand Logo 2" },
  { id: 3, src: "/slider1_3.png", alt: "Brand Logo 3" },
  { id: 4, src: "/slider1_4.png", alt: "Brand Logo 4" },
  { id: 5, src: "/slider1_5.png", alt: "Brand Logo 5" },
  { id: 6, src: "/slider1_6.png", alt: "Brand Logo 6" },
  { id: 7, src: "/slider1_7.png", alt: "Brand Logo 7" },
  { id: 8, src: "/slider1_8.png", alt: "Brand Logo 8" },
  { id: 9, src: "/slider1_9.png", alt: "Brand Logo 9" },
  { id: 10, src: "/slider1_10.png", alt: "Brand Logo 10" },
];

const extendedLogos = [...logos, ...logos, ...logos, ...logos];

const LogoCarousel = () => {
  return (
    <section className={styles.section_carousel}>
      <div className={styles.carousel_wrapper}>
        <ul className={styles.logo_list}>
          {extendedLogos.map((logo, index) => (
            <li key={index} className={styles.logo_item}>
              <img src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoCarousel;
