import React from 'react';
import "./with-bg-button.scss"

export const WithBgButton = ({text, isBg, width = '88px'}) => {
  let classes = "initial-but";

  isBg ? classes += " with-bg-but" : null;

  return <button style={{width: width}} className={classes}>{text}</button>;
};
