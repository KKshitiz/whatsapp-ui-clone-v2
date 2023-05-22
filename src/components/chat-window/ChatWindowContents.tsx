const ChatWindowContents = () => {
  return (
    <div id="chat-window-contents">
      <div className="datestamp-container">
        <span className="datestamp">03/05/2023</span>
      </div>
      <div className="chat-message-group">
        <img
          src="https://picsum.photos/50"
          alt=""
          className="chat-message-avatar"
        />
        <div className="chat-messages">
          <div className="chat-message-container">
            <div className="chat-message chat-message-first">
              <div className="chat-message-sender">Kshitiz</div>
              Hey there, how are you doing?
              <span className="chat-message-time">7:22 am</span>
            </div>
            <div className="emoji-toolbar">
              <img
                src="icons/emoji.svg"
                alt=""
                className="icon reaction-button"
              />
              <div className="reaction-emoji-selector">
                <a href="#" className="icon">
                  👍🏻
                </a>
                <a href="" className="icon">
                  💖
                </a>
                <a href="" className="icon">
                  😂
                </a>
                <a href="" className="icon"></a>
                <a href="" className="icon"></a>
                <a href="" className="icon"></a>
              </div>
            </div>
          </div>
          <div className="chat-message">
            Are you up to some fun this weekend?
            <span className="chat-message-time">7:22 am</span>
          </div>
          <div className="chat-message">
            I'm thinking of going to the beach
            <span className="chat-message-time">7:23 am</span>
          </div>
        </div>
      </div>
      <div className="chat-message-group">
        <img
          src="https://picsum.photos/id/102/50"
          alt=""
          className="chat-message-avatar"
        />
        <div className="chat-messages">
          <div className="chat-message-container">
            <div className="chat-message chat-message-first">
              <div className="chat-message-sender">John</div>
              Sure man
              <span className="chat-message-time">7:30 am</span>
            </div>
            <div className="emoji-toolbar">
              <img
                src="icons/emoji.svg"
                alt=""
                className="icon reaction-button"
              />
              <div className="reaction-emoji-selector">
                <a href="#" className="icon">
                  👍🏻
                </a>
                <a href="" className="icon">
                  💖
                </a>
                <a href="" className="icon">
                  😂
                </a>
                <a href="" className="icon"></a>
                <a href="" className="icon"></a>
                <a href="" className="icon"></a>
              </div>
            </div>
          </div>
          <div className="chat-message">
            When are you free? Let's meet at the cafe first.
            <span className="chat-message-time">7:30 am</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatWindowContents;
