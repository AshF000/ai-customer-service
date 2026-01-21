import ThemeContext from "@/context/ThemeContext";
import EmojiPicker from "emoji-picker-react";
import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";
import { useContext, useState } from "react";

const ChatInput = ({ setChats }) => {
  const [inpVal, setInpVal] = useState("");
  const [emoji, setEmoji] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";
  const handleEnter = () => {
    if (!inpVal.trim()) return;
    setChats((p) => [...p, { sender: "admin", text: inpVal.trim() }]);
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
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm border ${
        isLight ? "bg-white border-slate-200" : "bg-gray-800 border-gray-700"
      }`}
    >
      <div className="relative">
        <button
          className={`chat-btn ${isLight ? "" : "bg-gray-700 text-white"}`}
          aria-label="Add emoji"
          onClick={handleEmojiToggle}
        >
          <Smile />
        </button>
        <div className="absolute bottom-full left-0 mt-2 z-10">
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
        placeholder="Type a message..."
        className={`grow resize-none py-2 px-4 text-base rounded-lg border focus:border-violet-400 focus:outline-none transition h-11 shadow-sm ${
          isLight
            ? "bg-slate-50 border-slate-400"
            : "bg-gray-900 text-white border-gray-600 border-2"
        }`}
      />
      <button
        onClick={handleEnter}
        className={`chat-btn ${isLight ? "" : "bg-gray-700 text-white"}`}
        aria-label="Send"
      >
        <SendHorizontal />
      </button>
      <button
        className={`chat-btn ${isLight ? "" : "bg-gray-700 text-white"}`}
        aria-label="Attach file"
      >
        <Paperclip />
      </button>
      <button
        className={`chat-btn ${isLight ? "" : "bg-gray-700 text-white"}`}
        aria-label="Voice input"
      >
        <Mic />
      </button>
    </div>
  );
};

export default ChatInput;
