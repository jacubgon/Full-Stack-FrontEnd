import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./pages/Layout";
import RegisterCandidates from "./pages/RegisterCandidates";
import RegisterCompanies from "./pages/RegisterCompanies";
import Login from "./pages/Login";
import LogOut from "./pages/LogOut";
import Candidates from "./components/Candidates";
import Companies from "./components/Companies";
import Offer from "./components/Offers";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import CreateOffer from "./pages/CreateOffer";
import UpdateOffer from "./pages/UpdateOffer";

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
        children: [
          {
            path: "/offers",
            element: <Offer />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/offers/new",
            element: (
              <ProtectedRoute role="company">
                <CreateOffer />
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: "/offers/update/:offerId",
            element: <UpdateOffer />,
            errorElement: <ErrorPage />,
          }
        ],
      },
      {
        path: "/registerCandidates",
        element: (
          <ProtectedRoute role="notAuth">
            <RegisterCandidates />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/registerCompanies",
        element: (
          <ProtectedRoute role="notAuth">
            <RegisterCompanies />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
      { path: "/logout", element: <LogOut />, errorElement: <ErrorPage /> },
    ],
  },
]);

export default router;
