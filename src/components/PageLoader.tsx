import { useEffect, useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Logo */}
        <img
          src={logoIcon}
          alt="Sparktech Designs"
          className="w-8 h-8 object-contain animate-pulse"
        />
        
        {/* Progress bar */}
        <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-loading-bar" />
        </div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            transform: translateX(0);
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
            transform: translateX(0);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
