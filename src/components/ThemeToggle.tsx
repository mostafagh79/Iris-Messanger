import { toggleTheme } from "@/redux/appReducer";
import { BiMoon, BiSun } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Button from "./ui/button/Button";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => dispatch(toggleTheme())}
      className="group absolute top-4 left-4"
    >
      <BiSun className="rotate-0 w-6 h-6 scale-100 transition-all duration-300 dark:hover dark:-rotate-90 dark:scale-0 " />
      <BiMoon className="absolute w-6 h-6 rotate-90 scale-0 transition-all duration-300  dark:rotate-0 dark:scale-100 dark:group-hover:text-gray-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
