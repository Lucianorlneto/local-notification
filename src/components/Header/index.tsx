import React, { useCallback, useState } from "react";
import Button from "../Button";
import NotificationsDrawer from "../NotificationsDrawer";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function getDefaultTheme() {
  if (document.documentElement.classList.contains("dark")) return "dark";

  return "light";
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(getDefaultTheme());

  const toggleDrawer = () => setIsOpen((value) => !value);

  const toggleTheme = useCallback(() => {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  }, []);

  return (
    <div className="p-8 flex bg-blue-700 dark:bg-slate-900 h-20  items-center justify-between ease-in-out duration-100">
      <div>
        <Link className="text-gray-200 text-2xl font-semibold" to={"/"}>
          Home
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Button
          className="mr-4"
          data-cy="notifications-button"
          onClick={toggleDrawer}
          icon={<IoIosNotifications />}
        >
          Notifications
        </Button>
        {/* <div className="bg-blue-600 rounded-full p-1">
          <MdDarkMode className="fill-current text-slate-200" size={30} />
        </div> */}
        <div
          onClick={toggleTheme}
          className="bg-blue-500 rounded-full p-1 cursor-pointer dark:bg-slate-600 ease-in-out duration-200"
        >
          {theme === "dark" ? (
            <MdDarkMode className="fill-current text-slate-200" size={30} />
          ) : (
            <MdLightMode className="fill-current text-slate-200" size={30} />
          )}
        </div>
      </div>
      <NotificationsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
