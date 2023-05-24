import { arrowDownIcon } from "../../core/utils/icons";

const ScrollToTopButton = () => {
  return (
    <button className="scroll-to-top-button" aria-label="Scroll to top">
      <img
        src={arrowDownIcon}
        alt="Arrow down icon"
        className="icon scroll-to-top-button-icon"
        height=""
      />
    </button>
  );
};
export default ScrollToTopButton;
