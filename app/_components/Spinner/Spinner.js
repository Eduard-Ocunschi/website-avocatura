import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loadWrapper}>
      <div className={styles.spinContainer}>
        <div className={styles.spin} id={styles.spinner1}></div>
        <div className={styles.spin} id={styles.spinner2}></div>
        <div className={styles.spin} id={styles.spinner3}></div>
        <div className={styles.spin} id={styles.spinner4}></div>
        <h1 className={styles.logo}>
          M I
          {/* <img
            className={styles.spinnerImg}
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg"
            alt="Placeholder Logo"
          /> */}
        </h1>
      </div>
    </div>
  );
};

export default Spinner;
