type Props = {
  avatarImageUrl: string;
  name: string;
  lastInteractionTime: string;
  lastMessage: string;
  isUnread: boolean;
};

const ChatTile = (props: Props) => {
  return (
    <div className="chat-tile">
      <img src={props.avatarImageUrl} alt="" className="chat-tile-avatar" />
      <div className="chat-tile-details">
        <div className="chat-tile-title">
          <span>{props.name}</span>
          <span>{props.lastInteractionTime}</span>
        </div>
        <div className="chat-tile-subtitle">
          <span>{props.lastMessage}</span>
          <span className="chat-tile-menu">
            <img src="icons/pin.svg" alt="" className="pin" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default ChatTile;
