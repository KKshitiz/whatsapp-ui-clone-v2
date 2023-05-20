const SidebarHeader = () => {
  return (
    <header id="sidebar-header">
      <img
        src="https://picsum.photos/id/10/50"
        alt=""
        className="avatar"
        id="profile-image"
      />
      <div className="toolbar">
        <img src="icons/communities.svg" alt="" className="icon" />
        <img src="icons/status.svg" alt="" className="icon" />
        <img src="icons/new-chat.svg" alt="" className="icon" />
        <div className="dropdown">
          <img src="icons/menu.svg" alt="" className="icon dropdown-button" />
          <div className="dropdown-content">
            <a href="#">New group</a>
            <a href="#">New community</a>
            <a href="#">Archived</a>
            <a href="#">Starred messages</a>
            <a href="#">Select chats</a>
            <a href="#">Settings</a>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default SidebarHeader;
