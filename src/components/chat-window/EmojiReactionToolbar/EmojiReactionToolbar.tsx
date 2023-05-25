import styles from "./EmojiReactionToolbar.module.css";
const EmojiReactionToolbar = () => {
  return (
    <div className={styles["emoji-toolbar"]}>
      <img src="icons/emoji.svg" alt="" className="icon reaction-button" />
      <div className={styles["reaction-emoji-selector"]}>
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
  );
};
export default EmojiReactionToolbar;
