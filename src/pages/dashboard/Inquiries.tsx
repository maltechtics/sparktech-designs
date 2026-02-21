/**
 * User Inquiries Page
 * Sparktech Designs - Building & Construction Company
 * 
 * Displays user's submitted inquiries and their status.
 * Placeholder for when Firebase is activated.
 */

import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Mail } from "lucide-react";

const Inquiries = () => {
  // Placeholder - will come from Firebase
  const userInquiries: any[] = [];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
            <span>/</span>
            <span className="text-foreground">My Inquiries</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-heading">
            My Inquiries
          </h1>
          <p className="text-muted-foreground mt-2">
            Track the status of your submitted inquiries
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          {userInquiries.length === 0 ? (
            <Card>
              <CardContent className="text-center py-16">
                <MessageSquare className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
                <h2 className="text-2xl font-bold mb-2">No Inquiries Yet</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions? Reach out to us and we'll get back to you!
                </p>
                <Link to="/contact">
                  <Button className="gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {/* Inquiry cards will be mapped here */}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Inquiries;
