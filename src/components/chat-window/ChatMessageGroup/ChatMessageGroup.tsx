import ChatMessage from "../ChatMessage/ChatMessage";
import styles from "./ChatMessageGroup.module.css";

const ChatMessageGroup = () => {
  return (
    <div className={styles["chat-message-group"]}>
      <img
        src="https://picsum.photos/50"
        alt=""
        className={styles["chat-message-avatar"]}
      />
      <div className={styles["chat-messages"]}>
        <ChatMessage
          includeSender
          message="Hey guys, how are you?"
          time={new Date()}
        />
        <ChatMessage
          message="Are you up to some fun this weekend?"
          time={new Date()}
        />
        <ChatMessage
          message="I'm thinking of going to the beach"
          time={new Date()}
        />
      </div>
    </div>
  );
};
export default ChatMessageGroup;
