import React from "react";
import { forwardRef } from "react";
//import { twMerge } from "tailwind-merge";

// placeholder:text-neutral-400
//border-transparent
const Input = React.forwardRef(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className="bg-background_color
        disabled:cursor-not-allowed 
            disabled:opacity-50
            focus:outline-none"
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
