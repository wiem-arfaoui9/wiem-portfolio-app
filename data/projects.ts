import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "minasa",
    flagship: true,
    name: "Minasa",
    tagline: "Intelligent Learning Management Platform",
    description:
      "Minasa is an intelligent LMS built for Tunisian students — especially those preparing for the Baccalaureate. It brings courses, exercises, quizzes and gamification into a single modern learning experience, with dedicated dashboards for students, teachers and admins.",
    architecture: [
      { label: "Next.js Frontend", detail: "React + TypeScript client, server components, optimistic UI" },
      { label: "Laravel REST API", detail: "Authentication, business logic, role-based access control" },
      { label: "MySQL Database", detail: "Relational schema for courses, progression and rankings" },
    ],
    features: [
      "Authentication & role management (student / teacher / admin)",
      "Student, teacher and admin dashboards",
      "Sections, subjects and chapters hierarchy",
      "Learning resources — videos and documents",
      "Exercises with corrections",
      "Interactive quizzes",
      "Student progression tracking",
      "XP system & gamification",
      "Class and platform-wide rankings",
      "User profiles",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Laravel Sanctum", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenges: [
      {
        title: "Modeling progression fairly across subjects",
        detail:
          "Baccalaureate students study very different subject combinations. I designed a weighted XP schema so progression and rankings stay meaningful whether a student is a math-heavy or literature-heavy track.",
      },
      {
        title: "Keeping three roles on one codebase",
        detail:
          "Student, teacher and admin dashboards share components but need different permissions. I used Sanctum-backed role middleware on the API and route guards on the frontend to keep the experience isolated without duplicating UI.",
      },
      {
        title: "Gamification without gimmicks",
        detail:
          "XP and rankings needed to motivate without feeling arbitrary. Points are tied directly to real learning actions — completed exercises, corrected quizzes — so the numbers reflect actual study progress.",
      },
    ],
    results: [
      "A working full-stack LMS with three distinct role experiences",
      "Gamified progression system driving repeat engagement in testing",
      "Clean separation between a Laravel API and a Next.js client, ready to scale",
    ],
    github: "https://github.com/wiemarfaoui",
    demo: "#",
    accent: "violet",
    year: "2024 — Present",
    role: "Full Stack Developer",
  },
  {
    slug: "devsecops-pipeline",
    name: "DevSecOps Security Pipeline",
    tagline: "Automated security testing with AI-assisted analysis",
    description:
      "An automated DevSecOps pipeline that integrates security testing, vulnerability management and AI assistance directly into the CI/CD workflow, so security issues surface before code reaches production.",
    architecture: [
      { label: "GitLab CI/CD", detail: "Pipeline trigger on every merge request" },
      { label: "Security Tests", detail: "Automated static & dynamic checks" },
      { label: "OWASP ZAP", detail: "Dynamic application security testing" },
      { label: "DefectDojo", detail: "Vulnerability management & tracking" },
      { label: "AI Analysis", detail: "Automated triage and remediation hints" },
      { label: "Dashboard", detail: "Consolidated security visibility" },
    ],
    features: [
      "Automated security scanning on every pipeline run",
      "Structured vulnerability reports",
      "Centralized security dashboard",
      "Fully containerized Docker environment",
      "CI/CD automation with GitLab",
      "AI-assisted vulnerability analysis",
    ],
    technologies: ["Python", "FastAPI", "Docker", "GitLab CI/CD", "OWASP ZAP", "DefectDojo"],
    challenges: [
      {
        title: "Wiring ZAP and DefectDojo into one pipeline",
        detail:
          "ZAP and DefectDojo aren't designed to talk to each other out of the box. I built a FastAPI service that normalizes ZAP output and pushes it into DefectDojo automatically after every scan.",
      },
      {
        title: "Signal over noise",
        detail:
          "Raw scanner output is overwhelming. The AI analysis step ranks findings by exploitability and business impact so the dashboard highlights what actually matters first.",
      },
    ],
    results: [
      "Security scanning runs automatically without manual intervention",
      "Vulnerability triage time reduced through AI-assisted ranking",
      "Reproducible, fully Dockerized environment for the whole pipeline",
    ],
    github: "https://github.com/wiemarfaoui",
    accent: "cyan",
    year: "2024",
    role: "DevSecOps Engineer",
  },
  {
    slug: "smartdent",
    name: "SmartDent",
    tagline: "Dental Clinic Management System",
    description:
      "A management application for dental clinics covering patients, appointments and staff, built to replace paper-based scheduling with a clean, role-aware digital workflow.",
    architecture: [
      { label: "React Frontend", detail: "Component-based UI with Tailwind CSS" },
      { label: "Laravel API", detail: "Authentication, roles and CRUD endpoints" },
      { label: "MySQL Database", detail: "Patients, appointments and records" },
    ],
    features: [
      "Patient management",
      "Appointment scheduling",
      "Authentication & role management",
      "Clinic dashboard",
      "Full CRUD operations across all entities",
    ],
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    challenges: [
      {
        title: "Appointment conflicts",
        detail:
          "Overlapping bookings were the biggest usability risk. I added server-side validation with real-time availability checks before a slot can be confirmed.",
      },
    ],
    results: [
      "A functional clinic workflow from patient intake to appointment tracking",
      "Reusable CRUD patterns that sped up later feature work",
    ],
    github: "https://github.com/wiemarfaoui",
    accent: "amber",
    year: "2023",
    role: "Full Stack Developer",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
