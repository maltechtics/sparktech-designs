import { Building2, Hammer, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { service1 as constructionImage } from "@/assets/services";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";
import LazyImage from "@/components/LazyImage";

const ServicesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: Hammer,
      title: "Construction & Building",
      description: "Expert construction of residential and commercial buildings. From foundation to finishing, we build with precision.",
    },
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative architectural solutions that blend aesthetics with functionality for modern living spaces.",
    },
    {
      icon: Key,
      title: "Property Sales",
      description: "Quality homes built by us or trusted partners, available for purchase with transparent processes.",
    },
  ];

  const propertiesCount = useAnimatedCounter(400, 1500, 0, isVisible);
  const clientsCount = useAnimatedCounter(200, 1500, 0, isVisible);
  const yearsCount = useAnimatedCounter(15, 1500, 0, isVisible);

  const stats = [
    { number: propertiesCount, suffix: "+", label: "Projects Completed" },
    { number: clientsCount, suffix: "+", label: "Happy Clients" },
    { number: yearsCount, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="section-title mb-6 sm:mb-8">
              Building Your Vision{" "}
              <span className="text-primary">From Ground Up</span>
            </h2>

            <div className="space-y-4 mb-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-3.5 p-4 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-heading mb-0.5 text-[15px] sm:text-base">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/services" className="btn-primary inline-flex">
              Learn More
            </Link>
          </div>

          {/* Right Content - Image + Stats */}
          <div className={`relative transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <LazyImage
                src={constructionImage}
                alt="Construction site"
                className="w-full h-full"
              />
            </div>

            <div className="absolute -bottom-6 left-3 right-3 sm:left-6 sm:right-6">
              <div className="bg-card rounded-xl shadow-xl p-4 sm:p-6 border border-border/50">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-heading">
                        {stat.number}{stat.suffix}
                      </div>
                      <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
