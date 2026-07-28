import { motion } from "framer-motion";
import { Zap, Shield, EyeOff, Heart, ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";

const trustItems = [
  { icon: Zap, title: "22+ เครื่องมือ", desc: "ครบทุกหมวด FPV", en: "Complete toolkit" },
  { icon: Shield, title: "ฟรีตลอดไป", desc: "ไม่มี paid wall", en: "Free forever" },
  { icon: EyeOff, title: "ไม่มี ads", desc: "ประสบการณ์สะอาด", en: "No advertisements" },
  { icon: Heart, title: "สร้างโดยคนไทย", desc: "Thai-made for global", en: "Made in Thailand" },
];

export function TrustSection() {
  return (
    <section className="section-top-border py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="border border-border/30 p-6 text-center hover:border-accent-green/30 hover:bg-card/40 transition-all duration-200"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              >
                <Icon size={24} className="text-accent-green mx-auto mb-3" strokeWidth={1.5} aria-hidden="true" />
                <div className="font-heading text-sm font-bold text-foreground mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-accent-green/50 font-mono mb-2">
                  {item.en}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12 bg-card/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo size={22} />
              <span className="font-heading text-sm font-bold text-foreground tracking-wider">
                CONFIG<span className="text-accent-green">DOCTOR</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              เครื่องมือวิเคราะห์ FPV Drone ครบวงจร สร้างโดยคนไทย เพื่อชุมชน FPV ทั่วโลก
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-heading text-xs tracking-widest text-accent-green mb-4">
              TOOLS
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#tools" className="hover:text-accent-green transition-colors">Drone Config Analyzer</a></li>
              <li><a href="#tools" className="hover:text-accent-green transition-colors">PID Advisor</a></li>
              <li><a href="#tools" className="hover:text-accent-green transition-colors">Blackbox Analyzer</a></li>
              <li><a href="#tools" className="hover:text-accent-green transition-colors">Motor Thermal</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-xs tracking-widest text-accent-green mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#tools" className="hover:text-accent-green transition-colors">CLI Reference</a></li>
              <li><a href="#tools" className="hover:text-accent-green transition-colors">FPV Glossary</a></li>
              <li><a href="#tools" className="hover:text-accent-green transition-colors">Firmware Checker</a></li>
              <li><a href="#tools" className="hover:text-accent-green transition-colors">Build Card</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading text-xs tracking-widest text-accent-green mb-4">
              COMMUNITY
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="https://github.com/Santipap250/configdoctor" className="hover:text-accent-green transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Issues & Feedback</a></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Contribute</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ConfigDoctor. Open source under MIT License.
          </div>
          <div className="flex items-center gap-6">
            <div className="text-xs text-muted-foreground">
              Made with <span className="text-accent-green">&#9829;</span> in Thailand
            </div>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent-green transition-colors font-heading tracking-wide"
            >
              <ArrowUp size={12} aria-hidden="true" />
              BACK TO TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
