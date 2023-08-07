import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { Home } from "../pages/Home";
import Root from "./root";

export const routesConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
