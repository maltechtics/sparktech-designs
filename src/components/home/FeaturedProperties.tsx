import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { properties } from "@/data/properties";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";

const FeaturedProperties = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const displayProperties = properties.slice(0, 3);

  const handleWhatsAppClick = (e: React.MouseEvent, property: typeof properties[0]) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello! I'm interested in the property: ${property.title}\n\nPlease provide more details.`
    );
    window.open(`https://wa.me/2347019057882?text=${message}`, "_blank");
  };

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-background">
      <div className="container-custom">
        <div className={`text-center mb-10 sm:mb-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">Properties for Sale</h2>
          <p className="section-subtitle">Quality homes built by us, now available for purchase</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayProperties.map((property, index) => (
            <div
              key={property.id}
              className={`group bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <LazyImage src={property.image} alt={property.title} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                <button
                  onClick={(e) => handleWhatsAppClick(e, property)}
                  className="absolute inset-0 bg-foreground/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center gap-2 bg-card/90 px-4 py-2 rounded-full text-primary font-medium text-sm">
                    <MessageCircle size={16} />
                    Enquire on WhatsApp
                  </div>
                </button>
              </div>
              <div className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm">
                  <Phone size={14} />
                  <span>0701 905 7882</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-8 sm:mt-10 transition-opacity duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/properties">
            <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors">
              See More Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
