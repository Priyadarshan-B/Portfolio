import React, { useState, useEffect } from "react";
import "./cursor.css";  

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false); 

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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick); 

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick); 
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicked ? "clicked" : ""}`} // Apply clicked class when clicked
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <div className="dot"></div>
    </div>
  );
};

export default CustomCursor;
