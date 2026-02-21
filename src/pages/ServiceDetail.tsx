import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Phone, Mail, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Hammer, Building2, LucideIcon } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { constructionGallery, architectureGallery } from "@/assets/services";

interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  images: string[];
  galleryImages: string[];
  benefits: string[];
}

const servicesData: ServiceData[] = [
  {
    id: "construction",
    icon: Hammer,
    title: "Construction & Building",
    description: "From foundation to finishing, we deliver quality construction for residential and commercial projects.",
    longDescription: "Our construction services encompass the entire building process, from initial groundwork to final finishes. We pride ourselves on using premium materials, employing skilled craftsmen, and adhering to strict quality control measures. Whether you're building your dream home or a commercial complex, our team ensures every project meets the highest standards of structural integrity and aesthetic excellence.",
    features: [
      "Residential home construction",
      "Commercial building development",
      "Industrial facility construction",
      "Foundation and structural work",
      "Roofing and finishing",
      "Quality materials sourcing",
    ],
    process: [
      { step: 1, title: "Consultation", description: "We discuss your vision, requirements, and budget to understand your project needs." },
      { step: 2, title: "Planning & Design", description: "Our architects create detailed plans and 3D visualizations for your approval." },
      { step: 3, title: "Permits & Approvals", description: "We handle all necessary building permits and regulatory approvals." },
      { step: 4, title: "Construction", description: "Our skilled team begins construction with regular progress updates." },
      { step: 5, title: "Quality Inspection", description: "Rigorous quality checks at every stage ensure excellence." },
      { step: 6, title: "Handover", description: "Final walkthrough and project handover with all documentation." },
    ],
    images: constructionGallery.slice(0, 3),
    galleryImages: constructionGallery,
    benefits: [
      "Over 15 years of construction experience",
      "Licensed and insured professionals",
      "Transparent pricing with no hidden costs",
      "On-time project delivery guarantee",
      "12-month defect liability warranty",
    ],
  },
  {
    id: "architecture",
    icon: Building2,
    title: "Architectural Design",
    description: "Innovative architectural solutions that blend aesthetics with functionality for modern living.",
    longDescription: "Our architectural design services combine creativity with technical expertise to create spaces that are both beautiful and functional. We understand that every client has unique needs, which is why we take a personalized approach to every project. From contemporary minimalist designs to traditional Nigerian architecture, our team brings your vision to life with precision and artistry.",
    features: [
      "Custom home design",
      "Commercial architecture",
      "3D visualization & modeling",
      "Blueprint & technical drawings",
      "Sustainable design solutions",
      "Building permits assistance",
    ],
    process: [
      { step: 1, title: "Discovery Meeting", description: "Understanding your style preferences, functional needs, and budget." },
      { step: 2, title: "Site Analysis", description: "Evaluating the land, orientation, and environmental factors." },
      { step: 3, title: "Concept Design", description: "Creating initial sketches and conceptual designs for review." },
      { step: 4, title: "Design Development", description: "Refining the chosen concept into detailed architectural plans." },
      { step: 5, title: "3D Visualization", description: "Producing realistic 3D renders and virtual walkthroughs." },
      { step: 6, title: "Technical Documentation", description: "Preparing construction-ready drawings and specifications." },
    ],
    images: architectureGallery.slice(0, 3),
    galleryImages: architectureGallery,
    benefits: [
      "Award-winning architectural team",
      "Cutting-edge 3D visualization technology",
      "Sustainable and eco-friendly designs",
      "Collaboration with top engineers",
      "Designs optimized for Nigerian climate",
    ],
  },
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const service = servicesData.find((s) => s.id === id);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary))_25%,hsl(var(--primary))_50%,transparent_50%,transparent_75%,hsl(var(--primary))_75%)] bg-[length:60px_60px]" />
        </div>
        <div className="container-custom relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={18} />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ServiceIcon size={40} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Get a Quote
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="tel:+2341234567890">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone size={18} />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.images[0]}
                alt={service.title}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About This Service</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {service.longDescription}
              </p>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-success" />
                    </span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={service.images[1]}
                alt={`${service.title} example 1`}
                className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover"
              />
              <img
                src={service.images[2]}
                alt={`${service.title} example 2`}
                className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div key={feature} className="bg-card p-6 rounded-xl shadow-card flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Check size={20} className="text-primary" />
                </span>
                <span className="font-medium text-heading">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A streamlined approach to delivering exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-card p-8 rounded-2xl shadow-card h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              <Images size={20} />
              <span className="font-medium">Project Gallery</span>
            </div>
            <h2 className="section-title">Our Work Illustrations</h2>
            <p className="section-subtitle">
              Browse through our portfolio of {service.title.toLowerCase()} projects to see the quality and craftsmanship we deliver
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-heading">View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Images Notice */}
          <div className="mt-8 p-6 bg-card rounded-xl border-2 border-dashed border-border text-center">
            <Images size={32} className="mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">
              More project photos will be added here. Contact us to see our complete portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border-none">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <X size={20} className="text-foreground" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>

            {/* Image */}
            <img
              src={service.galleryImages[currentImageIndex]}
              alt={`${service.title} project ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 rounded-full">
              <span className="text-sm font-medium text-foreground">
                {currentImageIndex + 1} / {service.galleryImages.length}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how our {service.title.toLowerCase()} services can help you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail size={18} />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+2341234567890">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
                <Phone size={18} />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
