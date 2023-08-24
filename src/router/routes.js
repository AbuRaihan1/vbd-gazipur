import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
