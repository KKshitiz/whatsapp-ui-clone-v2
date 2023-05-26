import { filterIcon } from "../../../core/utils/icons";
import styles from "./ChatSearchToolbar.module.css";

const ChatSearchToolbar = () => {
  return (
    <form id={styles["search-toolbar"]}>
      <input
        type="search"
        name=""
        id="search-input"
        placeholder="Search or start a new chat"
      />
      <img src={filterIcon} alt="Unread chats filter" className="icon" />
    </form>
  );
};
export default ChatSearchToolbar;
