import { Navigate, Route, Routes } from "react-router";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import LiveChats from "./pages/LiveChats";
import { Settings, Tickets } from "lucide-react";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      {/* default route */}
      <Route path="/" element={<Navigate to={"/main"} />} />
      {/* nested admin routes */}
      <Route path="/admin" element={<Admin />}>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="live-chats" element={<LiveChats />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      {/* chatbot route */}
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default App;
