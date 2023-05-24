import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatWindow from "../components/chat-window/ChatWindow/ChatWindow";
import Intro from "../components/sidebar/Intro/Intro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Root error page</div>,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "/chat",
        element: <ChatWindow />,
      },
    ],
  },
]);

export default router;
