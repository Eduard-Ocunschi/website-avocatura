"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text, delayFactor }) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          initial={{ filter: "blur(8px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delayFactor * index }}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
}
