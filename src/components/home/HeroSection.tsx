import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Home, Building2, HardHat, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import hero1 from "@/assets/hero/hero-1.jpg";
import curvedArrow from "@/assets/hero/curved-arrow.webp";
import { projects } from "@/data/projects";
import { services, locations } from "@/data/services";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "services" | "locations">("projects");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "locations", label: "Locations" },
  ] as const;

  const quickLinks = [
    { icon: Home, label: "Residential / Renovation", href: "/services/residential" },
    { icon: Building2, label: "Architecture", href: "/services/architecture" },
    { icon: HardHat, label: "Interior Designs", href: "/interior-designs" },
    { icon: Building2, label: "Construction", href: "/services/construction" },
  ];

  const getPlaceholder = () => {
    switch (activeTab) {
      case "projects":
        return "Search our construction projects...";
      case "services":
        return "Search our services...";
      case "locations":
        return "Search by location...";
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) return;

    if (activeTab === "projects") {
      const matchedProject = projects.find(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
      
      if (matchedProject) {
        navigate(`/projects/${matchedProject.id}`);
      } else {
        navigate(`/projects?search=${encodeURIComponent(query)}`);
      }
    } else if (activeTab === "services") {
      const matchedService = services.find(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.keywords.some((k) => k.toLowerCase().includes(query))
      );
      
      if (matchedService) {
        navigate(`/services#${matchedService.id}`);
      } else {
        navigate("/services");
      }
    } else if (activeTab === "locations") {
      const matchedLocation = locations.find(
        (l) =>
          l.name.toLowerCase().includes(query) ||
          l.keywords.some((k) => k.toLowerCase().includes(query))
      );
      
      if (matchedLocation) {
        const mapSection = document.getElementById("map-section");
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/#map-section");
        }
      } else {
        const mapSection = document.getElementById("map-section");
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    
    setSearchQuery("");
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 lg:left-[45%] lg:right-0">
        <img
          src={hero1}
          alt="Sparktech Designs construction project"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/95 to-hero/60 lg:from-hero lg:via-hero/80 lg:to-transparent" />
      </div>

      {/* Watch Video with Curved Arrow */}
      <div className="hidden lg:flex absolute top-[38%] right-[32%] z-20 items-center gap-3">
        <img src={curvedArrow} alt="" className="w-20 h-auto" loading="lazy" />
        <span className="text-foreground font-medium whitespace-nowrap">Watch Video</span>
        <a 
          href="https://www.instagram.com/reel/C2RzK7Eo_iU/?igsh=MXYyNTZtbDA2NmZ0bw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
        >
          <Play size={18} className="text-primary group-hover:text-primary-foreground ml-0.5 transition-colors duration-300" />
        </a>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-36 sm:py-40 lg:py-0">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-display font-bold text-heading leading-[1.15] mb-4 sm:mb-5">
            Building Dreams,{" "}
            <span className="text-primary">Constructing Excellence</span>
          </h1>
          <p className="text-muted-foreground text-[15px] sm:text-lg md:text-xl mb-7 sm:mb-9 max-w-lg">
            Expert construction, architecture & real estate services across Nigeria
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="bg-card rounded-xl shadow-xl p-2">
            <div className="flex border-b border-border mb-3 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`hero-search-tab whitespace-nowrap ${
                    activeTab === tab.id ? "hero-search-tab-active" : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 p-1 sm:p-2">
              <div className="flex-1 flex items-center gap-2 px-2 sm:px-3">
                {activeTab === "locations" ? (
                  <MapPin size={18} className="text-muted-foreground shrink-0" />
                ) : activeTab === "services" ? (
                  <HardHat size={18} className="text-muted-foreground shrink-0" />
                ) : (
                  <Building2 size={18} className="text-muted-foreground shrink-0" />
                )}
                <Input
                  type="text"
                  placeholder={getPlaceholder()}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 shadow-none focus-visible:ring-0 text-sm sm:text-base h-10"
                />
              </div>
              <Button type="submit" className="bg-foreground hover:bg-foreground/90 text-background rounded-lg w-10 h-10 p-0 shrink-0">
                <Search size={17} />
              </Button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-2 mt-5 sm:mt-7">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="quick-link-pill">
                <link.icon size={13} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Watch Video */}
      <div className="lg:hidden absolute bottom-6 right-4 flex items-center gap-2">
        <span className="text-foreground font-medium text-xs">Watch Video</span>
        <a 
          href="https://www.instagram.com/reel/C2RzK7Eo_iU/?igsh=MXYyNTZtbDA2NmZ0bw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center"
        >
          <Play size={15} className="text-primary ml-0.5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
