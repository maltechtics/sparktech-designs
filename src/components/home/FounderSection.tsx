import { Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { founder1 } from "@/assets/team";
import LazyImage from "@/components/LazyImage";

const FounderSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const benefits = [
    "Graduate of Polytechnic, Lomé – Togo",
    "Trained in Design and Architecture",
    "Over 8+ years of hands-on industry experience",
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Founder Image */}
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <LazyImage
                  src={founder1}
                  alt="Sovon K. Borel - Founder & CEO"
                  className="w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-3 -right-3 sm:bottom-4 sm:-right-4 bg-card rounded-xl p-3.5 sm:p-4 shadow-lg border border-border/50">
                <h4 className="font-display font-bold text-heading text-base sm:text-lg">Sovon K. Borel</h4>
                <p className="text-primary font-medium text-xs sm:text-sm">Founder & CEO</p>
                <p className="text-muted-foreground text-xs mt-0.5">Since 2017</p>
              </div>

              <div className="absolute -top-3 -left-3 w-20 h-20 border-2 border-primary/15 rounded-xl -z-10 hidden sm:block" />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="section-title mb-4 sm:mb-5">
              Meet the <span className="text-primary">Visionary</span> Behind Sparktech Designs
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
              Sovon K. Borel founded Sparktech Designs in 2017 with a vision to improve and transform 
              construction standards in Nigeria. Originally trained in Design and Architecture at the 
              Polytechnic in Lomé, Togo, Mr. Borel quickly distinguished himself through dedication 
              and practical skill, rising to become one of their recognized engineers.
            </p>

            <p className="text-muted-foreground text-sm mb-5 sm:mb-6 leading-relaxed">
              With years of experience working with and leading multiple companies in design, structural 
              works, and mechanical operations, Engineer Borel gained strong hands-on industry knowledge 
              before establishing Sparktech Designs. Through practical experience, creative vision, and 
              commitment to quality technical work, Mr. Borel has continued to build Sparktech Designs 
              into a trusted construction and engineering brand.
            </p>

            <ul className="space-y-3 mb-6 sm:mb-7">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-primary-foreground" />
                  </div>
                  <span className="text-heading font-medium text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-xl transition-colors duration-300 hover:bg-foreground/90 text-sm"
            >
              Learn More About Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
