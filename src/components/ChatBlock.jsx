import { Emoji } from "emoji-picker-react";
import { User } from "lucide-react";
import React from "react";

const ChatBlock = ({ text, sender }) => {
  const isAdmin = ["bot", "admin"].includes(sender);

  const textAlignment = isAdmin ? "mr-auto bg-gray-200" : "ml-auto bg-cyan-100";

  return (
    <div className="flex gap-2 items-center">
      {isAdmin && (
        <div className="w-7 h-7 bg-gray-200 rounded-full flex justify-center items-center">
          <User size={18} />
        </div>
      )}
      <div
        className={`max-w-xs py-2 wrap-break-word whitespace-normal px-4 rounded-xl my-1 ${textAlignment}`}
      >
        {text}
      </div>

      {!isAdmin && (
        <div className="w-7 h-7 bg-cyan-100 rounded-full flex justify-center items-center">
          <User size={18} />
        </div>
      )}
    </div>
  );
};

export default ChatBlock;
