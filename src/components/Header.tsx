import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/greenb-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "EcoRewards", href: "/ecorewards" },
  { label: "Smart Bin", href: "/smart-bin" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 py-3 shadow-md backdrop-blur-lg" : "bg-transparent py-5"}`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="GreenB home">
            <img src={logo} alt="GreenB Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">GreenB</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href} className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
              <a href="https://greenbapp.com" target="_blank" rel="noopener noreferrer">Join GreenB EcoRewards</a>
            </Button>
          </div>

          <button className="p-2 text-foreground lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-2 pb-4 lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href} className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
              <a href="https://greenbapp.com" target="_blank" rel="noopener noreferrer">Join GreenB EcoRewards</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
