import { Phone } from "lucide-react";

const TopContactBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 sm:gap-6 py-2.5">
          {/* Label */}
          <span className="hidden sm:block text-sm font-medium opacity-90">
            Call us anytime
          </span>

          {/* Big phone number */}
          <a
            href="tel:+2347019057882"
            className="text-lg sm:text-2xl font-display font-bold tracking-wide hover:opacity-80 transition-opacity"
          >
            0701 905 7882
          </a>

          {/* Quick-dial button */}
          <a
            href="tel:+2347019057882"
            className="flex items-center gap-2 bg-primary-foreground text-primary text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-primary-foreground/90 transition-colors shrink-0"
          >
            <Phone size={14} className="shrink-0" />
            <span>Quick Dial</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
