/* eslint-disable no-unused-vars */
import React from "react";

function button({
  children,
  type = "button",
  bgCollor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgCollor} ${textColor} `}
      {...props}
    >
      {children}
    </button>
  );
}

export default button;
