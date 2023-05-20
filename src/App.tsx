import "./App.css";
import ChatWindow from "./components/chat-window/ChatWindow";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <main>
      <Sidebar />
      <ChatWindow />
    </main>
  );
}

export default App;
