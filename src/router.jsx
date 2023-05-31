import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Candidates from "./components/Candidates";
import Companies from "./components/Companies";
import Offer from "./components/Offers";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/offers",
        element: <Offer />,
      }
    ],
  },
  {path:"/register",
    element: <Register />,
  errorElement: <ErrorPage />,
}
]);

export default router;
