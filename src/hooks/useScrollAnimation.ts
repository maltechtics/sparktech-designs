import { useState, useEffect, useRef, RefObject } from "react";

export const useScrollAnimation = (threshold = 0.1): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother state updates
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin: "50px" // Trigger slightly before element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref as RefObject<HTMLElement>, isVisible];
};

export const useAnimatedCounter = (
  end: number,
  duration: number = 1500,
  start: number = 0,
  isVisible: boolean = false
): number => {
  const [count, setCount] = useState(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    let animationId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Simple easing
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (end - start) + start));

      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      }
    };

    animationId = requestAnimationFrame(step);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isVisible, end, duration, start]);

  return count;
};
