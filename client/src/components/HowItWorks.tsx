import { Upload, Settings, Download } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "ใส่ข้อมูล",
    titleEn: "Input Specs",
    desc: "กรอกสเปคโดรนของคุณ — frame size, motors, FC, ESC, RX",
    descEn: "Enter your drone specs",
  },
  {
    num: "02",
    icon: Settings,
    title: "วิเคราะห์",
    titleEn: "Analyze",
    desc: "ระบบวิเคราะห์ PID, thermal, thrust, signal strength อัตโนมัติ",
    descEn: "AI-powered analysis",
  },
  {
    num: "03",
    icon: Download,
    title: "รับผลลัพธ์",
    titleEn: "Get CLI Output",
    desc: "คัดลอก CLI values พร้อมใช้ paste เข้า Betaflight Configurator ได้ทันที",
    descEn: "Copy & paste ready",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="section-top-border py-20">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div className="text-xs font-heading tracking-widest text-accent-green mb-3">
            WORKFLOW
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            ทำงานอย่างไร
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            3 ขั้นตอนง่ายๆ — จากสเปคโดรนถึง PID CLI ที่พร้อมใช้
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-border/30" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative text-center">
                {/* Step number + icon */}
                <div className="relative z-10 inline-flex flex-col items-center mb-6">
                  <div className="w-24 h-24 border border-accent-green/20 bg-card flex items-center justify-center mb-4">
                    <Icon size={32} className="text-accent-green" strokeWidth={1.5} />
                  </div>
                  <div className="font-heading text-xs tracking-widest text-muted-foreground/50">
                    STEP {step.num}
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-accent-green/60 font-mono mb-3">
                  {step.titleEn}
                </p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
