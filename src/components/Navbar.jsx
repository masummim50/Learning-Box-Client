import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ theme, setTheme }) => {
  const logo = "Learning Box";
  let photo =
    "https://lh3.googleusercontent.com/a/AGNmyxaIxfqrnBBSYGgWCOz26_9T_KL7-F3QkAMoFaQa=s96-c";
  let red = "#50d71e";
  return (
    <nav className="flex justify-between dark:bg-slate-800 bg-slate-200 dark:shadow-slate-600 py-4 shadow-md shadow-purple-300 fixed z-10 top-0 w-full items-center ">
      <div className="logo text-white">{logo}</div>
      <div className="others flex items-center gap-5">

        {
            theme === ""&& <div
          className="cursor-pointer icon border-slate-800 border p-2 rounded-[50%] text-slate-800"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonStarsFill className="h-[20px] w-[20px] rounded-[50%]" />
        </div>
        }
        
        {
            theme === 'dark' && <div
          className="cursor-pointer icon border-white border p-2 rounded-[50%] text-white"
          onClick={() => setTheme("")}
        >
          <BsFillSunFill className="h-[20px] w-[20px] rounded-[50%]" />
        </div>
        }

        

        <div className={`profile h-[40px] w-[40px] mr-5 border dark:border-white border-slate-800 p-2 rounded-[50%]`}>
          <img className="h-full rounded-[50%]" src={photo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
