import { Button } from "@/components/ui/button";
import { Terminal, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_80653cc8.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-10 h-10 border-t-2 border-l-2 border-accent-green/30 pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-10 h-10 border-b-2 border-r-2 border-accent-green/30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent-green/20 bg-accent-green/5 text-accent-green text-xs font-heading tracking-widest mb-6">
              <Zap size={12} />
              <span>v8.0 APEX</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              เครื่องมือวิเคราะห์
              <br />
              <span className="text-accent-green">FPV Drone</span>
              <br />
              ครบวงจร
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              วิเคราะห์ PID, ตรวจสอบสเปค, คำนวณ thrust, ทดสอบสัญญาณ — 22 เครื่องมือในที่เดียว ฟรี ไม่มี ads
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent-green text-background hover:bg-accent-green/80 font-heading text-sm tracking-wider h-12 px-8"
              >
                <Terminal size={16} className="mr-2" />
                START ANALYZING
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent-green/30 text-accent-green hover:bg-accent-green/10 font-heading text-sm tracking-wider h-12 px-8"
              >
                VIEW TOOLS
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div>
                <div className="font-heading text-2xl font-bold text-accent-green">22+</div>
                <div className="text-xs text-muted-foreground tracking-wide">เครื่องมือ</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-foreground">ฟรี</div>
                <div className="text-xs text-muted-foreground tracking-wide">ตลอดไป</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-foreground">0</div>
                <div className="text-xs text-muted-foreground tracking-wide">โฆษณา</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-accent-green">TH</div>
                <div className="text-xs text-muted-foreground tracking-wide">สร้างโดยคนไทย</div>
              </div>
            </div>
          </div>

          {/* Right: CLI preview */}
          <div className="hidden lg:block">
            <div className="bg-card border border-border/50 glow-green p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                <div className="w-3 h-3 rounded-full bg-accent-green/60" />
                <div className="w-3 h-3 rounded-full bg-accent-cyan/40" />
                <div className="w-3 h-3 rounded-full bg-accent-warm/40" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">configdoctor — terminal</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div>
                  <span className="text-accent-green">$</span>
                  <span className="text-muted-foreground"> configdoctor analyze</span>
                </div>
                <div className="text-muted-foreground">
                  {"  "}Input drone specs...
                </div>
                <div className="text-accent-green">
                  {"  "}&#x2713; Frame: 5" quadcopter
                </div>
                <div className="text-accent-green">
                  {"  "}&#x2713; Motors: 2207 1700KV
                </div>
                <div className="text-accent-green">
                  {"  "}&#x2713; FC: F4/F7 target detected
                </div>
                <div className="text-accent-cyan">
                  {"  "}&#x2192; Generating PID values...
                </div>
                <div className="text-accent-cyan">
                  {"  "}&#x2192; Calculating RPM filter...
                </div>
                <div className="text-accent-warm">
                  {"  "}&#x2192; Checking ESC thermal limits...
                </div>
                <div className="text-foreground mt-2">
                  {"  "}<span className="text-accent-green">CLI Output:</span>
                </div>
                <div className="bg-background/50 p-3 mt-1 text-xs leading-relaxed">
                  <div className="text-accent-green">set p_pitch = 47</div>
                  <div className="text-accent-green">set i_pitch = 84</div>
                  <div className="text-accent-green">set d_pitch = 39</div>
                  <div className="text-accent-cyan mt-1">set rpm_filter = ON</div>
                  <div className="text-accent-cyan">set rpm_filter_harmonics = 2</div>
                  <div className="text-muted-foreground mt-1"># Generated by ConfigDoctor v8.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
