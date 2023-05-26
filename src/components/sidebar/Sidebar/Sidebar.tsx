import ChatSearchToolbar from "../ChatSearchToolbar/ChatSearchToolbar";
import ChatTile from "../ChatTile/ChatTile";
// import "./ChatTile.css";
import ConnectivityNotification from "../ConnectivityNotification/ConnectivityNotification";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside id={styles.sidebar}>
      <SidebarHeader />
      <ChatSearchToolbar />
      <ConnectivityNotification />
      <section id={styles["sidebar-contents"]}>
        <div id={styles["chats-list"]}>
          <ChatTile
            avatarImageUrl="https://picsum.photos/id/103/50"
            name="Friends 🤗"
            lastInteractionTime="Tuesday"
            lastMessage={"You: hey there! how are you?"}
            isUnread={false}
          />
          <ChatTile
            avatarImageUrl="https://picsum.photos/id/104/50"
            name="Family"
            lastInteractionTime="10:35pm"
            lastMessage={"Papa: You gotta be kidding me"}
            isUnread={false}
          />
          <ChatTile
            avatarImageUrl="https://picsum.photos/id/106/50"
            name="Amor 💖"
            lastInteractionTime="Saturday"
            lastMessage={"You do not understand what I'm "}
            isUnread={false}
          />
          <ChatTile
            avatarImageUrl="https://picsum.photos/id/110/50"
            name="John"
            lastInteractionTime="Saturday"
            lastMessage={"Reply in group fast"}
            isUnread={false}
          />
        </div>
      </section>
    </aside>
  );
};
export default Sidebar;
