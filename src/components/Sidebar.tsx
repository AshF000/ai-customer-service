import { Home, Settings, MessageSquareDot, Tags, LogOut } from "lucide-react";
import { cn } from "../lib/utils";
import { useLocation, Link } from "react-router";
import { useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { label: "Dashboard", icon: <Home size={24} />, to: "/admin/dashboard" },
  {
    label: "Live Chats",
    icon: <MessageSquareDot size={24} />,
    to: "/admin/live-chats",
  },
  { label: "Tickets", icon: <Tags size={24} />, to: "/admin/tickets" },
  { label: "Settings", icon: <Settings size={24} />, to: "/admin/settings" },
];

const Sidebar = ({ className = "", ...props }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const { logout } = useAuth();

  return (
    <>
      {/* Sidebar (fixed left) */}
      <aside
        ref={sidebarRef}
        className={cn(
          "top-0 left-0 z-40 flex flex-col w-70 h-screen bg-white dark:bg-gray-900 border-r border-slate-300 dark:border-gray-500  gap-2 shadow-sm transition-transform duration-200",
          className,
        )}
        {...props}
      >
        <nav className="flex flex-col justify-between h-screen">
          {/* top bar */}
          <div
            className={`h-20 flex justify-between items-center px-4  bg-slate-500 dark:bg-gray-800`}
          >
            {/* user header */}
            <div className="flex gap-2 items-center max-w-50">
              {/* user image */}
              <div
                className={`w-10 aspect-square rounded-full overflow-hidden bg-gray-700 dark:border-2 dark:border-slate-400`}
              >
                <img
                  src="https://api.dicebear.com/9.x/notionists/svg?seed=Jocelyn"
                  alt="avatar"
                />
              </div>
              <p
                title={props.username}
                className={`text-lg text-white truncate`}
              >
                {props.username}
              </p>
            </div>
            {/* settings */}
            <ThemeToggle />
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto">
            {navItems.map(({ label, icon, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors",
                    active
                      ? "bg-slate-300 text-slate-900 dark:bg-slate-200 dark:text-slate-900"
                      : "text-gray-700 hover:bg-slate-200 dark:text-gray-200 dark:hover:bg-gray-800",
                  )}
                >
                  {icon}
                  <span className="text-lg">{label}</span>
                </Link>
              );
            })}
          </div>
          <div className="py-4 ">
            <button
              onClick={logout}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors",
                "text-gray-700 hover:bg-slate-100 dark:text-gray-200 dark:hover:bg-gray-800",
              )}
            >
              {<LogOut />}
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
