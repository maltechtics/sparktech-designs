/**
 * Admin Login Page Placeholder
 * 
 * This page will be implemented with Firebase Authentication
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display font-bold text-xl text-heading">
              Sparktech<span className="text-primary">designs</span>
            </span>
          </Link>
          <h1 className="text-2xl font-display font-bold text-heading">Admin Login</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to access the admin dashboard
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-secondary/50 rounded-lg text-center">
            <p className="text-muted-foreground text-sm">
              Firebase Authentication will be integrated here.
              <br />
              This is a placeholder for the admin login functionality.
            </p>
          </div>

          <Link to="/">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
