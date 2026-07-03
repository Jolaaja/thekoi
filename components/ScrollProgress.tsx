"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percent);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        z-[99999]
        h-[3px]
        bg-yellow-500
        transition-all
        duration-150
      "
      style={{
        width: `${progress}%`,
      }}
    />
  );
}