import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100px",
  className = "",
  viewBox = "0 0 64 64"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >

	  <path className="st0" d="M122,469c130,0.3,260,0.7,390,1c-129.7,0-259.3,0-389,0c-0.3,43.7-0.7,87.3-1,131C122,557,122,513,122,469z"/>
	  <path className="st0" d="M518,606c-130.3-0.3-260.7-0.7-391-1c130,0,260,0,390,0c0.3-43.3,0.7-86.7,1-130C518,518.7,518,562.3,518,606z"/>
  </svg>
);

export default SVG;
