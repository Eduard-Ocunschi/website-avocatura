import styles from "./Map.module.css";

function Map() {
  return (
    <div className={styles.map_container}>
      <div className={styles.border_map}>
        <iframe
          className={styles.map_iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8059.239071738809!2d26.08244126628815!3d44.42554533161446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff427bee28c1%3A0x2b1089f802abaddc!2sPalatul%20Parlamentului!5e0!3m2!1sro!2sit!4v1747405380457!5m2!1sro!2sit"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Map;
