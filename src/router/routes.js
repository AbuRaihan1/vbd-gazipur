import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Team from "../Pages/Team/Team";
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
      {
        path: "/projects",
        element: <AllProjects />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

export default router;
