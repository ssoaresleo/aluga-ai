import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../pages/_layout/app";
import { Home } from "../pages/app/home";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
