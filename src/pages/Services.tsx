import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hammer, Building2, ArrowRight, Check, Phone, Home, Wrench, Palette, DollarSign } from "lucide-react";
import { service1, constructionGallery } from "@/assets/services";
import { interior1 } from "@/assets/interior";
import arch1 from "@/assets/services/arch-1.jpg";
import rr1 from "@/assets/services/resi-reno-1.jpg";

const Services = () => {
  const services = [
    {
      id: "construction",
      icon: Hammer,
      title: "Construction & Building",
      description: "Complete construction services from foundation to finishing for residential projects.",
      features: ["Foundation & structural work", "Roofing & finishing", "Quality materials sourcing", "On-time delivery"],
      image: constructionGallery[0],
      href: "/services/construction",
    },
    {
      id: "architecture",
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative architectural solutions — blueprints, 3D visualization, and custom designs for modern living.",
      features: ["Custom home design", "3D visualization & modeling", "Blueprint & technical drawings", "Building permits assistance"],
      image: arch1,
      href: "/services/architecture",
    },
    {
      id: "residential",
      icon: Home,
      title: "Residential / Renovation",
      description: "Beautiful, durable homes tailored to your lifestyle plus complete renovations and remodeling services.",
      features: ["Custom home construction", "Complete renovations", "Kitchen & bathroom remodeling", "Structural repairs & upgrades"],
      image: rr1,
      href: "/services/residential",
    },
    {
      id: "interior",
      icon: Palette,
      title: "Interior Designs",
      description: "Stunning interior transformations — elegant ceilings, custom cabinetry, and luxurious living spaces.",
      features: ["Custom interiors", "Ceiling & wall designs", "Furniture & cabinetry", "Lighting design"],
      image: interior1,
      href: "/interior-designs",
    },
    {
      id: "realestate",
      icon: DollarSign,
      title: "Real Estate & Property Sales",
      description: "Quality homes built by us, now available for purchase. We also help clients and associates sell properties.",
      features: ["Ready-to-move-in homes", "Property listings", "Sales facilitation", "Investment guidance"],
      image: constructionGallery[2],
      href: "/properties",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary))_25%,hsl(var(--primary))_50%,transparent_50%,transparent_75%,hsl(var(--primary))_75%)] bg-[length:60px_60px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
                All Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                From construction and architectural design to interior decoration and real estate — Sparktech Designs is your one-stop solution for all building and property needs.
              </p>
              <p className="text-muted-foreground mb-8">
                Led by Engineer Sovon K. Borel, our team delivers quality workmanship, creative design, and reliable project execution across Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+2347019057882">
                  <Button size="lg" className="gap-2">
                    <Phone size={18} />
                    Call 0701 905 7882
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2 text-foreground">
                    Get a Free Quote
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={service1} alt="Construction services" className="rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Comprehensive construction, design, and real estate solutions — from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                        <Check size={12} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Why Choose Sparktech Designs?</h2>
            <p className="section-subtitle">We bring quality, reliability, and expertise to every project</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Materials", desc: "Only the best materials for lasting results" },
              { title: "Skilled Team", desc: "Experienced engineers, architects & craftsmen" },
              { title: "On-Time Delivery", desc: "We respect your timeline and budget" },
              { title: "End-to-End Service", desc: "From design to construction to sales" },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-xl shadow-card text-center">
                <h4 className="font-display font-semibold text-heading mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+2347019057882">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone size={18} /> Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
                Contact Us <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
