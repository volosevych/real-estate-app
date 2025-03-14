import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-(--red-active) text-white px-4.5 py-3 hover:bg-(--red-active)/80 cursor-pointer transition duration-300">
      {text}
    </button>
  );
};

export default Button;
