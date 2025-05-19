"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./WhatsAppButtonDraggable.module.css";

const phoneNumber = "1234567890";
const message = "Hello, I need legal assistance.";

export default function WhatsAppButtonDraggable() {
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;


  const [position, setPosition] = useState({ top: null, left: null });
  const dragging = useRef(false);
  const lastPos = useRef(null);
  const wasDragged = useRef(false);
  const buttonRef = useRef(null);

  const [isSnapping, setIsSnapping] = useState(false);

 
  useEffect(() => {
    if (!buttonRef.current) return;
    const btn = buttonRef.current;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const initialLeft = window.innerWidth - btnWidth - 24;
    const initialTop = window.innerHeight - btnHeight - 24;
    setPosition({ top: initialTop, left: initialLeft });
  }, []);

  const onDragStart = (x, y) => {
    dragging.current = true;
    lastPos.current = { x, y };
    wasDragged.current = false;
    setIsSnapping(false);
  };

  const onDragMove = (x, y) => {
    if (!dragging.current || !lastPos.current || !buttonRef.current) return;

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      wasDragged.current = true;
    }

    const btn = buttonRef.current;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 10;

    let newLeft = position.left + dx;
    let newTop = position.top + dy;

    
    newLeft = Math.min(
      Math.max(margin, newLeft),
      viewportWidth - btnWidth - margin
    );
    newTop = Math.min(
      Math.max(margin, newTop),
      viewportHeight - btnHeight - margin
    );

    setPosition({ top: newTop, left: newLeft });
    lastPos.current = { x, y };
  };

  const onDragEnd = () => {
    if (!buttonRef.current) return;

    const btn = buttonRef.current;
    const btnWidth = btn.offsetWidth;
    const viewportWidth = window.innerWidth;
    const margin = 10;

    
    const centerX = position.left + btnWidth / 2;
    const snapLeft =
      centerX > viewportWidth / 2
        ? viewportWidth - btnWidth - margin - 12 
        : margin;

    setIsSnapping(true);
    setPosition((pos) => ({
      top: pos.top,
      left: snapLeft,
    }));

    dragging.current = false;
    lastPos.current = null;
  };

  const handleClick = (e) => {
    if (wasDragged.current) {
      e.preventDefault();
      wasDragged.current = false;
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    onDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    onDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    onDragEnd();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    onDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    onDragMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    onDragEnd();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [position]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      className={styles.button}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        transition: isSnapping ? "left 0.3s ease" : "none",
      }}
      draggable={false}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16.001 2.004a13.993 13.993 0 0 0-12.3 20.788L2 30l7.354-1.641a13.996 13.996 0 1 0 6.647-26.355zM16 28a11.949 11.949 0 0 1-6.117-1.683l-.437-.26-4.354.973.923-4.237-.283-.437A11.948 11.948 0 1 1 28 16c0 6.617-5.383 12-12 12zm6.354-8.854c-.292-.146-1.729-.854-1.996-.951s-.46-.146-.655.146-.751.951-.923 1.146-.341.219-.633.073a9.822 9.822 0 0 1-2.897-1.783 10.919 10.919 0 0 1-2.022-2.5c-.212-.365-.023-.562.159-.73.164-.156.365-.406.548-.609.182-.202.242-.341.365-.567s.061-.426-.03-.572c-.088-.146-.655-1.58-.897-2.17-.237-.567-.479-.49-.655-.5-.173-.009-.373-.011-.572-.011s-.526.073-.8.365c-.274.292-1.044 1.019-1.044 2.479s1.069 2.865 1.219 3.065c.146.194 2.106 3.22 5.11 4.515.715.308 1.272.491 1.708.627.717.227 1.368.195 1.883.118.575-.085 1.729-.706 1.974-1.388.243-.682.243-1.267.17-1.388-.073-.121-.266-.194-.559-.341z" />
      </svg>
    </a>
  );
}
