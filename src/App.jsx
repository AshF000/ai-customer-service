import { Navigate, Route, Routes } from "react-router";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const HalfWidthLayout = ({ children }) => (
  <div className="w-1/2 h-screen mx-auto">{children}</div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/admin/dashboard"} />} />

      {/* <Route path="/" element={<Chat />} /> */}

      <Route
        path="/chat"
        element={
          <HalfWidthLayout>
            <Chat />
          </HalfWidthLayout>
        }
      />

      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<Navigate to={"/admin/login"} />} />
    </Routes>
  );
};

export default App;
