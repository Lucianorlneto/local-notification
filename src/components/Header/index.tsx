import React, { useState } from "react";
import Button from "../Button";
import NotificationsDrawer from "../NotificationsDrawer";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((value) => !value);

  return (
    <div className="p-8 flex bg-gray-900 h-20  items-center justify-between">
      <div>
        <Link className="text-gray-200 text-2xl font-semibold" to={"/"}>
          Home
        </Link>
      </div>
      <Button
        className=""
        data-cy="notifications-button"
        onClick={toggleDrawer}
        icon={<IoIosNotifications />}
      >
        Notifications
      </Button>
      <NotificationsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
