const ChatSearchToolbar = () => {
  return (
    <form id="search-toolbar">
      <input
        type="search"
        name=""
        id="search-input"
        placeholder="Search or start a new chat"
      />
      <img src="icons/filter.svg" alt="" className="icon" />
    </form>
  );
};
export default ChatSearchToolbar;
