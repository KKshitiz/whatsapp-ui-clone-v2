import { menuIcon, searchIcon } from "../../../core/icons";
import styles from "./ChatWindowHeader.module.css";

const ChatWindowHeader = () => {
  return (
    <header id={styles["chat-window-header"]}>
      <img
        src="https://picsum.photos/id/103/50"
        alt=""
        className="avatar"
        id="profile-image"
      />
      <div id="active-chat-details">
        <h3>Friends 🤗</h3>
        <div className="info">You and 69 others</div>
      </div>
      <img src={searchIcon} alt="" className="icon" />
      <div className="dropdown">
        <img src={menuIcon} alt="" className="icon dropdown-button" />
        <div className="dropdown-content contact-menu">
          <a href="#">Contact info</a>
          <a href="#">Select messages</a>
          <a href="#">Close chat</a>
          <a href="#">Mute notifications</a>
          <a href="#">Disappearing messages</a>
          <a href="#">Clear messages</a>
          <a href="#">Delete chat</a>
          <a href="#">Report</a>
          <a href="#">Block</a>
        </div>
      </div>
    </header>
  );
};
export default ChatWindowHeader;
