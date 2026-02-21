import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, ArrowRight, Check } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Architect",
      department: "Architecture",
      location: "Lagos",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for an experienced architect to lead residential and commercial projects.",
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Operations",
      location: "Lagos / Abuja",
      type: "Full-time",
      experience: "4+ years",
      description: "Oversee construction projects from planning to completion, ensuring quality and timeline adherence.",
    },
    {
      id: 3,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Lagos",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and supervise structural elements of construction projects.",
    },
    {
      id: 4,
      title: "Quantity Surveyor",
      department: "Finance",
      location: "Lagos",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage project costs, prepare bills of quantities, and ensure budget compliance.",
    },
    {
      id: 5,
      title: "Interior Designer",
      department: "Design",
      location: "Lagos",
      type: "Full-time",
      experience: "2+ years",
      description: "Create stunning interior spaces for residential and commercial projects.",
    },
    {
      id: 6,
      title: "Site Supervisor",
      department: "Operations",
      location: "Lagos / Abuja",
      type: "Full-time",
      experience: "3+ years",
      description: "Supervise daily construction activities and manage site workers.",
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Professional development opportunities",
    "Performance bonuses",
    "Flexible work arrangements",
    "Career growth path",
    "Modern work environment",
    "Team building activities",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-heading mb-6">
              Build Your <span className="text-primary">Career</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our team of professionals and help shape Nigeria's built environment
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Join Sparktech Designs?</h2>
              <p className="text-muted-foreground mb-8">
                We're more than just a construction company. We're a family of passionate professionals dedicated to building excellence. Join us and be part of projects that shape communities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-success" />
                    </span>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary text-primary-foreground p-10 rounded-2xl">
              <div className="text-5xl font-display font-bold mb-4">50+</div>
              <div className="text-lg mb-4">Team Members</div>
              <p className="opacity-90 mb-6">
                Our diverse team brings together expertise in architecture, engineering, project management, and more.
              </p>
              <Link to="/team">
                <Button variant="secondary" className="gap-2">
                  Meet Our Team
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Explore our current openings and find your next opportunity
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-heading mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {position.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{position.description}</p>
                  </div>
                  <Link to="/contact">
                    <Button className="shrink-0 gap-2">
                      Apply Now
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-heading mb-4">
            Don't See a Fit?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="gap-2">
              Submit General Application
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;