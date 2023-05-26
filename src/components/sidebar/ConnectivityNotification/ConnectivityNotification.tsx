import { warningIcon } from "../../../core/utils/icons";
import styles from "./ConnectivityNotfication.module.css";

const ConnectivityNotification = () => {
  return (
    <div className={styles["connectivity-notification"]}>
      <img src={warningIcon} alt="Offline warning" />
      <div>
        <div className={styles["connectivity-notification-title"]}>
          Computer not connected
        </div>
        <span>Make sure your computer has an active Internet connection</span>
      </div>
    </div>
  );
};
export default ConnectivityNotification;
