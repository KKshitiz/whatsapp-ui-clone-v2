import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <main>
      <Sidebar />
      {/* <div> */}
      <Outlet />
      {/* </div> */}
      {/* <ChatWindow /> */}
    </main>
  );
}

export default App;
