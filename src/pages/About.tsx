import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Award, Users, Building2, Target, ArrowRight, GraduationCap, Briefcase, Instagram } from "lucide-react";
import { interior1 as aboutImage1 } from "@/assets/interior";
import { interior3 as aboutImage2 } from "@/assets/interior";
import { founder1 as ceoImage } from "@/assets/team";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";
import SocialProof from "@/components/SocialProof";

const About = () => {
  const [statsRef, statsVisible] = useScrollAnimation(0.2);
  
  const projectsCount = useAnimatedCounter(400, 1500, 0, statsVisible);
  const clientsCount = useAnimatedCounter(200, 1500, 0, statsVisible);
  const yearsCount = useAnimatedCounter(15, 1500, 0, statsVisible);
  const teamCount = useAnimatedCounter(50, 1500, 0, statsVisible);

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only the best materials and techniques in every project.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision is our priority. We work closely with clients to bring their dreams to reality.",
    },
    {
      icon: Building2,
      title: "Innovation",
      description: "We embrace modern construction technologies and architectural innovations for better results.",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Transparency and honesty guide all our dealings with clients, partners, and suppliers.",
    },
  ];

  const milestones = [
    { year: "2017", title: "Sparktech Designs Founded", description: "Sovon K. Borel established Sparktech Designs with a vision to improve and transform construction standards in Nigeria." },
    { year: "2018", title: "First Major Projects", description: "Completed our first large-scale residential and commercial projects in Lagos." },
    { year: "2020", title: "Team Expansion", description: "Grew our team of skilled engineers, architects, and craftsmen." },
    { year: "2022", title: "100+ Projects Milestone", description: "Celebrated completing over 100 construction and architectural projects." },
    { year: "2023", title: "Property Sales Division", description: "Launched our property sales arm to serve clients end-to-end." },
    { year: "2024", title: "Continued Excellence", description: "Continuing to build Nigeria's future with quality and innovation." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Founder Section - First */}
      <section className="pt-44 pb-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Meet Our Founder</h2>
            <p className="section-subtitle">
              The visionary leader behind Sparktech Designs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={ceoImage}
                alt="Sovon K. Borel - CEO & Founder"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-lg font-display font-bold">Since 2017</div>
                <div className="text-sm opacity-80">Building Excellence</div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-heading mb-2">
                  Sovon K. Borel
                </h3>
                <p className="text-primary font-semibold text-lg">
                  Founder & Chief Executive Officer
                </p>
              </div>

              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Sovon K. Borel founded Sparktech Designs in 2017 with a vision to improve and transform construction standards in Nigeria. Originally trained in Design and Architecture at the Polytechnic in Lomé, Togo, Mr. Borel quickly distinguished himself through dedication and practical skill, rising to become one of their recognized engineers.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                With years of experience working with and leading multiple companies in design, structural works, and mechanical operations, Engineer Borel gained strong hands-on industry knowledge before establishing Sparktech Designs. Through practical experience, creative vision, and commitment to quality technical work, Mr. Borel has continued to build Sparktech Designs into a trusted construction and engineering brand.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading">Education</h4>
                    <p className="text-muted-foreground text-sm">Graduate of Polytechnic, Lomé – Togo</p>
                    <p className="text-muted-foreground text-sm">Trained in Design and Architecture</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading">Experience</h4>
                    <p className="text-muted-foreground text-sm">Led and worked with multiple companies in design, structural works, and mechanical operations</p>
                    <p className="text-muted-foreground text-sm">Over 8+ years of hands-on industry experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading">Expertise</h4>
                    <p className="text-muted-foreground text-sm">Construction, Architecture, Design, and Engineering excellence through practical experience and creative vision</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/sparktechdesigns/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.sparktechdesigns.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Building2 size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef as React.RefObject<HTMLElement>} className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold">{projectsCount}+</div>
              <div className="text-sm opacity-80 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold">{clientsCount}+</div>
              <div className="text-sm opacity-80 mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold">{yearsCount}+</div>
              <div className="text-sm opacity-80 mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold">{teamCount}+</div>
              <div className="text-sm opacity-80 mt-2">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-heading mb-6">
                Building Nigeria's <span className="text-primary">Future</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                With over 15 years of experience, Sparktech Designs is a leading construction and architectural firm committed to excellence, innovation, and client satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="gap-2">
                    View Our Projects
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage1}
                alt="Our construction work"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-display font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={aboutImage2}
                alt="Our completed project"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To deliver exceptional construction and architectural services that exceed client expectations while contributing to the development of Nigeria's built environment.
              </p>
              
              <h2 className="section-title mt-10">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                To be the most trusted construction and architectural firm in Nigeria, known for quality, innovation, and integrity in every project we undertake.
              </p>

              <ul className="space-y-3 mt-8">
                {["Quality craftsmanship in every project", "On-time and on-budget delivery", "Sustainable building practices", "Client satisfaction guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-success" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our 15+ year history
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-card inline-block">
                      <div className="text-2xl font-display font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-heading mb-1">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary shrink-0 relative z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Instagram */}
      <SocialProof />

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction or architectural vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Contact Us Today
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
