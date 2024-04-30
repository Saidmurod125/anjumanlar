import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-sc bg dark:bg-gray-900">
      <Header/>
      <Outlet />
    </div>
  );
};

export default layout;
