import { MessageSquareMore } from "lucide-react";
import { useState } from "react";
import Chat from "../components/Chat";

const Main = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((o) => !o);
  };

  return (
    <div>
      <div className="w-14 flex justify-center items-center absolute right-6 bottom-6 aspect-square bg-red-200 rounded-full">
        <MessageSquareMore onClick={toggleOpen} />
        {open && (
          <div className="bg-blue-200 h-100 w-90 absolute bottom-15 right-2 rounded-xl overflow-hidden">
            <Chat emoji={false} voice={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
