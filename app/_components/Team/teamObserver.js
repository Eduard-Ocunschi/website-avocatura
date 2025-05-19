"use client";

import { useEffect } from "react";
import styles from "./Team.module.css";

export default function TeamObserver() {
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
        threshold: 0.2,
      }
    );

    const members = document.querySelectorAll(`.${styles.member}`);
    members.forEach((member) => observer.observe(member));

    return () => observer.disconnect();
  }, []);

  return null;
}
