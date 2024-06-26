import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-blue-200 dark:bg-slate-700 flex h-full justify-center items-center flex-col p-16">
      {children}
    </div>
  );
};

export default Layout;
