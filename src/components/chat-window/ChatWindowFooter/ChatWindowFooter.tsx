import { attachmentIcon, emojiIcon, micIcon } from "../../../core/utils/icons";
import styles from "./ChatWindowFooter.module.css";

const ChatWindowFooter = () => {
  return (
    <footer id={styles["chat-window-footer"]}>
      <img src={emojiIcon} alt="" className="icon" />
      <img src={attachmentIcon} alt="" className="icon" />
      <input
        type="search"
        name="message"
        id={styles["compose-chat-box"]}
        placeholder="Type a message"
        autoComplete="off"
      />
      <button>
        <img src={micIcon} alt="" className="icon" />
      </button>
    </footer>
  );
};
export default ChatWindowFooter;
