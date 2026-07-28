// ConfigDoctor tools data — 22 tools in 7 categories
// Source: extracted from landing.html template

export interface Tool {
  id: string;
  name: string;
  nameTh: string;
  description: string;
  category: string;
  icon: string;
  href: string;
}

export interface Category {
  id: string;
  label: string;
  labelTh: string;
  color: string;
}

export const categories: Category[] = [
  { id: "all", label: "All", labelTh: "ทั้งหมด", color: "text-accent-green" },
  { id: "analysis", label: "Analysis", labelTh: "วิเคราะห์", color: "text-accent-gold" },
  { id: "config", label: "Config", labelTh: "ตั้งค่า", color: "text-accent-green" },
  { id: "training", label: "Training", labelTh: "ฝึกซ้อม", color: "text-accent-purple" },
  { id: "hardware", label: "Hardware", labelTh: "ฮาร์ดแวร์", color: "text-accent-cyan" },
  { id: "utilities", label: "Utilities", labelTh: "ยูทิลิตี้", color: "text-accent-warm" },
];

export const tools: Tool[] = [
  // Analysis
  { id: "drone-config", name: "Drone Config Analyzer", nameTh: "วิเคราะห์สเปคโดรน", description: "วิเคราะห์สเปคโดรนและรับผลลัพธ์ PID CLI", category: "analysis", icon: "Drone", href: "#" },
  { id: "pid-advisor", name: "PID Advisor", nameTh: "PID ปรับแต่ง", description: "แนะนำค่า PID ที่เหมาะสมตามสเปค", category: "analysis", icon: "BarChart3", href: "#" },
  { id: "blackbox", name: "Blackbox Analyzer", nameTh: "วิเคราะห์ Blackbox", description: "วิเคราะห์ flight log จาก blackbox", category: "analysis", icon: "Activity", href: "#" },
  { id: "motor-thermal", name: "Motor Thermal", nameTh: "มอเตอร์ความร้อน", description: "คำนวณอุณหภูมิและ thermal performance", category: "analysis", icon: "Thermometer", href: "#" },
  { id: "battery-health", name: "Battery Health", nameTh: "แบตสุขภาพ", description: "ตรวจสอบสุขภาพแบตเตอรี่ LiPo", category: "analysis", icon: "Battery", href: "#" },
  { id: "esc-checker", name: "ESC Checker", nameTh: "ESC ตรวจสอบ", description: "ตรวจสอบ ESC compatibility", category: "analysis", icon: "Zap", href: "#" },
  { id: "vtx-range", name: "VTX Range Calculator", nameTh: "VTX ระยะ", description: "คำนวณระยะ VTX และ channel interference", category: "analysis", icon: "Radio", href: "#" },
  { id: "rpm-filter", name: "RPM Filter Calculator", nameTh: "RPM Filter", description: "คำนวณ RPM filter values", category: "analysis", icon: "Filter", href: "#" },
  { id: "motor-prop", name: "Motor & Prop Calculator", nameTh: "มอเตอร์/ใบพัด", description: "คำนวณ thrust, current, efficiency", category: "analysis", icon: "Wind", href: "#" },
  // Config
  { id: "bf-wizard", name: "BF Wizard", nameTh: "BF Wizard", description: "Betaflight configuration wizard", category: "config", icon: "Wrench", href: "#" },
  { id: "rates-visualizer", name: "Rates Visualizer", nameTh: "Rates ภาพรวม", description: "ภาพรวม curves ของ rates settings", category: "config", icon: "Graph", href: "#" },
  { id: "tuning-log", name: "Tuning Log", nameTh: "บันทึก Tuning", description: "บันทึกและเปรียบเทียบ tuning log", category: "config", icon: "ClipboardList", href: "#" },
  { id: "build-card", name: "Build Card", nameTh: "Build Card", description: "สร้าง build card แสดงสเปคโดรน", category: "config", icon: "CreditCard", href: "#" },
  // Training
  { id: "fpv-trainer", name: "FPV Trainer", nameTh: "FPV ฝึกซ้อม", description: "ฝึกบิน FPV แบบ interactive", category: "training", icon: "Gamepad2", href: "#" },
  { id: "leaderboard", name: "Leaderboard", nameTh: "อันดับ", description: "อันดับคะแนนผู้เล่น FPV Trainer", category: "training", icon: "Trophy", href: "#" },
  // Hardware
  { id: "hardware-check", name: "Hardware Checker", nameTh: "ตรวจสอบฮาร์ดแวร์", description: "ตรวจสอบ hardware compatibility", category: "hardware", icon: "Cpu", href: "#" },
  { id: "signal-tester", name: "Signal Tester", nameTh: "ทดสอบสัญญาณ", description: "ทดสอบความแรงสัญญาณและ latency", category: "hardware", icon: "Signal", href: "#" },
  // Utilities
  { id: "unit-converter", name: "Unit Converter", nameTh: "แปลงหน่วย", description: "แปลงหน่วยระหว่าง metric/imperial", category: "utilities", icon: "ArrowLeftRight", href: "#" },
  { id: "cli-reference", name: "CLI Reference", nameTh: "CLI อ้างอิง", description: "อ้างอิง Betaflight CLI commands", category: "utilities", icon: "Terminal", href: "#" },
  { id: "firmware-check", name: "Firmware Checker", nameTh: "Firmware ตรวจสอบ", description: "ตรวจสอบ firmware version และ compatibility", category: "utilities", icon: "Download", href: "#" },
  { id: "glossary", name: "FPV Glossary", nameTh: "ศัพท์ FPV", description: "พจนานุกรมศัพท์ FPV drone", category: "utilities", icon: "BookOpen", href: "#" },
  { id: "calculator", name: "General Calculator", nameTh: "เครื่องคิดเลข", description: "เครื่องคิดเลขทั่วไปสำหรับ FPV", category: "utilities", icon: "Calculator", href: "#" },
];

// Icon name to SVG path mapping (simple icons)
export const iconPaths: Record<string, string> = {
  Drone: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  BarChart3: "M3 3v18h18 M7 16V8 M11 16V4 M15 16v-5 M19 16V9",
  Activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  Thermometer: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
  Battery: "M17 7H2v10h15V7Z M17 10h3v4h-3",
  Zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  Radio: "M4.93 4.93a10 10 0 0 1 14.14 0 M7.76 7.76a6 6 0 0 1 8.48 0 M9.54 9.54a3 3 0 0 1 4.24 0 M12 13.5V18",
  Filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
  Wind: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2 M9.6 4.6A2 2 0 1 1 11 8H2 M12.6 19.4A2 2 0 1 0 14 16H2",
  Wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  Graph: "M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3",
  ClipboardList: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z M8 10h8 M8 14h4 M8 18h6",
  CreditCard: "M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z M2 10h20",
  Gamepad2: "M6 12h4m-2-2v4m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z M19 9a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3Z M6 9a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3Z M12 21v-2m0-7V9 M2 12h20",
  Trophy: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22 M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22 M18 2H6v7a6 6 0 0 0 12 0V2Z",
  Cpu: "M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z M10 6V2h4v4 M10 22v-4h4v4 M2 10h4v4H2 M22 10h-4v4h4 M6 4.5A1.5 1.5 0 1 1 6 7.5 1.5 1.5 0 0 1 6 4.5Z M18 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
  Signal: "M2 20h.01 M7 20v-4 M12 20v-8 M17 20V8 M22 4v16",
  ArrowLeftRight: "M8 3 4 7l4 4 M4 7h16 M16 21l4-4-4-4 M20 17H4",
  Terminal: "M4 17l6-6-6-6 M12 19h8",
  Download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  BookOpen: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  Calculator: "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M8 6h.01 M12 6h.01 M16 6h.01 M8 10h.01 M12 10h.01 M16 10h.01 M8 14h.01 M12 14h.01 M16 14h.01 M8 18h.01 M12 18h.01 M16 18h.01",
};

export const categoryColors: Record<string, string> = {
  analysis: "border-accent-gold/30 hover:border-accent-gold/60",
  config: "border-accent-green/30 hover:border-accent-green/60",
  training: "border-accent-purple/30 hover:border-accent-purple/60",
  hardware: "border-accent-cyan/30 hover:border-accent-cyan/60",
  utilities: "border-accent-warm/30 hover:border-accent-warm/60",
};

export const categoryIcons: Record<string, string> = {
  analysis: "text-accent-gold",
  config: "text-accent-green",
  training: "text-accent-purple",
  hardware: "text-accent-cyan",
  utilities: "text-accent-warm",
};
