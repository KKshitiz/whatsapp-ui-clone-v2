import "./ChatMessage.css";
import "./ChatWindow.css";
import ChatWindowContents from "./ChatWindowContents";
import ChatWindowFooter from "./ChatWindowFooter";
import ChatWindowHeader from "./ChatWindowHeader";
import ScrollToTopButton from "./ScrollToTopButton";

const ChatWindow = () => {
  return (
    <section id="chat-window">
      <ChatWindowHeader />
      <ChatWindowContents />
      <ChatWindowFooter />
      <ScrollToTopButton />
    </section>
  );
};
export default ChatWindow;
