import ChatMessageGroup from "../ChatMessageGroup/ChatMessageGroup";
import DateStamp from "../DateStamp/DateStamp";

import styles from "./ChatWindowContents.module.css";

const ChatWindowContents = () => {
  return (
    <div id={styles["chat-window-contents"]}>
      <DateStamp />
      <ChatMessageGroup />
      <ChatMessageGroup />
      <ChatMessageGroup />
    </div>
  );
};
export default ChatWindowContents;
