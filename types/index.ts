export type SkillCategory = "Backend" | "Frontend" | "API" | "Bases de données" | "Outils";

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

export type ProjectKind = "Projet personnel" | "Stage";

export interface ProjectStatus {
  /** Libellé court affiché en badge, ex. "Prototype fonctionnel". */
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  kind: ProjectKind;
  flagship?: boolean;
  name: string;
  /** Description courte affichée sur la carte. */
  tagline: string;
  /** Ligne de contexte, ex. entreprise et dates pour un stage. */
  context?: string;
  objective: string;
  architecture: ArchitectureStep[];
  /** Fonctionnalités existantes, vérifiées dans le code. */
  achievedLabel: string;
  achieved: string[];
  /** Objectifs NON présentés comme terminés. */
  planned?: string[];
  technologies: string[];
  role: string;
  contribution: string[];
  skills?: string[];
  status: ProjectStatus;
  /** Renseigné uniquement si le dépôt existe et répond. */
  github?: string;
  accent: "violet" | "cyan" | "amber";
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
  /** Chemin du PDF du certificat dans /public (ouvert au clic). */
  file?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
