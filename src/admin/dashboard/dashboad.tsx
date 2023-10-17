import "./dashboad.css"
import SidebarAdmin from "../sidebar.admin/sidebar";

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <SidebarAdmin/>
            <div>
                <h1>quản lý doanh thu</h1>
            </div>

        </div>
    )
}