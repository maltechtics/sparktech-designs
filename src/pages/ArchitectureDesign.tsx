import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone, Building2, Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import arch1 from "@/assets/services/arch-1.jpg";
import arch2 from "@/assets/services/arch-2.jpg";
import arch3 from "@/assets/services/arch-3.jpg";
import arch4 from "@/assets/services/arch-4.jpg";
import arch5 from "@/assets/services/arch-5.jpg";
import arch6 from "@/assets/services/arch-6.jpg";
import arch7 from "@/assets/services/arch-7.jpg";

const allImages = [arch1, arch2, arch3, arch4, arch5, arch6, arch7];

const ArchitectureDesign = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    "Custom home & building design",
    "3D visualization & modeling",
    "Blueprint & technical drawings",
    "Building permits assistance",
    "Sustainable design solutions",
    "Site analysis & planning",
  ];

  const process = [
    { step: 1, title: "Discovery Meeting", description: "Understanding your style preferences, functional needs, and budget." },
    { step: 2, title: "Site Analysis", description: "Evaluating the land, orientation, and environmental factors." },
    { step: 3, title: "Concept Design", description: "Creating initial sketches and conceptual designs for review." },
    { step: 4, title: "Design Development", description: "Refining the chosen concept into detailed architectural plans." },
    { step: 5, title: "3D Visualization", description: "Producing realistic 3D renders and virtual walkthroughs." },
    { step: 6, title: "Technical Documentation", description: "Preparing construction-ready drawings and specifications." },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-44 pb-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary))_25%,hsl(var(--primary))_50%,transparent_50%,transparent_75%,hsl(var(--primary))_75%)] bg-[length:60px_60px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
                Architectural <span className="text-primary">Design</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Innovative architectural solutions that blend aesthetics with functionality. From concept sketches to construction-ready blueprints, we bring your vision to life with precision and artistry.
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
                    Get a Quote <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={arch1} alt="Architectural design" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">What We Offer</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our architectural design services combine creativity with technical expertise to create spaces that are both beautiful and functional. We understand that every client has unique needs, which is why we take a personalized approach to every project.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-success" />
                    </span>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={arch2} alt="Architecture project" className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover" />
              <img src={arch3} alt="Architecture project" className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">A streamlined approach to delivering exceptional architectural designs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-card p-8 rounded-2xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-heading mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              <Images size={20} />
              <span className="font-medium">Project Gallery</span>
            </div>
            <h2 className="section-title">Our Architecture Work</h2>
            <p className="section-subtitle">Browse through our portfolio of architectural design projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img src={image} alt={`Architecture project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-heading">View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border-none">
          <div className="relative">
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors">
              <X size={20} className="text-foreground" />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors">
              <ChevronLeft size={24} className="text-foreground" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors">
              <ChevronRight size={24} className="text-foreground" />
            </button>
            <img src={allImages[currentImageIndex]} alt={`Architecture project ${currentImageIndex + 1}`} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 rounded-full">
              <span className="text-sm font-medium text-foreground">{currentImageIndex + 1} / {allImages.length}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need Architectural Design Services?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Let's discuss your architectural design needs and bring your vision to life.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+2347019057882">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone size={18} /> 0701 905 7882
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
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

export default ArchitectureDesign;
