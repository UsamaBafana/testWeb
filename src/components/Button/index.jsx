import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]" };
const variants = {
  fill: {
    light_green_900: "bg-light_green-900 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const sizes = { xs: "p-2.5", sm: "p-3.5", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_green_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_green_900", "white_A700"]),
};

export { Button };
