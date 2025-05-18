import styles from "./HamburgerButton.module.css";

const HamburgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={`${styles.btn} ${isOpen ? styles.active : styles.notActive}`}
      onClick={toggleMenu}
      aria-controls="mobile-navigation-menu"
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerButton;
