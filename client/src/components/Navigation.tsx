import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "หน้าแรก", labelEn: "Home", href: "#top", id: "top" },
  { label: "เครื่องมือ", labelEn: "Tools", href: "#tools", id: "tools" },
  { label: "วิธีใช้งาน", labelEn: "About", href: "#about", id: "about" },
  { label: "GitHub", labelEn: "GitHub", href: "https://github.com/Santipap250/configdoctor", id: "github" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", "tools", "about"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <a href="#main-content" className="skip-link">
        ข้ามไปเนื้อหาหลัก
      </a>

      {/* Animated gradient top border — a live "signal" strip */}
      <div className="h-[2px] bg-gradient-to-r from-accent-green via-accent-cyan to-accent-green animate-border-sweep" />

      {/* Nav bar */}
      <nav
        className={`glass border-b transition-all duration-300 ${
          scrolled ? "border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "border-border/30"
        }`}
        aria-label="หลัก"
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo size={26} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="font-heading text-lg font-bold text-foreground tracking-wider group-hover:text-accent-green transition-colors duration-150">
              CONFIG<span className="text-accent-green">DOCTOR</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.id === activeId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors duration-150 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-accent-green after:transition-all after:duration-200 ${
                    isActive
                      ? "text-accent-green after:w-full"
                      : "text-muted-foreground hover:text-accent-green after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-accent-green text-background hover:bg-accent-green/80 font-heading text-xs tracking-wider"
              asChild
            >
              <a href="#tools">เริ่มใช้งาน</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-accent-green h-10 w-10"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden glass border-b border-border/50 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium py-3 px-1 min-h-[44px] flex items-center transition-colors ${
                    link.id === activeId ? "text-accent-green" : "text-muted-foreground hover:text-accent-green"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <span className="ml-2 text-xs text-muted-foreground/50 font-mono">{link.labelEn}</span>
                </a>
              ))}
              <Button
                size="sm"
                className="mt-2 bg-accent-green text-background hover:bg-accent-green/80 font-heading text-xs tracking-wider h-11"
                asChild
              >
                <a href="#tools" onClick={() => setMobileOpen(false)}>
                  เริ่มใช้งาน
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
