"use client";

import { useEffect } from "react";
import styles from "./CardArea.module.css";

export default function CardObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  return null;
}
