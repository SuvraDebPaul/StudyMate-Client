import DashNav from "./_components/DashNav";
import Sidebar from "./_components/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked
        />
        <main className="drawer-content">
          {/* Navbar */}
          <DashNav></DashNav>
          {/* Page content here */}
          <Outlet></Outlet>
        </main>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <aside className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-48">
            {/* Sidebar content here */}
            <Sidebar></Sidebar>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
