import React, { useState, useEffect } from "react";
import "./cursor.css";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 200);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "nav" || e.target.tagName === "IMG") {
        setIsHidden(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === "nav" || e.target.tagName === "IMG") {
        setIsHidden(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicked ? "clicked" : ""} ${isHidden ? "hidden" : ""}`}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    ></div>
  );
};

export default CustomCursor;

