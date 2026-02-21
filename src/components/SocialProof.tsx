import { instagram1 } from "@/assets/brand";
import { Instagram, Users, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/50 to-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-subtitle">
            Join thousands of followers on Instagram to see our latest projects and behind-the-scenes content
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Instagram Screenshot */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
              <img
                src={instagram1}
                alt="Sparktech Designs Instagram Profile"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                <a
                  href="https://www.instagram.com/sparktechdesigns/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2">
                    <Instagram size={18} />
                    Follow on Instagram
                    <ExternalLink size={14} />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Stats and Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
                <Instagram size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-heading">@sparktechdesigns</h3>
                <p className="text-muted-foreground">Official Instagram</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-card p-4 rounded-xl text-center shadow-card">
                <div className="text-2xl font-display font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Users size={12} />
                  Followers
                </div>
              </div>
              <div className="bg-card p-4 rounded-xl text-center shadow-card">
                <div className="text-2xl font-display font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Posts</div>
              </div>
              <div className="bg-card p-4 rounded-xl text-center shadow-card">
                <div className="text-2xl font-display font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Heart size={12} />
                  Likes
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Stay updated with our latest construction projects, architectural designs, and behind-the-scenes content. See why thousands trust Sparktech Designs for their building needs.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["#Construction", "#Architecture", "#NigeriaBuilds", "#SparkTechDesigns", "#QualityFirst"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.instagram.com/sparktechdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button size="lg" className="gap-2">
                  <Instagram size={18} />
                  Visit Our Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
