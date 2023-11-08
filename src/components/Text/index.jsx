import React from "react";

const sizeClasses = {
  txtInterSemiBold16WhiteA700: "font-inter font-semibold",
  txtInterRegular16Gray600: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtNewsreaderRegular64: "font-newsreader font-normal",
  txtInterSemiBold20Black900: "font-inter font-semibold",
  txtNewsreaderMedium32: "font-medium font-newsreader",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium italic",
  txtInterSemiBold16: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
