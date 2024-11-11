import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";

export default function VehicleLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet></Outlet>
    </div>
  );
}
