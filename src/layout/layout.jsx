import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const layout = () => {
  return (
    <div className="">
      <Header/>
      <Outlet />
    
    </div>
  );
};

export default layout;
