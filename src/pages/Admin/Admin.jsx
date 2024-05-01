import { MuiTable } from "./anjumanlar/Table";
import Sidebar from "./Sidebar";
const Admin = () => {
  return (
    <div className="mt-40 flex justify-between">
      <Sidebar />
      <MuiTable />
    </div>
  );
};

export default Admin;
