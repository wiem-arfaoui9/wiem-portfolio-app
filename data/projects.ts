import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "minasa",
    flagship: true,
    name: "Minassa",
    tagline: "Web education platform for Tunisian baccalaureate students",
    description:
      "Minassa is a web education platform aimed at baccalaureate students in Tunisia. It is designed to bring courses, exercises, quizzes and gamification together in one modern learning experience, with dedicated spaces for students, teachers and administrators.",
    status: "In progress",
    architecture: [
      { label: "Next.js Frontend", detail: "User interface built with Next.js and React" },
      { label: "Laravel REST API", detail: "Backend with authentication and role management (Sanctum)" },
      { label: "MySQL Database", detail: "Relational storage for users, content and progression" },
    ],
    featuresLabel: "Product scope",
    features: [
      "Authentication & role management",
      "Student, teacher and admin dashboards",
      "Sections, subjects and chapters",
      "Learning resources: videos and documents",
      "Exercises with corrections",
      "Interactive quizzes",
      "Student progression",
      "XP system, gamification and rankings",
      "User profiles",
    ],
    technologies: ["Next.js", "React", "Laravel", "PHP", "MySQL", "Laravel Sanctum", "Tailwind CSS"],
    progress: [
      "Interface developed with Next.js",
      "Backend developed with Laravel",
      "Frontend and backend communicate through a REST API",
      "Data organised in a MySQL database",
    ],
    github: "https://github.com/wiem-arfaoui9",
    accent: "violet",
    role: "Full-stack developer (personal project)",
  },
  {
    slug: "smartdent",
    name: "SmartDent",
    tagline: "Management application for a dental clinic",
    description:
      "SmartDent is a management application for a dental clinic, built with Laravel and React. The project foundations are in place; the functional modules below are planned next.",
    status: "Early stage",
    architecture: [
      { label: "React Frontend", detail: "Component-based UI styled with Tailwind CSS" },
      { label: "Laravel API", detail: "REST API, authentication and roles" },
      { label: "MySQL Database", detail: "Patients, appointments and medical records" },
    ],
    featuresLabel: "Planned features",
    features: [
      "Patient, appointment and medical record management",
      "Authentication and role management",
      "Dashboard and CRUD operations",
      "REST API",
    ],
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    progress: [
      "Project structure set up",
      "Code organisation defined",
      "Repository organisation started on GitLab (Git)",
    ],
    github: "https://github.com/wiem-arfaoui9",
    accent: "amber",
    role: "Full-stack developer (personal project)",
  },
  {
    slug: "devsecops-pipeline",
    name: "DevSecOps Security Pipeline",
    tagline: "Automated security testing with AI-assisted analysis",
    description:
      "A personal lab project exploring how security testing, vulnerability management and AI assistance can be wired into a CI/CD workflow. It follows my interest in cybersecurity, developed through the SecuriNets club.",
    status: "Personal lab",
    architecture: [
      { label: "GitLab CI/CD", detail: "Pipeline triggered on each change" },
      { label: "Security Tests", detail: "Automated security checks" },
      { label: "OWASP ZAP", detail: "Dynamic application security testing" },
      { label: "DefectDojo", detail: "Vulnerability management" },
      { label: "AI Analysis", detail: "AI-assisted analysis of findings" },
      { label: "Dashboard", detail: "Consolidated security view" },
    ],
    featuresLabel: "Project goals",
    features: [
      "Automated security scanning",
      "Vulnerability reports",
      "Security dashboard",
      "Docker environment",
      "CI/CD automation",
      "AI-assisted analysis",
    ],
    technologies: ["Python", "FastAPI", "Docker", "GitLab CI/CD", "OWASP ZAP", "DefectDojo"],
    progress: [],
    github: "https://github.com/wiem-arfaoui9",
    accent: "cyan",
    role: "Personal lab project",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
