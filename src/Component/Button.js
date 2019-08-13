import React from "react";
import "./Button.scss";
import classNames from "classnames";

// size : normal , medium, large
function Button({
  children,
  size,
  color,
  outline,
  fullwidth,
  className,
  ...rest
}) {
  console.log(rest);
  return (
    <button
      //classNames 패키지에서는 null , 0, undefined 에 대한 값은 처리하지 않는다.
      className={classNames(
        "Button",
        size,
        color,
        {
          outline,
          fullwidth // outline과 fullwidth는 bullean값으로 설정할것인데 이때 값이 false라면 표시가 되지 않는다.
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;
