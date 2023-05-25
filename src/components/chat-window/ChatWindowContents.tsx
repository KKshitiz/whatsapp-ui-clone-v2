import ChatMessageGroup from "./ChatMessageGroup/ChatMessageGroup";
import DateStamp from "./DateStamp/DateStamp";

const ChatWindowContents = () => {
  return (
    <div id="chat-window-contents">
      <DateStamp />
      <ChatMessageGroup />
      <ChatMessageGroup />
      <ChatMessageGroup />
    </div>
  );
};
export default ChatWindowContents;
