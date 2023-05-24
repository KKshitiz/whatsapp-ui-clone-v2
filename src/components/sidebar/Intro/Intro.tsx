import { introImage } from "../../../core/images";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <img src={introImage} alt="" />
      <div className="">WhatsApp Web</div>
      <div>
        Send and receive messages without keeping your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </div>
    </div>
  );
};
export default Intro;
