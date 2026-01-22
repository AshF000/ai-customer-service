import { useState, useRef, useEffect } from "react";
import ChatBlock from "../components/ChatBlock";
import ChatInput from "../components/ChatInput";
import ThemeToggle from "@/components/ThemeToggle";

const Chat = ({ name = "AI Customer Support" }) => {
  const [chats, setChats] = useState([]);
  const chatEndRef = useRef(null);

  const displayChats = chats.map((c, index) => (
    <ChatBlock key={index} text={c.text} sender={c.sender} />
  ));

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  return (
    <div
      className={`h-full w-full shadow-(--shadow) flex flex-col bg-slate-50 dark:bg-gray-900`}
    >
      {/* Top bar */}
      <div
        className={`h-16 flex justify-between items-center rounded-b-xl px-4  bg-slate-500 dark:bg-gray-800`}
      >
        <div className="flex gap-2 items-center">
          {/* user header */}
          <div
            className={`w-12 h-12 rounded-full overflow-hidden bg-slate-300 dark:bg-gray-700`}
          >
            <img
              className="w-full h-full object-cover"
              src="https://api.dicebear.com/9.x/toon-head/svg?seed=Emery"
              alt="avatar"
            />
          </div>
          <p className={`text-xl text-white dark:text-white`}>{name}</p>
        </div>
        {/* settings */}
        <ThemeToggle />
      </div>
      {/* Chat body */}
      <div
        className={`flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-gray-900`}
      >
        {displayChats}
        {/* empty div to control latest view */}
        <div ref={chatEndRef} />
      </div>

      {/* Input bar */}
      <ChatInput setChats={setChats} />
    </div>
  );
};

export default Chat;
