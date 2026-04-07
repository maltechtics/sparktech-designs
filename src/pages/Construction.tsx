import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Phone,
  Building2,
  HardHat,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import site01 from "@/assets/construction/site-01.jpg";
import site02 from "@/assets/construction/site-02.jpg";
import site03 from "@/assets/construction/site-03.jpg";
import site04 from "@/assets/construction/site-04.jpg";
import site05 from "@/assets/construction/site-05.jpg";
import site06 from "@/assets/construction/site-06.jpg";
import site07 from "@/assets/construction/site-07.jpg";
import site08 from "@/assets/construction/site-08.jpg";
import site09 from "@/assets/construction/site-09.jpg";

/* 🔹 Construction Images */
const allImages = [
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/3504af64-8ebe-4246-ba0f-b623c74ba3ae.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/efb73138-4fcd-47bd-bb47-9a4161c80b0d.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/54726e72-d36c-48d5-b68a-e3d963b568d7.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/b48ef725-1228-463a-982a-66aafdd71207.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/5f0bddcd-ec77-40a1-aa7f-b13d9920d782.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/5558b93e-0eb0-4fc3-bf29-b99cf6150c8b.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/4d7f8246-0f03-430c-858f-0d3c4385ebd3.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/1b6d89cb-eef7-4e28-945d-feb7121c4b4a.jpg",
  "https://i.supaimg.com/cf98dd2d-1084-4ce1-897e-bd806b9053a9/aa45c5dd-1351-47ce-8f76-a8ba804c8bc8.jpg",
  site01,
  site02,
  site03,
  site04,
  site05,
  site06,
  site07,
  site08,
  site09,
];

const Construction = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    "Full-scale building construction",
    "Foundation, block work & structural framing",
    "On-site project supervision",
    "Concrete works & reinforcement",
    "Roofing, flooring & finishing",
    "Residential & private developments",
    "Quality materials & safety compliance",
    "On-time delivery & durable builds",
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-44 pb-20 bg-secondary/30 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Building2 size={28} className="text-primary" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <HardHat size={28} className="text-primary" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
                Construction & <span className="text-primary">Building</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                We handle building construction from the ground up — delivering
                strong foundations, precise structural work, and durable
                finishes that stand the test of time.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+2347019057882">
                  <Button size="lg" className="gap-2">
                    <Phone size={18} />
                    Call 0701 905 7882
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-foreground"
                  >
                    Get a Quote <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={allImages[0]}
                alt="Construction site"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Construction Services</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                From excavation and foundation to full structural completion,
                our construction process focuses on safety, strength, and
                long-term value.
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
              <img
                src={allImages[1]}
                className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover"
              />
              <img
                src={allImages[2]}
                className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              <Images size={20} />
              <span className="font-medium">Construction Gallery</span>
            </div>
            <h2 className="section-title">Ongoing & Completed Builds</h2>
            <p className="section-subtitle">
              A look into our construction sites and completed structures
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border-none">
          <div className="relative">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
            >
              <X size={20} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={allImages[currentImageIndex]}
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
};

export default Construction;