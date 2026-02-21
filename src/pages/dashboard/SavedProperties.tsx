/**
 * Saved Properties Page
 * Sparktech Designs - Building & Construction Company
 * 
 * Displays user's saved/favorited properties.
 * Placeholder for when Firebase is activated.
 */

import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, Building2 } from "lucide-react";

const SavedProperties = () => {
  // Placeholder - will come from Firebase
  const savedProperties: any[] = [];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
            <span>/</span>
            <span className="text-foreground">Saved Properties</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-heading">
            Saved Properties
          </h1>
          <p className="text-muted-foreground mt-2">
            Properties you've saved for later viewing
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          {savedProperties.length === 0 ? (
            <Card>
              <CardContent className="text-center py-16">
                <Heart className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
                <h2 className="text-2xl font-bold mb-2">No Saved Properties</h2>
                <p className="text-muted-foreground mb-6">
                  Start exploring our properties and save your favorites!
                </p>
                <Link to="/properties">
                  <Button className="gap-2">
                    <Building2 className="w-4 h-4" />
                    Browse Properties
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Property cards will be mapped here */}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SavedProperties;
