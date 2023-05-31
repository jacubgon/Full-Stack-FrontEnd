import { Outlet } from "react-router-dom";
// import Side from '../components/SideBar'
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Layout() {
  return (
    <>
      <ResponsiveAppBar />
      <h2>Esto es Finder!</h2>
      <Outlet />
    </>
  );
}

export default Layout;
