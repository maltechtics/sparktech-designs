import { Home, Building2, Landmark } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PropertyTypesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const types = [
    { name: "Residential / Renovation", count: 77, icon: Home },
    { name: "Architecture Designs", count: 45, icon: Building2 },
    { name: "Event Centers", count: 12, icon: Landmark },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className={`text-center mb-8 sm:mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">What We Build</h2>
          <p className="section-subtitle">
            From residential homes to stunning architectural designs, we construct it all
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {types.map((type, index) => (
            <div
              key={type.name}
              className={`bg-card rounded-xl p-4 sm:p-5 text-center border border-border/50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <type.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-heading text-sm sm:text-base mb-0.5">
                {type.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {type.count}+ Projects
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;
