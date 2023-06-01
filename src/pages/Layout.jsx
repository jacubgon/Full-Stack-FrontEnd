import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Layout() {
  const [user, dispatch] = useAuth();
  console.log(user);
  dispatch({ type: "SET_USER", payload: user });

  return (
    <>
      <ResponsiveAppBar />
      {user.isAuth ? (
        <Link to="/logout">LogOut</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
          <br />
        </>
      )}

      <h2>Esto es Finder!</h2>
      <Outlet />
    </>
  );
}

export default Layout;
