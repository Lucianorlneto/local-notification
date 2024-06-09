import React, { useState } from "react";
import Button from "../Button";
import NotificationsDrawer from "../NotificationsDrawer";
import { IoIosNotifications } from "react-icons/io";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((value) => !value);

  return (
    <div className="p-8 flex bg-gray-900 h-20  items-center justify-start">
      <Button onClick={toggleDrawer} icon={<IoIosNotifications />}>
        Notifications
      </Button>
      <NotificationsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
