import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LogOut from "./pages/LogOut";
import Candidates from "./components/Candidates";
import Companies from "./components/Companies";
import Offer from "./components/Offers";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/candidates",
        element: (
          <ProtectedRoute role="isAuth">
            <Candidates />
          </ProtectedRoute>
        ),
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/offers",
        element: <Offer />,
      },
    ],
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute role="notAuth">
        <Register />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  { path: "/login",
    element: <Login />,
    errorElement: <ErrorPage /> 
  },
  { path: "/logout",
    element: <LogOut />,
    errorElement: <ErrorPage /> 
  },
]);

export default router;
