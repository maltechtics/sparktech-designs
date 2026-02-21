import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

const Projects = () => {
  // Only show 5 completed projects
  const completedProjects = projects
    .filter((project) => project.status === "completed")
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-heading mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of completed construction and architectural projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid - No filters, clean image-focused layout */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-center">
                  <a href="tel:+2347019057882" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors">
                    📞 0701 905 7882
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* See More */}
          <div className="text-center mt-12">
            <a href="tel:+2347019057882" className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline transition-colors">
              📞 Call 0701 905 7882 for our complete project portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
