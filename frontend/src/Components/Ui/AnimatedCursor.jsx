import React, { useEffect, useState } from "react";

function useEventListener(eventName, handler, element = document) {
  const savedHandler = React.useRef();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    if (!(element && element.addEventListener)) return;
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default function AnimatedCursor({
  color = "255, 255, 255",
  outerAlpha = 0.2,
  innerSize = 8,
  outerSize = 32,
  outerScale = 2.2,
  innerScale = 0.7,
  smoothing = 12,
}) {
  const cursorOuterRef = React.useRef();
  const cursorInnerRef = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(true);
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveClickable, setIsActiveClickable] = React.useState(false);
  let endX = React.useRef(0);
  let endY = React.useRef(0);

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });

    const el = document.elementFromPoint(clientX, clientY);

    // Hide cursor over .cursor-hide
    if (el?.closest(".cursor-hide")) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Activate hover effect over .cursor-hover
    if (el?.closest(".cursor-hover")) {
      setIsActive(true);
    } else {
      setIsActive(false);
      setIsActiveClickable(false);
    }

    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = clientY + "px";
      cursorInnerRef.current.style.left = clientX + "px";
    }

    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / smoothing;
        coords.y += (endY.current - coords.y) / smoothing;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = coords.y + "px";
          cursorOuterRef.current.style.left = coords.x + "px";
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [coords, smoothing]
  );

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  const onMouseDown = () => setIsActiveClickable(true);
  const onMouseUp = () => setIsActiveClickable(false);

  useEventListener("mousemove", onMouseMove, document);
  useEventListener("mousedown", onMouseDown, document);
  useEventListener("mouseup", onMouseUp, document);

  // Click scale effect
  React.useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      if (isActive || isActiveClickable) {
        cursorInnerRef.current.style.transform = `scale(${innerScale * 1.2})`;
        cursorOuterRef.current.style.transform = `scale(${outerScale * 1.2})`;
        cursorOuterRef.current.style.backgroundColor = `rgba(${color}, 0.15)`;
      } else {
        cursorInnerRef.current.style.transform = "scale(1)";
        cursorOuterRef.current.style.transform = "scale(1)";
        cursorOuterRef.current.style.backgroundColor = `rgba(${color}, ${outerAlpha})`;
      }
    }
  }, [innerScale, outerScale, isActive, isActiveClickable, color, outerAlpha]);

  // Show/hide cursor
  React.useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.opacity = isVisible ? 1 : 0;
      cursorOuterRef.current.style.opacity = isVisible ? 1 : 0;
    }
  }, [isVisible]);

  const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isTouchDevice);
  }, []);

  return isTouch;
};

const isTouchDevice = useIsTouchDevice();

  return (
    <>
      {/* Outer Cursor */}
      <div
        ref={cursorOuterRef}
        className={`${isTouchDevice ? `hidden` : `block`} pointer-events-none fixed z-[9999] rounded-full transition-opacity duration-150 transition-transform duration-300`}
        style={{
          width: outerSize,
          height: outerSize,
          marginLeft: -(outerSize / 2),
          marginTop: -(outerSize / 2),
          opacity: 0,
          top: 0,
          left: 0,
          mixBlendMode: "difference",
          backgroundColor: `rgba(${color}, ${outerAlpha})`,
        }}
      />
      {/* Inner Cursor */}
      <div
        ref={cursorInnerRef}
        className={` ${isTouchDevice ? `hidden` : `block`} pointer-events-none fixed z-[9999] rounded-full transition-opacity duration-150 transition-transform duration-300`}
        style={{
          width: innerSize,
          height: innerSize,
          marginLeft: -(innerSize / 2),
          marginTop: -(innerSize / 2),
          opacity: 0,
          top: 0,
          left: 0,
          mixBlendMode: "difference",
          backgroundColor: `rgb(${color})`,
        }}
      />
    </>
  );
}
