import { Link } from "react-router-dom";
import styles from "./ChatTile.module.css";
type Props = {
  avatarImageUrl: string;
  name: string;
  lastInteractionTime: string;
  lastMessage: string;
  isUnread: boolean;
};

const ChatTile = (props: Props) => {
  return (
    <Link to="/chat">
      <div className={styles["chat-tile"]}>
        <img
          src={props.avatarImageUrl}
          alt=""
          className={styles["chat-tile-avatar"]}
        />
        <div className={styles["chat-tile-details"]}>
          <div className={styles["chat-tile-title"]}>
            <span>{props.name}</span>
            <span>{props.lastInteractionTime}</span>
          </div>
          <div className={styles["chat-tile-subtitle"]}>
            <span>{props.lastMessage}</span>
            <span className={styles["chat-tile-menu"]}>
              <img src="icons/pin.svg" alt="" className="pin" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ChatTile;
