// import React, { useState, useEffect } from "react";
// import "./cursor.css";

// const CustomCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isClicked, setIsClicked] = useState(false);
//   const [isHidden, setIsHidden] = useState(false); 

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleClick = () => {
//       setIsClicked(true);
//       setTimeout(() => {
//         setIsClicked(false);
//       }, 200);
//     };

//     const handleMouseOver = (e) => {
//       if (e.target.tagName === "nav" || e.target.tagName === "IMG") {
//         setIsHidden(true);
//       }
//     };

//     const handleMouseOut = (e) => {
//       if (e.target.tagName === "nav" || e.target.tagName === "IMG") {
//         setIsHidden(false);
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("click", handleClick);
//     document.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("click", handleClick);
//       document.removeEventListener("mouseover", handleMouseOver);
//       document.removeEventListener("mouseout", handleMouseOut);
//     };
//   }, []);

//   return (
//     <div
//       className={`custom-cursor ${isClicked ? "clicked" : ""} ${isHidden ? "hidden" : ""}`}
//       style={{ left: cursorPosition.x, top: cursorPosition.y }}
//     ></div>
//   );
// };

// export default CustomCursor;

import React, { useEffect, useRef, useState, useCallback } from "react";
import './cursor.css';

const useEventListener = (eventName, handler, element = document) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
};

const AnimatedCursor = ({
  color = "220, 90, 90",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) => {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = clientY + "px";
    cursorInnerRef.current.style.left = clientX + "px";
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback((time) => {
    if (previousTimeRef.current !== undefined) {
      coords.x += (endX.current - coords.x) / 8;
      coords.y += (endY.current - coords.y) / 8;
      cursorOuterRef.current.style.top = coords.y + "px";
      cursorOuterRef.current.style.left = coords.x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, [coords]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", () => setIsActive(true));
  useEventListener("mouseup", () => setIsActive(false));
  useEventListener("mouseenter", () => setIsVisible(true));
  useEventListener("mouseleave", () => setIsVisible(false));

  useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `scale(${isActive ? innerScale : 1})`;
      cursorOuterRef.current.style.transform = `scale(${isActive ? outerScale : 1})`;
    }
  }, [isActive, innerScale, outerScale]);

  useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.opacity = isVisible ? 1 : 0;
      cursorOuterRef.current.style.opacity = isVisible ? 1 : 0;
    }
  }, [isVisible]);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className="animated-cursor-dot-outline"
        style={{
          width: outerSize,
          height: outerSize,
          backgroundColor: `rgba(${color}, ${outerAlpha})`,
        }}
      />
      <div
        ref={cursorInnerRef}
        className="animated-cursor-dot"
        style={{
          width: innerSize,
          height: innerSize,
          backgroundColor: `rgba(${color}, 1)`,
        }}
      />
    </>
  );
};

export default AnimatedCursor;