import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "../pages/about/about";
import { Contact } from "../pages/contact/contact";
import { Home } from "../pages/home/home";
import { Portfolio } from "../pages/portfolio";
import { Projects } from "../pages/projetos/projects";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Portfolio />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/projects",
        element:<Projects/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
