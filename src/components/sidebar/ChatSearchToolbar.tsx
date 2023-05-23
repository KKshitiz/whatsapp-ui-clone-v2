import { filterIcon } from "../../core/icons";

const ChatSearchToolbar = () => {
  return (
    <form id="search-toolbar">
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
