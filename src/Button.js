import React from "react";

const Button = ({ title, handleClick }) => {
   return (
      <button
         className="bg-slate-300 hover:bg-slate-500 transition-colors text-black px-3 py-1"
         onClick={handleClick}
      >
         {title}
      </button>
   );
};

export default Button;
