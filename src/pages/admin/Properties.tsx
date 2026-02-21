/**
 * Admin Properties Page Placeholder
 * 
 * This page will be implemented with Firebase Firestore for property management
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const AdminProperties = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <span className="font-display font-bold text-xl text-heading">
              Properties
            </span>
          </div>
          <Button className="btn-primary gap-2">
            <Plus size={18} />
            Add Property
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search properties..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={18} />
            Filters
          </Button>
        </div>

        {/* Placeholder Notice */}
        <div className="bg-card rounded-2xl shadow-card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Plus className="text-primary" size={32} />
          </div>
          <h3 className="font-display font-semibold text-xl text-heading mb-2">
            No Properties Yet
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            This is a placeholder for the properties management page. 
            Once Firebase is integrated, you'll be able to add, edit, and delete properties here.
          </p>
          <Button className="btn-primary gap-2">
            <Plus size={18} />
            Add Your First Property
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AdminProperties;
