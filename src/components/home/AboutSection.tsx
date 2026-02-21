import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { property1 } from "@/assets/properties";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LazyImage from "@/components/LazyImage";

const AboutSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const features = [
    "Quality construction & craftsmanship",
    "Innovative architectural designs",
    "Property sales & acquisitions",
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className={`relative order-2 lg:order-1 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <LazyImage
                src={property1}
                alt="Modern luxury interior"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10 hidden md:block" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="section-title mb-5">
              Expert Construction &{" "}
              <span className="text-primary">Architectural Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
              With over 15 years of experience in construction and architecture, 
              Sparktech Designs has been shaping Nigeria's built environment. 
              We specialize in building quality homes and commercial structures, 
              with property sales as an added service for our clients.
            </p>

            <ul className="space-y-3 mb-7">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-success" />
                  </span>
                  <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-primary">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
