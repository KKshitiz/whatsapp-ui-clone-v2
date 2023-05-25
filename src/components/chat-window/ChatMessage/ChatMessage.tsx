import EmojiReactionToolbar from "../EmojiReactionToolbar/EmojiReactionToolbar";
import styles from "./ChatMessage.module.css";

type Props = {
  includeSender?: boolean;
  message: string;
  time: Date;
};

const ChatMessage = (props: Props) => {
  const { includeSender = false, message, time } = props;

  return (
    <div className={styles["chat-message-container"]}>
      <div
        className={`${styles["chat-message"]} ${styles["chat-message-first"]}`}
      >
        {includeSender && (
          <div className={styles["chat-message-sender"]}>Kshitiz</div>
        )}
        {message}
        <span className={styles["chat-message-time"]}>
          {time.toTimeString()}
        </span>
      </div>
      <EmojiReactionToolbar />
    </div>
  );
};
export default ChatMessage;
