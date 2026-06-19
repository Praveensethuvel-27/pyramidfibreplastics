import React, { useState, useEffect, useRef } from "react";

const Counter = ({ endValue, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(endValue, 10);
          if (isNaN(end)) return;

          const totalFrames = Math.round(duration / 16); // ~60fps
          let frame = 0;

          const countUp = () => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(end * progress);

            if (frame < totalFrames) {
              setCount(currentCount);
              requestAnimationFrame(countUp);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(countUp);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [endValue, duration]);

  return (
    <span ref={elementRef} className="font-bold tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
