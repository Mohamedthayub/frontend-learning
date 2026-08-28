import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard"

const DashboardLayout = () => {
    return (
        <div>
            <Dashboard/>
            <Outlet/>
        </div>
    )
}
export default DashboardLayout;