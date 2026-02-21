import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Phone } from "lucide-react";
import { interiorGallery } from "@/assets/interior";

const InteriorDesigns = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 gap-2">
              <Palette size={14} />
              Interior Design Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
              Beautiful <span className="text-primary">Interior Designs</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We create stunning interior spaces — from elegant ceilings and custom cabinetry 
              to luxurious living areas. Let us transform your space into something extraordinary.
            </p>
            <a href="tel:07019057882">
              <Button size="lg" className="gap-2">
                <Phone size={18} />
                Call Us: 0701 905 7882
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {interiorGallery.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Interior design work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your interior design needs. We bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:07019057882">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone size={18} />
                0701 905 7882
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                Contact Us
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteriorDesigns;
