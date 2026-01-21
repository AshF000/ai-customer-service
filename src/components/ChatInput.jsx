import EmojiPicker, { Emoji } from "emoji-picker-react";
import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";
import React, { useState } from "react";

const ChatInput = ({ setChats }) => {
  const [inpVal, setInpVal] = useState("");
  const [emoji, setEmoji] = useState(false);

  const handleEnter = () => {
    if (!inpVal.trim()) return;
    setChats((p) => [...p, { sender: "user", text: inpVal.trim() }]);
    setInpVal("");
    setEmoji(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleEnter();
    }
  };

  const handleEmojiToggle = () => {
    setEmoji((p) => !p);
  };

  return (
    <div className="h-1/12 flex items-center gap-2 px-2 bg-slate-100">
      <div className="relative">
        <button className="chat-btn" onClick={handleEmojiToggle}>
          <Smile />
        </button>
        <div className="absolute bottom-full left-0 mt-2">
          <EmojiPicker
            open={emoji}
            emojiStyle="apple"
            onEmojiClick={(e) => {
              setInpVal((p) => p + e.emoji);
              console.log(e);
            }}
          />
        </div>
      </div>
      <textarea
        onChange={(e) => {
          setInpVal(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={inpVal}
        placeholder="Enter your text"
        className="grow resize-none py-2 px-4 text-lg bg-white rounded-xl border h-12"
      />
      <button onClick={handleEnter} className="chat-btn">
        <SendHorizontal />
      </button>
      <button className="chat-btn">
        <Paperclip />
      </button>
      <button className="chat-btn">
        <Mic />
      </button>
    </div>
  );
};

export default ChatInput;
