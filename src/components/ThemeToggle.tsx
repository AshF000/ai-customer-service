import { Toggle } from "@/components/ui/toggle";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";
  return (
    <Toggle
      className={`text-white rounded-full ${isLight ? `border-2` : `bg-black border border-white`}`}
      defaultPressed={theme === "dark"}
      onPressedChange={toggleTheme}
    >
      {isLight ? <Moon /> : <Sun />}
    </Toggle>
  );
};

export default ThemeToggle;
