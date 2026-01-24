import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const Admin = () => {
  const logged: boolean = true;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {logged && <Sidebar />}

      {/* Main content changes with route */}
      <main className="h-screen p-4 bg-slate-200 dark:bg-slate-900 flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
