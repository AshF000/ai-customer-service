import { useState } from "react";
import ChatBlock from "../components/ChatBlock";
import ChatInput from "../components/ChatInput";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const displayChats = chats.map((c, index) => (
    <ChatBlock key={index} text={c.text} sender={c.sender} />
  ));

  return (
    <div className="h-full w-full shadow-(--shadow)  bg-slate-50">
      <div className="h-11/12 rounded-2xl flex flex-col justify-end p-4">
        {displayChats}
      </div>

      <ChatInput setChats={setChats} />
    </div>
  );
};

export default Chat;
