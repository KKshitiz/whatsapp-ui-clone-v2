import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatWindow from "../components/chat-window/ChatWindow/ChatWindow";
import Intro from "../components/sidebar/Intro/Intro";
import ErrorPage from "../core/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
