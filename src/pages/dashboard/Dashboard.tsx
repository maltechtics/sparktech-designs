/**
 * User Dashboard Page
 * Sparktech Designs - Building & Construction Company
 * 
 * Main dashboard for logged-in users.
 * Shows overview of saved items, inquiries, and notifications.
 */

import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Heart, 
  MessageSquare, 
  Bell, 
  User, 
  Building2, 
  FolderOpen,
  ArrowRight,
  Settings
} from "lucide-react";

const Dashboard = () => {
  // Placeholder data - will come from Firebase when activated
  const stats = [
    { label: "Saved Properties", value: 0, icon: Heart, href: "/dashboard/saved-properties" },
    { label: "Saved Projects", value: 0, icon: FolderOpen, href: "/dashboard/saved-projects" },
    { label: "My Inquiries", value: 0, icon: MessageSquare, href: "/dashboard/inquiries" },
    { label: "Notifications", value: 0, icon: Bell, href: "/dashboard/notifications" },
  ];

  const quickLinks = [
    { label: "Browse Properties", icon: Building2, href: "/properties" },
    { label: "View Projects", icon: FolderOpen, href: "/projects" },
    { label: "Contact Us", icon: MessageSquare, href: "/contact" },
    { label: "Profile Settings", icon: Settings, href: "/dashboard/profile" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-heading">Welcome Back!</h1>
              <p className="text-muted-foreground">Manage your saved items and inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Link key={stat.label} to={stat.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <stat.icon className="w-5 h-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click to view all
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-heading mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.label} to={link.href}>
                <Button 
                  variant="outline" 
                  className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <link.icon className="w-8 h-8" />
                  <span className="font-medium">{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity Placeholder */}
      <section className="py-12">
        <div className="container-custom">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions with our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No recent activity yet</p>
                <p className="text-sm mt-2">Start exploring properties and projects!</p>
                <div className="flex gap-4 justify-center mt-6">
                  <Link to="/properties">
                    <Button variant="outline" className="gap-2">
                      Browse Properties <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button className="gap-2">
                      View Projects <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Dashboard;
