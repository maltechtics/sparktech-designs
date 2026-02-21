import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, Clock, DollarSign, Users, Check } from "lucide-react";
import { getProjectBySlug, getProjectById, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Try to find by slug first, then by ID
  let project = getProjectBySlug(id || "");
  if (!project && id) {
    const numericId = parseInt(id);
    if (!isNaN(numericId)) {
      project = getProjectById(numericId);
    }
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-display font-bold text-heading mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/projects">
              <Button className="gap-2">
                <ArrowLeft size={18} />
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.id === project!.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-44 pb-12 bg-secondary/30">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase rounded-full">
                  {project.type}
                </span>
                <span className={`px-3 py-1 text-xs font-semibold uppercase rounded-full ${
                  project.status === "completed" 
                    ? "bg-success/20 text-success" 
                    : "bg-gold/20 text-gold"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-heading mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                {project.fullDescription}
              </p>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl">
                  <Building2 className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-semibold">{project.size}</p>
                  </div>
                </div>
                {project.duration && (
                  <div className="flex items-center gap-3 bg-card p-4 rounded-xl">
                    <Clock className="text-primary" size={20} />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {project.budget && (
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign size={20} />
                    <div>
                      <p className="text-xs opacity-80">Project Value</p>
                      <p className="font-bold">{project.budget}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Purpose */}
              <div>
                <h2 className="text-2xl font-display font-bold text-heading mb-4">Project Purpose</h2>
                <p className="text-muted-foreground leading-relaxed">{project.purpose}</p>
              </div>

              {/* Scope */}
              <div>
                <h2 className="text-2xl font-display font-bold text-heading mb-4">Project Scope</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-primary" />
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-display font-bold text-heading mb-4">Project Gallery</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Key Features */}
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-display font-bold text-heading mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-success" />
                      </span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Info */}
              {project.client && (
                <div className="bg-card p-6 rounded-2xl shadow-card">
                  <h3 className="text-xl font-display font-bold text-heading mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="text-primary" size={18} />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                    {project.budget && (
                      <div className="flex items-center gap-3">
                        <DollarSign className="text-primary" size={18} />
                        <div>
                          <p className="text-sm text-muted-foreground">Budget</p>
                          <p className="font-medium">{project.budget}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Interested in a similar project?</h3>
                <p className="text-sm opacity-90 mb-4">Let's discuss how we can bring your vision to life.</p>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full gap-2">
                    Get a Quote
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t border-border">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link to={`/projects/${prevProject.id}`} className="flex items-center gap-3 group">
                <ArrowLeft size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-sm text-muted-foreground">Previous Project</p>
                  <p className="font-semibold text-heading group-hover:text-primary transition-colors">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link to={`/projects/${nextProject.id}`} className="flex items-center gap-3 text-right group">
                <div>
                  <p className="text-sm text-muted-foreground">Next Project</p>
                  <p className="font-semibold text-heading group-hover:text-primary transition-colors">{nextProject.title}</p>
                </div>
                <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
