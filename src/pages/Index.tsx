import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ServicesSection from "@/components/home/ServicesSection";
import PropertyTypesSection from "@/components/home/PropertyTypesSection";
import FounderSection from "@/components/home/FounderSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

// Lazy load the heavy map component
const MapSection = lazy(() => import("@/components/home/MapSection"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <PropertyTypesSection />
      <FounderSection />
      <Suspense fallback={<div className="section-padding bg-secondary/30 min-h-[400px]" />}>
        <MapSection />
      </Suspense>
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
