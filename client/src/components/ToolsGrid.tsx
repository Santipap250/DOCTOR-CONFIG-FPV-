import { useState, useMemo } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tools, categories, categoryColors, categoryIcons } from "@/lib/tools-data";

export default function ToolsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    let result = tools;

    if (activeCategory !== "all") {
      result = result.filter((t) => t.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.nameTh.includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.description.includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section id="tools" className="section-top-border py-20 bg-background">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-12">
          <div className="text-xs font-heading tracking-widest text-accent-green mb-3">
            TOOLKIT
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            เครื่องมือทั้งหมด
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            22 เครื่องมือจัดหมวดหมู่ 5 กลุ่ม — วิเคราะห์, ตั้งค่า, ฝึกซ้อม, ฮาร์ดแวร์, ยูทิลิตี้
          </p>
        </div>

        {/* Category tabs + Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-heading tracking-wider border transition-all duration-150 ${
                  activeCategory === cat.id
                    ? "border-accent-green/60 bg-accent-green/10 text-accent-green"
                    : "border-border/40 text-muted-foreground hover:border-accent-green/30 hover:text-accent-green"
                }`}
              >
                {cat.labelTh} ({cat.label})
              </button>
            ))}
          </div>

          <div className="relative md:ml-auto md:w-72">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="ค้นหาเครื่องมือ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 bg-card border-border/40 text-sm font-body focus:border-accent-green/50"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="text-xs text-muted-foreground mb-6 font-mono">
          {filteredTools.length} tools found
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool, i) => (
            <a
              key={tool.id}
              href={tool.href}
              className={`group relative border ${
                categoryColors[tool.category] || "border-border/30"
              } bg-card/50 p-5 transition-all duration-150 hover:bg-card`}
              style={{ animationDelay: `${i * 30}ms` }}
            >
              {/* Category indicator */}
              <div className={`absolute top-0 right-0 w-1 h-full ${
                tool.category === "analysis" ? "bg-accent-gold/20" :
                tool.category === "config" ? "bg-accent-green/20" :
                tool.category === "training" ? "bg-accent-purple/20" :
                tool.category === "hardware" ? "bg-accent-cyan/20" :
                "bg-accent-warm/20"
              }`} />

              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 ${categoryIcons[tool.category] || "text-accent-green"}`}>
                  <ToolIcon name={tool.icon} />
                </div>
                <ChevronRight
                  size={14}
                  className="text-muted-foreground/40 group-hover:text-accent-green group-hover:translate-x-1 transition-all duration-150"
                />
              </div>

              <h3 className="font-heading text-sm font-bold text-foreground mb-1 group-hover:text-accent-green transition-colors duration-150">
                {tool.name}
              </h3>
              <p className="text-xs text-accent-green/70 mb-2 font-body">
                {tool.nameTh}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground text-sm">ไม่พบเครื่องมือที่ตรงกับคำค้นหา</div>
          </div>
        )}
      </div>
    </section>
  );
}

function ToolIcon({ name }: { name: string }) {
  const path = getIconPath(name);
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

function getIconPath(name: string): string {
  const paths: Record<string, string> = {
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
    Gamepad2: "M6 12h4m-2-2v4m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    Trophy: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M18 2H6v7a6 6 0 0 0 12 0V2Z",
    Cpu: "M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z M10 6V2h4v4 M10 22v-4h4v4 M2 10h4v4H2 M22 10h-4v4h4",
    Signal: "M2 20h.01 M7 20v-4 M12 20v-8 M17 20V8 M22 4v16",
    ArrowLeftRight: "M8 3 4 7l4 4 M4 7h16 M16 21l4-4-4-4 M20 17H4",
    Terminal: "M4 17l6-6-6-6 M12 19h8",
    Download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    BookOpen: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    Calculator: "M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M8 6h.01 M12 6h.01 M16 6h.01 M8 10h.01 M12 10h.01 M16 10h.01",
  };
  return paths[name] || paths.Drone;
}
