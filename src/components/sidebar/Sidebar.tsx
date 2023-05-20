import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <SidebarHeader />
      <form id="search-toolbar">
        <input
          type="search"
          name=""
          id="search-input"
          placeholder="Search or start a new chat"
        />
        <img src="icons/filter.svg" alt="" className="icon" />
      </form>
      <div className="connectivity-notification">
        <img src="icons/warning.svg" alt="Offline warning" />
        <div>
          <div className="connectivity-notification-title">
            Computer not connected
          </div>
          <span>Make sure your computer has an active Internet connection</span>
        </div>
      </div>
      <section id="sidebar-contents">
        <div id="chats-list">
          <div className="chat-tile">
            <img
              src="https://picsum.photos/id/103/50"
              alt=""
              className="chat-tile-avatar"
            />
            <div className="chat-tile-details">
              <div className="chat-tile-title">
                <span>Friends 🤗</span>
                <span>Tuesday</span>
              </div>
              <div className="chat-tile-subtitle">
                <span>You: hey there! how are you?</span>
                <span className="chat-tile-menu">
                  <img src="icons/pin.svg" alt="" className="pin" />
                </span>
              </div>
            </div>
          </div>
          <div className="chat-tile">
            <img
              src="https://picsum.photos/id/104/50"
              alt=""
              className="chat-tile-avatar"
            />
            <div className="chat-tile-details">
              <div className="chat-tile-title">
                <span>Family</span>
                <span>10:34 Pm</span>
              </div>
              <div className="chat-tile-subtitle">
                <span>Papa: You gotta be kidding me</span>
                <span className="chat-tile-menu">
                  <img src="icons/pin.svg" alt="" className="pin" />
                </span>
              </div>
            </div>
          </div>
          <div className="chat-tile">
            <img
              src="https://picsum.photos/id/106/50"
              alt=""
              className="chat-tile-avatar"
            />
            <div className="chat-tile-details">
              <div className="chat-tile-title">
                <span>Amor 💖</span>
                <span>Saturday</span>
              </div>
              <div className="chat-tile-subtitle">
                <span>You do not understand what I'm </span>
                <span className="chat-tile-menu">
                  <img src="icons/pin.svg" alt="" className="pin" />
                </span>
              </div>
            </div>
          </div>
          <div className="chat-tile">
            <img
              src="https://picsum.photos/id/110/50"
              alt=""
              className="chat-tile-avatar"
            />
            <div className="chat-tile-details">
              <div className="chat-tile-title">
                <span>John</span>
                <span>Saturday</span>
              </div>
              <div className="chat-tile-subtitle">
                <span>Reply in group fast</span>
                <span className="chat-tile-menu">
                  <img src="icons/pin.svg" alt="" className="pin" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};
export default Sidebar;
