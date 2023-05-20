const ChatWindowFooter = () => {
  return (
    <footer id="chat-window-footer">
      <img src="icons/emoji.svg" alt="" className="icon" />
      <img src="icons/attachment.svg" alt="" className="icon" />
      <input
        type="search"
        name="message"
        id="compose-chat-box"
        placeholder="Type a message"
        autoComplete="off"
      />
      <img src="icons/mic.svg" alt="" className="icon" />
    </footer>
  );
};
export default ChatWindowFooter;
