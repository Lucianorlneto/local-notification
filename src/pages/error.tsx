import React from "react";
import { MdWarning } from "react-icons/md";

const Error: React.FC = () => {
  return (
    <div className="flex w-screen h-screen bg-slate-700 justify-center items-center flex-col">
      <MdWarning size={"30%"} color="white" />
      <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>
    </div>
  );
};

export default Error;
