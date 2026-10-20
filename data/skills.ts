import { Skill } from "@/types";

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "Backend", usedIn: "SIGA internship" },
  { name: "Spring Boot", category: "Backend", usedIn: "SIGA internship" },
  { name: "PHP", category: "Backend", usedIn: "Minassa, SmartDent" },
  { name: "Laravel", category: "Backend", usedIn: "Minassa, SmartDent" },
  { name: "Python", category: "Backend" },
  // Frontend
  { name: "Angular", category: "Frontend", usedIn: "SIGA internship" },
  { name: "React", category: "Frontend", usedIn: "SmartDent" },
  { name: "Next.js", category: "Frontend", usedIn: "Minassa, this portfolio" },
  { name: "JavaScript", category: "Frontend", usedIn: "All web projects" },
  { name: "HTML", category: "Frontend", usedIn: "All web projects" },
  { name: "CSS", category: "Frontend", usedIn: "All web projects" },
  // API
  { name: "REST API", category: "API", usedIn: "SIGA, Minassa" },
  // Databases
  { name: "SQL", category: "Databases" },
  { name: "PL/SQL", category: "Databases" },
  { name: "MySQL", category: "Databases", usedIn: "Minassa, SmartDent" },
  { name: "Database design", category: "Databases", usedIn: "Minassa" },
  // Tools
  { name: "Git", category: "Tools", usedIn: "All projects" },
  { name: "GitHub", category: "Tools" },
  { name: "GitLab", category: "Tools", usedIn: "SmartDent repository" },
];

export const skillCategories = ["Backend", "Frontend", "API", "Databases", "Tools"] as const;
