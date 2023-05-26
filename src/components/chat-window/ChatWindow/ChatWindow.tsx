import ChatWindowContents from "../ChatWindowContents/ChatWindowContents";
import ChatWindowFooter from "../ChatWindowFooter/ChatWindowFooter";
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

import styles from "./ChatWindow.module.css";

const ChatWindow = () => {
  return (
    <section id={styles["chat-window"]}>
      <ChatWindowHeader />
      <ChatWindowContents />
      <ChatWindowFooter />
      <ScrollToTopButton />
    </section>
  );
};
export default ChatWindow;
