import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronDown, ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { brand1 as logoIcon } from "@/assets/brand";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      if (mobileNavRef.current) {
        mobileNavRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  type NavLink = {
    label: string;
    href: string;
    submenu?: { label: string; href: string }[];
  };

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label: "Services",
      href: "/services",
      submenu: [
        { label: "All Services", href: "/services" },
        { label: "Construction & Building", href: "/services/construction" },
        { label: "Architectural Design", href: "/services/architecture" },
        { label: "Residential / Renovation", href: "/services/residential" },
        { label: "Interior Designs", href: "/interior-designs" },
      ],
    },
    { label: "Properties", href: "/properties" },
    { label: "Blog", href: "/blog" },
    {
      label: "Company",
      href: "/about",
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("?")[0]);
  };

  return (
    <>
    <header
      className={cn(
        "fixed left-0 right-0 z-[999] transition-all duration-300",
        "top-[42px]",
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-md py-2.5" : "bg-transparent py-4",
      )}
    >
      <div className="container-custom overflow-visible">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoIcon} alt="Sparktech Designs" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
            <span className="font-display font-bold text-lg sm:text-xl text-heading">
              Sparktech<span className="text-primary">designs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const dropdownSide = link.label === "Company" ? "right-0 left-auto" : "left-0";

              return (
                <div key={link.label} className="relative group">
                  {link.submenu ? (
                    <>
                      <button
                        type="button"
                        aria-haspopup="menu"
                        className={cn(
                          "nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                          isActive(link.href) && "text-primary",
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      </button>
                      <div
                        className={cn(
                          "absolute top-full z-[10000] pt-2 hidden group-hover:block group-focus-within:block",
                          dropdownSide,
                        )}
                      >
                        <div className="bg-popover text-popover-foreground rounded-xl shadow-xl border border-border min-w-[220px] py-2">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.label}
                              to={sublink.href}
                              className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "nav-link px-4 py-2 text-sm font-medium transition-colors",
                        isActive(link.href) && "text-primary",
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 gap-2 font-medium text-sm">
                Contact Us
                <ArrowUpRight size={15} />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-foreground hover:bg-secondary/50 transition-colors z-[1002]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile Menu - portaled to body */}
      {createPortal(
        <>
          {/* Mobile Menu Overlay */}
          <div
            className={cn(
              "lg:hidden fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[998] transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className={cn(
              "lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-card z-[1001] shadow-2xl transition-transform duration-300 ease-in-out",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logoIcon} alt="Sparktech Designs" className="w-8 h-8 object-contain" />
                <span className="font-display font-bold text-lg text-heading">
                  Sparktech<span className="text-primary">designs</span>
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary/50 transition-colors z-[1003]"
                aria-label="Close menu"
              >
                <X size={20} className="text-foreground" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav ref={mobileNavRef} className="px-4 py-4 overflow-y-auto h-[calc(100%-140px)]">
              <ul className="space-y-0.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(openMobileDropdown === link.label ? null : link.label)
                          }
                          className={cn(
                            "flex items-center justify-between w-full py-3 px-3 text-foreground font-medium rounded-lg transition-colors hover:bg-secondary/50",
                            isActive(link.href) && "text-primary",
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-200 text-muted-foreground",
                              openMobileDropdown === link.label && "rotate-180",
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            openMobileDropdown === link.label ? "max-h-[500px]" : "max-h-0",
                          )}
                        >
                          <div className="ml-3 pl-3 border-l-2 border-primary/20 py-1 space-y-0.5">
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.label}
                                to={sublink.href}
                                className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={cn(
                          "block py-3 px-3 text-foreground font-medium rounded-lg transition-colors hover:bg-secondary/50",
                          isActive(link.href) && "text-primary bg-primary/5",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-border bg-card">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full gap-2 font-medium rounded-xl h-12">
                  Contact Us
                  <ArrowUpRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Header;
