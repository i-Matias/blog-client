import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ReadMore from "./pages/ReadMore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/post/:id",
    element: <ReadMore />,
  },
]);

export default router;
