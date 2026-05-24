import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Layout,
  Wrench,
  Cpu,
  Briefcase,
  Award,
  ExternalLink,
  Send,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinah Khan — Java Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Dinah Khan, a Java Full-Stack Developer building scalable backend systems and enterprise applications with Spring Boot, React.js, and PostgreSQL.",
      },
      { property: "og:title", content: "Dinah Khan — Java Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Scalable backend systems and enterprise full-stack applications. Java, Spring Boot, React.js, PostgreSQL.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const skillGroups = [
  { icon: Code2, title: "Languages", items: ["Java", "C++"] },
  {
    icon: Cpu,
    title: "Core CS",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "DBMS"],
  },
  { icon: Server, title: "Backend", items: ["Spring Boot", "REST APIs"] },
  { icon: Layout, title: "Frontend", items: ["React.js", "JavaScript", "HTML", "CSS"] },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { icon: Wrench, title: "Tools", items: ["Git", "JWT", "Docker"] },
];

const projects = [
  {
    title: "Cloud-Native Multi-Tenant SaaS Application",
    stack: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
    description:
      "Scalable multi-tenant SaaS with secure tenant isolation and RBAC. Designed REST APIs and backend workflows for subscription-based user management.",
  },
  {
    title: "E-Commerce Web Application",
    stack: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
    description:
      "Full-stack e-commerce platform with authentication, cart, and order management. Integrated REST APIs, business logic, and database operations using Spring Boot.",
  },
  {
    title: "BrailleLite — Accessibility Platform",
    stack: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "Tesseract OCR"],
    description:
      "Full-stack accessibility platform converting images and PDFs into Braille via OCR. JWT-based authentication with secure user and content management APIs.",
  },
  {
    title: "RescueLink Pro — Emergency Assistance Android App",
    stack: ["Android", "Java", "GPS Location", "SMS"],
    description:
      "Android emergency response app with real-time location tracking, SOS alerts, periodic location updates, and emergency contact workflows for user safety.",
  },
];

const experience = [
  {
    role: "Software Development Intern",
    company: "Winjit Technologies, Nashik",
    period: "May 2023 – July 2023",
    desc: "Gained exposure to enterprise software development workflows and backend engineering practices.",
  },
  {
    role: "Technical Intern",
    company: "Mahindra ITR Classroom",
    period: "September 2023",
    desc: "Participated in practical software development and problem-solving sessions.",
  },
];

const achievements = [
  'Published research paper "RescueLink Pro" in IJNRD',
  "Winner — Sanjivani Hackathon 2024",
  "Top 10 Finalist — NASA Space Apps Challenge",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{kicker}</div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
      </div>
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for software engineering roles
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Dinah Khan
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 text-xl md:text-2xl text-gradient font-medium">
            Java Full-Stack Developer
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionate about building scalable backend systems, enterprise applications, and modern
            full-stack solutions using Java, Spring Boot, React.js, and PostgreSQL.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-card/40 hover:bg-card text-foreground font-medium text-sm transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
            <div className="flex items-center gap-2 ml-2">
              <IconLink href="https://github.com/Dinah-02" label="GitHub">
                <Github size={18} />
              </IconLink>
              <IconLink href="https://www.linkedin.com/" label="LinkedIn">
                <Linkedin size={18} />
              </IconLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid place-items-center w-10 h-10 rounded-md border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
    >
      {children}
    </a>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader kicker="01 — About" title="Building reliable software, end to end." />
        <div className="grid md:grid-cols-3 gap-10">
          <Reveal className="md:col-span-2">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Java Full-Stack Developer with a strong foundation in{" "}
                <span className="text-foreground">Java, OOP, Data Structures & Algorithms,
                Operating Systems, and DBMS</span>. My focus is on backend engineering and
                designing scalable systems that hold up in real enterprise environments.
              </p>
              <p>
                I build production-grade applications using{" "}
                <span className="text-foreground">Spring Boot, React.js, REST APIs, and
                PostgreSQL</span>, with an eye for clean architecture, performance, and
                maintainability across the full stack.
              </p>
              <p>
                I enjoy solving hard problems — from designing multi-tenant SaaS workflows to
                tightening API security — and I'm driven by a passion for enterprise software
                development done right.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg border border-border bg-card/50 p-6 shadow-card-soft">
              <div className="text-xs uppercase tracking-widest text-primary mb-4">Focus</div>
              <ul className="space-y-3 text-sm">
                {[
                  "Backend engineering",
                  "Scalable system design",
                  "REST API design",
                  "Full-stack delivery",
                  "Enterprise software",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader kicker="02 — Skills" title="A pragmatic, full-stack toolkit." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 70}>
                <div className="group h-full rounded-lg border border-border bg-card/40 p-6 hover:border-primary/40 hover:bg-card transition-all hover:-translate-y-0.5 shadow-card-soft">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/30 group-hover:shadow-glow transition-shadow">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-medium">{g.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-muted-foreground"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader kicker="03 — Projects" title="Selected engineering work." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group relative h-full rounded-xl border border-border bg-card/50 p-7 overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card-soft">
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
                      {p.title}
                    </h3>
                    <a
                      href="https://github.com/Dinah-02"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="shrink-0 grid place-items-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] tracking-wide px-2 py-0.5 rounded border border-primary/30 bg-primary/10 text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/Dinah-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={14} /> View on GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader kicker="04 — Experience" title="Where I've worked." />
        <div className="relative pl-6 md:pl-8 border-l border-border space-y-8">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 100}>
              <div className="relative">
                <span className="absolute -left-[31px] md:-left-[37px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="rounded-lg border border-border bg-card/40 p-6 hover:border-primary/40 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Briefcase size={12} className="text-primary" />
                    <span>{e.period}</span>
                  </div>
                  <h3 className="font-medium text-foreground">{e.role}</h3>
                  <div className="text-sm text-primary mb-3">{e.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader kicker="05 — Achievements" title="Recognition & milestones." />
        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-card/40 p-6 hover:border-primary/40 transition-colors shadow-card-soft">
                <Award size={18} className="text-primary mb-4" />
                <p className="text-sm text-foreground/90 leading-relaxed">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-2xl border border-border bg-card/50 p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                06 — Resume
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Want the full picture?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Grab my resume for a complete overview of experience, projects, and engineering
                skills.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:dinahkhan02@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader kicker="07 — Contact" title="Let's build something solid." />
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Open to backend, full-stack, and software engineering roles. The fastest way to
                reach me is email — I usually reply within a day.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:dinahkhan02@gmail.com"
                  className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-md border border-border bg-card/40">
                    <Mail size={15} />
                  </span>
                  dinahkhan02@gmail.com
                </a>
                <a
                  href="https://github.com/Dinah-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-md border border-border bg-card/40">
                    <Github size={15} />
                  </span>
                  github.com/Dinah-02
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid place-items-center w-9 h-9 rounded-md border border-border bg-card/40">
                    <MapPin size={15} />
                  </span>
                  India
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card/50 p-6 md:p-8 space-y-4 shadow-card-soft"
            >
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all"
              >
                <Send size={15} />
                {status === "sent" ? "Opening your mail app…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        maxLength={255}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Dinah Khan. Crafted with care.</div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Dinah-02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:dinahkhan02@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
