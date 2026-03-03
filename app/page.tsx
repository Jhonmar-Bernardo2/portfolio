import type { Metadata } from "next";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Github,
  LayoutDashboard,
  Mail,
  Server,
  Sparkles,
  Wrench,
  Blocks,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
};

type Project = {
  name: string;
  stack: string[];
  outcome: string;
  repoHint: string;
  tint: string;
  role: "Full-stack" | "Backend" | "Frontend";
  year?: string;
  features: string[];
};

const githubUsername = "Jhonmar-Bernardo2";
const githubProfile = `https://github.com/${githubUsername}`;

const highlights = [
  "Production systems with Laravel + Vue",
  "Modern frontend with Next.js + TypeScript",
  "Clean architecture and practical delivery",
];

const metrics = [
  { label: "Years of hands-on dev", value: "3+" },
  { label: "Projects delivered", value: "18" },
  { label: "Typical launch cycle", value: "2-6 weeks" },
];

const projects: Project[] = [
  {
    name: "Document Scanner System",
    stack: ["Laravel", "Vue", "OCR Workflow"],
    outcome:
      "Reduced manual document encoding time by 70% through a structured scan-to-record process.",
    repoHint: "document-scanner",
    tint: "from-sky-500/15 to-cyan-500/15",
    role: "Full-stack",
    year: "2025",
    features: [
      "OCR pipeline with validation",
      "Role-based access for operators",
      "Searchable records and tracking",
    ],
  },
  {
    name: "Tracerlink Alumni Tracker",
    stack: ["Laravel", "MySQL", "Inertia"],
    outcome:
      "Centralized alumni records with role-based dashboards and searchable reporting workflows.",
    repoHint: "tracerlink",
    tint: "from-emerald-500/15 to-teal-500/15",
    role: "Full-stack",
    year: "2024",
    features: [
      "Registrar/admin/user role dashboards",
      "Search, filters, and reporting",
      "Validation and data integrity flows",
    ],
  },
  {
    name: "Ticketing System",
    stack: ["Laravel", "Vue", "REST API"],
    outcome:
      "Built a ticket lifecycle system that improved support visibility and response turnaround.",
    repoHint: "ticketing",
    tint: "from-amber-500/15 to-orange-500/15",
    role: "Backend",
    year: "2023",
    features: [
      "Ticket lifecycle and status tracking",
      "SLA-focused workflow improvements",
      "API-driven updates and notifications",
    ],
  },
];

const skillGroups = [
  {
    title: "Backend",
    items: ["Laravel", "PHP", "REST API", "Queues", "Auth / RBAC"],
  },
  {
    title: "Frontend",
    items: ["Vue", "Next.js", "TypeScript", "Tailwind CSS", "UI Systems"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Indexing", "Migrations"],
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD Basics", "Nginx", "VPS Deploy"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Figma"],
  },
];

const expertise = [
  {
    title: "Backend Architecture",
    description:
      "Designing robust domain logic and maintainable APIs with Laravel-first architecture.",
    icon: Server,
  },
  {
    title: "Frontend Engineering",
    description:
      "Crafting responsive, accessible interfaces with Vue and Next.js that feel premium.",
    icon: Code2,
  },
  {
    title: "Data Design",
    description:
      "Structuring performant SQL schemas and query patterns for scale and reliability.",
    icon: Database,
  },
  {
    title: "Admin Dashboards",
    description:
      "Building role-aware internal tools with clear UX and high operator efficiency.",
    icon: LayoutDashboard,
  },
];

const storyPoints = [
  "I build internal tools and business systems that reduce manual work and errors.",
  "I focus on UX + backend structure with strong validation, role-aware access, and data integrity.",
  "I prioritize maintainable delivery so teams can ship faster without sacrificing quality.",
];

const strengths = [
  "Business-first problem solving",
  "Clean architecture with practical UX",
  "Reliable execution and clear communication",
];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "MVP Build (Laravel + Vue / Next)",
    description: "From planning to launch-ready MVP with clean architecture and scalable foundations.",
    icon: Blocks,
  },
  {
    title: "Admin Dashboards & Role-Based Systems",
    description: "Operational dashboards, permissions, and workflows tailored to your team structure.",
    icon: ShieldCheck,
  },
  {
    title: "OCR + Document Workflows",
    description: "Digitize manual document processes with validation and searchable data pipelines.",
    icon: Database,
  },
  {
    title: "API Integrations + Automation",
    description: "Connect external services and automate repetitive processes with reliable backend jobs.",
    icon: Server,
  },
  {
    title: "Deployment (Docker + CI/CD Basics)",
    description: "Set up reproducible deployment flow for smoother releases and easier handover.",
    icon: Wrench,
  },
];

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "Clarify requirements, scope, risks, and success metrics before writing code.",
    icon: Sparkles,
  },
  {
    title: "UI/UX + Wireframe",
    description: "Create clean flows and interfaces that match real user and operator tasks.",
    icon: LayoutDashboard,
  },
  {
    title: "Build + QA",
    description: "Implement features with structured testing, validation, and quality checks.",
    icon: Code2,
  },
  {
    title: "Deploy + Iterate",
    description: "Launch safely, monitor results, and improve based on real usage feedback.",
    icon: ArrowUpRight,
  },
];

type Practice = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const toolingPractices: Practice[] = [
  {
    title: "Validation & Data Integrity",
    description: "Structured request validation and guardrails to keep data clean and reliable.",
    icon: ShieldCheck,
  },
  {
    title: "RBAC / Permissions",
    description: "Role-aware access patterns for admins, operators, and end users.",
    icon: Server,
  },
  {
    title: "Logging / Audit Trails",
    description: "Action visibility for debugging, accountability, and operational confidence.",
    icon: Cpu,
  },
  {
    title: "Performance Basics",
    description: "Query optimization, pagination, and pragmatic API response tuning.",
    icon: Database,
  },
  {
    title: "Testing Foundations",
    description: "Basic test coverage with PHPUnit/Pest for safer releases and refactors.",
    icon: Wrench,
  },
];

export const metadata: Metadata = {
  title: "Jhonmar Bernardo | Full-Stack Web Developer",
  description:
    "Portfolio of Jhonmar Bernardo, focused on shipping reliable and polished web products.",
};

async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=8&type=owner`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );

    if (!response.ok) return [];
    const repos = (await response.json()) as GithubRepo[];
    return repos;
  } catch {
    return [];
  }
}

function resolveProjectLink(project: Project, repos: GithubRepo[]): string {
  const match = repos.find((repo) =>
    repo.name.toLowerCase().includes(project.repoHint.toLowerCase())
  );
  return match?.html_url ?? `${githubProfile}?tab=repositories`;
}

export default async function Home() {
  const githubRepos = await getGithubRepos();

  return (
    <div className="portfolio-shell min-h-screen text-slate-900">
      {/* BG glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-[-8%] h-96 w-96 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute top-40 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-orange-200/35 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-3 z-50 mx-auto mt-4 w-[min(1120px,92%)] rounded-2xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] md:top-4 md:rounded-full md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-slate-900 text-xl">
            JB.
          </a>

          <nav className="hidden gap-4 text-xs font-semibold tracking-wide text-slate-600 md:flex lg:gap-7 lg:text-sm">
            <a href="#about" className="hover:text-slate-900 transition">
              About
            </a>
            <a href="#services" className="hover:text-slate-900 transition">
              Services
            </a>
            <a href="#process" className="hover:text-slate-900 transition">
              Process
            </a>
            <a href="#projects" className="hover:text-slate-900 transition">
              Projects
            </a>
            <a href="#expertise" className="hover:text-slate-900 transition">
              My Expertise
            </a>
            <a href="#skills" className="hover:text-slate-900 transition">
              Skills
            </a>
            <a href="#github" className="hover:text-slate-900 transition">
              GitHub
            </a>
            <a href="#contact" className="hover:text-slate-900 transition">
              Contact
            </a>
          </nav>

          {/* FIX: visible buttons on mobile + better contrast */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-sm active:scale-[0.98]"
            >
              <Blocks size={14} />
              Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm active:scale-[0.98]"
            >
              <Mail size={14} />
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="home" className="mx-auto w-[min(1120px,92%)] pb-20 pt-16 md:pt-20">
        {/* Hero */}
        <section className="reveal-up grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
              <Sparkles size={14} />
              Available for new projects
            </div>

            <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.03] tracking-[-0.03em] text-slate-900 sm:text-5xl md:text-7xl">
              Jhonmar Bernardo
              <span className="block bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Full-Stack Web Developer
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              I build production-ready web apps that combine clean backend architecture and polished user interfaces.
              My main stack is Laravel, Vue, and Next.js.
            </p>

            {/* FIX: Buttons always visible + better focus ring */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
              >
                Contact Me <Mail size={16} />
              </a>
              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
              >
                GitHub <Github size={16} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-2xl font-black text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="reveal-up rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.09)]">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-900">
              <Cpu size={18} className="text-sky-600" /> Current Focus
            </h3>

            <div className="space-y-4 text-sm text-slate-600">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Open for freelance and full-time roles
            </div>
          </aside>
        </section>

        {/* About / Story */}
        <section id="about" className="reveal-up mt-24">
          <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-[0_10px_32px_rgba(15,23,42,0.06)] md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Sparkles size={14} className="text-sky-600" />
              About / Story
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">What I Build and Why</h2>

            <div className="mt-6 space-y-3 text-base leading-relaxed text-slate-600">
              {storyPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* My Expertise */}
        <section id="expertise" className="reveal-up mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <ShieldCheck size={14} className="text-sky-600" />
              My Expertise
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              What I Bring to Engineering Teams
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Strong backend foundations + premium UI execution-focused on maintainability, speed, and clear UX.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_35px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50">
                    <Icon size={20} className="text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="reveal-up mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Wrench size={14} className="text-sky-600" />
              Services
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">What I Can Deliver</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_35px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50">
                    <Icon size={20} className="text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="reveal-up mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Code2 size={14} className="text-sky-600" />
              Process
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">How I Work</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_35px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50">
                      <Icon size={20} className="text-sky-600" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Tooling & Practices */}
        <section id="practices" className="reveal-up mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <ShieldCheck size={14} className="text-sky-600" />
              Tooling & Practices
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Engineering Discipline
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {toolingPractices.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_35px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50">
                    <Icon size={20} className="text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="reveal-up mt-24">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Featured Work
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Projects with Measurable Impact
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={resolveProjectLink(project, githubRepos)}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_35px_rgba(15,23,42,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.tint} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex gap-2">
                      {project.stack.slice(0, 2).map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        {project.role}
                      </span>
                      {project.year ? (
                        <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                          {project.year}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-3 inline-flex items-center gap-1 text-xs font-bold text-sky-700">
                    Open Repo <ArrowUpRight size={14} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.outcome}</p>
                  <ul className="mt-4 space-y-1.5 text-xs font-semibold text-slate-600">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* GitHub */}
        <section id="github" className="reveal-up mt-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                GitHub
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Latest Public Repositories
              </h2>
            </div>

            {/* FIX: make button visible on any background */}
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              <Github size={16} />
              <span>Open Profile</span>
            </a>
          </div>

          {githubRepos.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {githubRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)] transition hover:border-sky-300 hover:bg-sky-50/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                >
                  <h3 className="text-base font-bold text-slate-900">{repo.name}</h3>
                  <p className="mt-2 min-h-12 text-sm text-slate-600">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{repo.language ?? "N/A"}</span>
                    <span>{repo.stargazers_count} stars</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-base font-bold text-slate-900">
                Unable to load repositories right now.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                You can still view all repositories directly from your GitHub profile.
              </p>
              <a
                href={`${githubProfile}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-2 text-sm font-bold text-sky-700 hover:bg-sky-100"
              >
                Open Repositories <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </section>

        {/* Skills */}
        <section id="skills" className="reveal-up mt-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Wrench size={14} className="text-sky-600" />
              Stack
            </div>
            <h2 className="mt-3 text-center text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Tech Stack Breakdown
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="reveal-up mt-24 rounded-3xl border border-slate-200 bg-slate-900 px-8 py-12 text-center text-slate-100 shadow-[0_20px_40px_rgba(2,6,23,0.25)] md:px-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            Let&apos;s build your next product
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I am open to freelance projects and full-time opportunities focused on web systems and product delivery.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Based in PH (Asia/Manila) | Available: Freelance / Full-time | Typical response: &lt;24h
          </p>

          {/* FIX: strong contrast + consistent button styles */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jhonmar.bernardo@analytica.ph"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Mail size={16} />
              <span>jhonmar.bernardo@analytica.ph</span>
            </a>
            <a
              href="/resume.pdf"
              download="Jhonmar-Bernardo-Resume.pdf"
              aria-label="Download Jhonmar Bernardo Resume PDF"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Download Resume <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:jhonmar.bernardo@analytica.ph?subject=Book%20a%20Call&body=Hi%20Jhonmar%2C%20I%20would%20like%20to%20schedule%20a%20call%20about%20a%20project."
              className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-6 py-3 text-sm font-bold text-sky-800 shadow-sm transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>Schedule a Call</span>
              <Mail size={16} />
            </a>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900/40 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:border-slate-400 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Github size={16} /> github.com/Jhonmar-Bernardo2
            </a>
          </div>

          <p className="mt-10 text-xs font-medium text-slate-400">
            (c) 2026 JHONMAR BERNARDO - BUILT WITH NEXT.JS
          </p>
        </footer>
      </main>
    </div>
  );
}
