import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Team from "../Pages/Team/Team";
import Contact from "../Pages/Contact/Contact";
import ProjectDetails from "../Pages/projects/ProjectDetails";
// import ProjectDetails from "../Pages/projects/ProjectDetails";
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
