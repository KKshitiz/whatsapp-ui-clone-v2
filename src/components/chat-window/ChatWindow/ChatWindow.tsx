import ChatWindowContents from "../ChatWindowContents";
import ChatWindowFooter from "../ChatWindowFooter/ChatWindowFooter";
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader";
import ScrollToTopButton from "../ScrollToTopButton";
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
