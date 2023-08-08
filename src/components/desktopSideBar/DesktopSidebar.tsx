import Button from "../ui/button/Button";
import { useState } from "react";
import { clsx } from "clsx";
import ThemeToggle from "../conversation/ThemeToggle";
import {
  BsBroadcastPin,
  BsFillPeopleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiFillCaretLeft } from "react-icons/ai";

const DesktopSidebar = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      className={clsx(
        "p-2 border-l dark:border-gray-500 items-center shadow-md relative transition-all duration-500 max-w-[80px]",
        { "!max-w-[0px] p-0": !show }
      )}
    >
      <div
        onClick={() => setShow(!show)}
        className="absolute top-1/2 left-0 bg-slate-400 h-12 w-5 rounded-l-lg grid place-content-center -translate-x-full -translate-y-1/2 cursor-pointer opacity-40 hover:opacity-100 transition"
      >
        <AiFillCaretLeft
          className={clsx("rotate-0 transition duration-500", {
            "rotate-180": !show,
          })}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-4">
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <BsFillPersonFill />
          </Button>
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <BsFillPeopleFill />
          </Button>
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <BsBroadcastPin />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <FiSettings />
          </Button>
          <Button variant="ghost" className="text-3xl w-14 h-14">
            <MdLogout />
          </Button>
          <ThemeToggle />
          <div className="w-full aspect-square bg-orange-400 rounded-full text-2xl grid place-content-center">
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
