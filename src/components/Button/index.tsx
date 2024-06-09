import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <button
      {...rest}
      className={`py-2 px-4 rounded-md bg-gray-500 text-white font-bold ${rest.className}`}
    >
      <div className="flex flex-row">
        {icon && (
          <div className="flex flex-1 justify-center items-center mr-2">
            {icon}
          </div>
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;
