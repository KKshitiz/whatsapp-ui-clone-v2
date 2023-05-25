import styles from "./DateStamp.module.css";
const DateStamp = () => {
  return (
    <div className={styles["datestamp-container"]}>
      <span className={styles["datestamp"]}>03/05/2023</span>
    </div>
  );
};
export default DateStamp;
