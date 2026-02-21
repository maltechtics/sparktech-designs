import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { brand1 as logoIcon } from "@/assets/brand";

const Footer = () => {
  const ourServices = [
    { label: "Construction & Building", href: "/services/construction" },
    { label: "Architectural Design", href: "/services/architecture" },
    { label: "Residential / Renovation", href: "/services/residential" },
    { label: "Interior Designs", href: "/interior-designs" },
    { label: "Properties for Sale", href: "/properties" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "FAQs", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom pt-14 md:pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src={logoIcon} alt="Sparktech Designs" className="w-9 h-9 object-contain" />
              <span className="font-display font-bold text-lg text-heading">
                Sparktech<span className="text-primary">designs</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Expert construction, architecture & real estate services. Building dreams and constructing excellence across Nigeria.
            </p>
            <div className="space-y-3">
              <a href="tel:+2347019057882" className="flex items-center gap-2.5 text-sm text-foreground hover:text-primary transition-colors">
                <Phone size={15} className="text-primary shrink-0" />
                0701 905 7882
              </a>
              <a href="mailto:Sparktechdesigns@gmail.com" className="flex items-center gap-2.5 text-sm text-foreground hover:text-primary transition-colors">
                <Mail size={15} className="text-primary shrink-0" />
                Sparktechdesigns@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                1, Off Azeez Agiri Street, Gbetu-Iwerekun, Awoyaya, Ibeju-Lekki, Lagos, Nigeria
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display font-semibold text-heading mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {ourServices.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-heading mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTAs */}
          <div>
            <h4 className="font-display font-semibold text-heading mb-5">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+2347019057882"
                className="flex items-center gap-3 w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone size={16} />
                Call 0701 905 7882
              </a>
              <a
                href="https://www.instagram.com/sparktechdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-secondary/60 text-foreground px-4 py-3 rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                <Instagram size={16} />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Sparktech Designs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <a 
              href="mailto:maltechtics@gmail.com" 
              className="font-medium text-primary hover:underline"
            >
              Maltechtics Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
