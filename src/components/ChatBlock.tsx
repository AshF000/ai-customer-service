import ThemeContext from "@/context/ThemeContext";
import { User } from "lucide-react";
import { useContext } from "react";

const ChatBlock = ({ text, sender }) => {
  const isAdmin = ["bot", "admin"].includes(sender);
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const textAlignment = isAdmin
    ? `${isLight ? "mr-auto bg-slate-100 text-gray-800 shadow-sm" : "mr-auto bg-gray-800 text-white shadow-sm"}`
    : `${isLight ? "ml-auto bg-slate-500 text-white shadow-md" : "ml-auto bg-violet-700 text-white shadow-md"}`;

  return (
    <div className="flex gap-3 items-end mb-2">
      {isAdmin && (
        <div
          className={`w-8 h-8 rounded-full flex justify-center items-center shadow-sm ${isLight ? "bg-slate-200" : "bg-gray-700"}`}
        >
          <User size={18} className={isLight ? "" : "text-white"} />
        </div>
      )}
      <div
        className={`max-w-md py-2 px-5 rounded-2xl text-base ${textAlignment}`}
        style={{ wordBreak: "break-word" }}
      >
        {text}
      </div>
      {!isAdmin && (
        <div
          className={`w-8 h-8 rounded-full flex justify-center items-center shadow-md ${isLight ? "bg-slate-500" : "bg-violet-700"}`}
        >
          <User size={18} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatBlock;
