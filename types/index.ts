export type SkillCategory = "Backend" | "Frontend" | "API" | "Databases" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Where this skill was actually used (shown on the card). */
  usedIn?: string;
}

export interface ArchitectureStep {
  label: string;
  detail: string;
}

export type ProjectStatus = "In progress" | "Early stage" | "Personal lab";

export interface Project {
  slug: string;
  flagship?: boolean;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  architecture: ArchitectureStep[];
  /** Label above the feature list, e.g. "Features" or "Planned features". */
  featuresLabel: string;
  features: string[];
  technologies: string[];
  /** Honest "what is done so far" list. */
  progress: string[];
  github?: string;
  demo?: string;
  accent: "violet" | "cyan" | "amber";
  role: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  place: string;
  description: string;
  tags: string[];
  kind: "work" | "project" | "education";
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  detail?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
