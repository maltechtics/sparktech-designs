/**
 * User Profile Page
 * Sparktech Designs - Building & Construction Company
 * 
 * User profile settings and management.
 * Placeholder for when Firebase is activated.
 */

import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, Bell, Shield, Camera } from "lucide-react";

const Profile = () => {
  // Placeholder user data - will come from Firebase
  const user = {
    displayName: "Guest User",
    email: "user@example.com",
    phone: "",
    avatar: null,
    preferences: {
      notifications: true,
      newsletter: false,
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
            <span>/</span>
            <span className="text-foreground">Profile Settings</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-heading">
            Profile Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and preferences
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          {/* Avatar Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Profile Photo
              </CardTitle>
              <CardDescription>Update your profile picture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <Button variant="outline" disabled>Upload Photo</Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    JPG or PNG. Max size 5MB.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.displayName} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input id="email" defaultValue={user.email} className="pl-10" disabled />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="phone" placeholder="+234 XXX XXX XXXX" className="pl-10" disabled />
                </div>
              </div>
              <Button disabled>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Manage how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your inquiries
                  </p>
                </div>
                <Switch checked={user.preferences.notifications} disabled />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Newsletter</p>
                  <p className="text-sm text-muted-foreground">
                    Get news about new properties and projects
                  </p>
                </div>
                <Switch checked={user.preferences.newsletter} disabled />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" disabled>Change Password</Button>
              <Separator />
              <div>
                <Button variant="destructive" disabled>Delete Account</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  This action cannot be undone.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Firebase Not Active Notice */}
          <Card className="mt-6 border-dashed border-amber-500/50 bg-amber-500/5">
            <CardContent className="pt-6">
              <p className="text-sm text-amber-600 text-center">
                ⚠️ Profile features will be enabled when Firebase authentication is activated.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Profile;
