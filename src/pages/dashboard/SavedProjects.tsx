/**
 * Saved Projects Page
 * Sparktech Designs - Building & Construction Company
 * 
 * Displays user's saved/favorited projects.
 * Placeholder for when Firebase is activated.
 */

import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, ArrowRight, FolderOpen } from "lucide-react";

const SavedProjects = () => {
  // Placeholder - will come from Firebase
  const savedProjects: any[] = [];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
            <span>/</span>
            <span className="text-foreground">Saved Projects</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-heading">
            Saved Projects
          </h1>
          <p className="text-muted-foreground mt-2">
            Projects you've bookmarked for reference
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          {savedProjects.length === 0 ? (
            <Card>
              <CardContent className="text-center py-16">
                <Bookmark className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
                <h2 className="text-2xl font-bold mb-2">No Saved Projects</h2>
                <p className="text-muted-foreground mb-6">
                  Explore our portfolio and save projects that inspire you!
                </p>
                <Link to="/projects">
                  <Button className="gap-2">
                    <FolderOpen className="w-4 h-4" />
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards will be mapped here */}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SavedProjects;
