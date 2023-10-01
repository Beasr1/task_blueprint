import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(({ type, disabled, ...props }, ref) => {
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
});

// Add a display name to your component
Input.displayName = "Input";

export default Input;
