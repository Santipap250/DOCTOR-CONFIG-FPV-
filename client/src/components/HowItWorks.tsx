import { motion } from "framer-motion";
import { Upload, Settings, Download } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "ใส่ข้อมูล",
    titleEn: "Input Specs",
    desc: "กรอกสเปคโดรนของคุณ — frame size, motors, FC, ESC, RX",
  },
  {
    num: "02",
    icon: Settings,
    title: "วิเคราะห์",
    titleEn: "Analyze",
    desc: "ระบบวิเคราะห์ PID, thermal, thrust, signal strength อัตโนมัติ",
  },
  {
    num: "03",
    icon: Download,
    title: "รับผลลัพธ์",
    titleEn: "Get CLI Output",
    desc: "คัดลอก CLI values พร้อมใช้ paste เข้า Betaflight Configurator ได้ทันที",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="section-top-border py-20">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-xs font-heading tracking-widest text-accent-green mb-3">
            WORKFLOW
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            ทำงานอย่างไร
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            3 ขั้นตอนง่ายๆ — จากสเปคโดรนถึง PID CLI ที่พร้อมใช้
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) — draws in on scroll, like a signal trace */}
          <motion.div
            className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-accent-green/60 via-accent-cyan/40 to-accent-green/60 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
              >
                {/* Step number + icon */}
                <div className="relative z-10 inline-flex flex-col items-center mb-6">
                  <div className="w-24 h-24 border border-accent-green/20 bg-card flex items-center justify-center mb-4 transition-colors duration-200 hover:border-accent-green/50">
                    <Icon size={32} className="text-accent-green" strokeWidth={1.5} aria-hidden="true" />
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
