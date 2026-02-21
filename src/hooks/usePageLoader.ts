import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate minimum loading time for smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading;
};
