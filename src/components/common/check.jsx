import React, { Component } from "react";
import cx from "classnames";

const Check = ({ isChecked }) => {
  console.log("render check icon", isChecked);

  return (
    <i
      className={cx({
        "text-center": true,
        "p-3": true,
        "far fa-2x": true,
        "fa-check-circle": isChecked,
        "fa-circle": !isChecked
      })}
    />
  );
};

export default Check;
