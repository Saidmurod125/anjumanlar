import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
const Admin = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
