import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { properties } from "@/data/properties";

const Properties = () => {
  const handleWhatsAppClick = (property: typeof properties[0]) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in the property: ${property.title}\n\nPlease provide more details.`
    );
    window.open(`https://wa.me/2347019057882?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-44 pb-16 bg-secondary/30">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-heading mb-4">
            Properties <span className="text-primary">For Sale</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Quality homes built by us, now available for purchase
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                onClick={() => handleWhatsAppClick(property)}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-background font-medium">
                      <MessageCircle size={20} />
                      <span>Enquire on WhatsApp</span>
                    </div>
                  </div>
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

          <div className="text-center mt-12 p-8 bg-secondary/30 rounded-2xl">
            <h3 className="text-xl font-display font-semibold text-heading mb-2">
              Interested in a Property?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us directly to get more details and schedule a viewing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+2347019057882">
                <Button size="lg" className="gap-2">
                  <Phone size={18} />
                  Call 0701 905 7882
                </Button>
              </a>
              <a href="https://wa.me/2347019057882?text=Hello!%20I'm%20interested%20in%20your%20properties." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Properties;
