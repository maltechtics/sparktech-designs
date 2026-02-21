/**
 * Admin Dashboard Page Placeholder
 * 
 * This page will be implemented with Firebase and protected routes
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Building2, Users, Settings, FileText, DollarSign } from "lucide-react";

const AdminDashboard = () => {
  const dashboardItems = [
    { icon: Home, label: "Dashboard Home", href: "/admin/dashboard", count: null },
    { icon: Building2, label: "Properties", href: "/admin/properties", count: 24 },
    { icon: Users, label: "Users", href: "/admin/users", count: 156 },
    { icon: FileText, label: "Inquiries", href: "/admin/inquiries", count: 12 },
    { icon: DollarSign, label: "Transactions", href: "/admin/transactions", count: 8 },
    { icon: Settings, label: "Settings", href: "/admin/settings", count: null },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display font-bold text-xl text-heading">
              Admin Panel
            </span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              View Site
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-heading">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to the Sparktech Designs admin panel
          </p>
        </div>

        {/* Placeholder Notice */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Settings className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-heading mb-2">
                Admin Dashboard Placeholder
              </h3>
              <p className="text-muted-foreground">
                This is a placeholder for the admin dashboard. The full dashboard will include:
              </p>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                <li>• Property management (CRUD operations)</li>
                <li>• User management</li>
                <li>• Inquiry and lead management</li>
                <li>• Transaction history (Paystack integration)</li>
                <li>• Content management for blog and testimonials</li>
                <li>• Analytics and reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item) => (
            <div
              key={item.label}
              className="bg-card rounded-2xl shadow-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={24} />
                </div>
                {item.count !== null && (
                  <span className="text-2xl font-display font-bold text-heading">
                    {item.count}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-heading">{item.label}</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Manage {item.label.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
