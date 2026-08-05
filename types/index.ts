export type SkillCategory = "Frontend" | "Backend" | "Programming" | "DevOps" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100, used for the ecosystem visualization
}

export interface ArchitectureStep {
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  flagship?: boolean;
  name: string;
  tagline: string;
  description: string;
  architecture: ArchitectureStep[];
  features: string[];
  technologies: string[];
  challenges: { title: string; detail: string }[];
  results: string[];
  github?: string;
  demo?: string;
  accent: "violet" | "cyan" | "amber";
  year: string;
  role: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  place: string;
  description: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
  command?: string;
}
