import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigate("/admin/login");
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar username={user?.email} />

      {/* Main content changes with route */}
      <main className="h-screen p-4 bg-slate-200 dark:bg-slate-900 flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
