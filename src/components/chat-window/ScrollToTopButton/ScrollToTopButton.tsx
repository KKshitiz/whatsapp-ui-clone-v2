import { arrowDownIcon } from "../../../core/utils/icons";
import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  return (
    <button
      className={styles["scroll-to-top-button"]}
      aria-label="Scroll to top"
    >
      <img
        src={arrowDownIcon}
        alt="Arrow down icon"
        className={`icon ${styles["scroll-to-top-button-icon"]}`}
        height=""
      />
    </button>
  );
};
export default ScrollToTopButton;
