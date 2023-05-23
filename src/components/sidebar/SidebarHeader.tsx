import {
  communitiesIcon,
  menuIcon,
  newChatIcon,
  statusIcon,
} from "../../core/icons";

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
        <img src={communitiesIcon} alt="" className="icon" />
        <img src={statusIcon} alt="" className="icon" />
        <img src={newChatIcon} alt="" className="icon" />
        <div className="dropdown">
          <img src={menuIcon} alt="" className="icon dropdown-button" />
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
