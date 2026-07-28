import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "https://github.com/Santipap250/configdoctor" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Animated gradient top border */}
      <div className="h-[2px] bg-gradient-to-r from-accent-green via-accent-cyan to-accent-green" />

      {/* Nav bar */}
      <nav className="glass border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/logo_b3ac4a6e.png"
              alt="ConfigDoctor"
              className="w-8 h-8 object-contain"
            />
            <span className="font-heading text-lg font-bold text-foreground tracking-wider group-hover:text-accent-green transition-colors duration-150">
              CONFIG<span className="text-accent-green">DOCTOR</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent-green transition-colors duration-150 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-accent-green after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-accent-green text-background hover:bg-accent-green/80 font-heading text-xs tracking-wider"
            >
              GET STARTED
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-accent-green"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden glass border-b border-border/50 animate-in slide-in-from-top duration-200">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent-green py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
