import { Route, Routes } from "react-router";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <div className="w-1/2 h-screen mx-auto">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
