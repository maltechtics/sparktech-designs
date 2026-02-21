import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";
import { cta1 as ctaImage } from "@/assets/cta";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LazyImage from "@/components/LazyImage";

const CTASection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5">
              Let's Build Your Dream
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base">
              Ready to start your construction project? Contact us for a free consultation and let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-xl px-6 py-5 text-sm gap-2 w-full sm:w-auto">
                  Get Started
                  <ArrowUpRight size={16} />
                </Button>
              </Link>
              <a href="tel:+2347019057882">
                <Button variant="outline" className="rounded-xl px-6 py-5 text-sm gap-2 border-primary/30 w-full sm:w-auto">
                  <Phone size={16} />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
          <div className={`relative transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="aspect-[4/3] sm:aspect-square max-w-md ml-auto rounded-2xl overflow-hidden">
              <LazyImage 
                src={ctaImage} 
                alt="Modern building" 
                className="w-full h-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
