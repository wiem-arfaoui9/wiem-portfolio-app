import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "Java", category: "Backend", usedIn: "Stage SIGA" },
  { name: "Spring Boot", category: "Backend", usedIn: "Stage SIGA" },
  { name: "PHP", category: "Backend", usedIn: "Minassa, SmartDent" },
  { name: "Laravel", category: "Backend", usedIn: "Minassa, SmartDent" },
  { name: "Python", category: "Backend" },
  { name: "Angular", category: "Frontend", usedIn: "Stage SIGA" },
  { name: "React", category: "Frontend", usedIn: "SmartDent" },
  { name: "Next.js", category: "Frontend", usedIn: "Minassa, ce portfolio" },
  { name: "Tailwind CSS", category: "Frontend", usedIn: "SmartDent, ce portfolio" },
  { name: "JavaScript", category: "Frontend", usedIn: "Tous mes projets web" },
  { name: "HTML", category: "Frontend", usedIn: "Tous mes projets web" },
  { name: "CSS", category: "Frontend", usedIn: "Tous mes projets web" },
  { name: "API REST", category: "API", usedIn: "SIGA, Minassa, SmartDent" },
  { name: "SQL", category: "Bases de données" },
  { name: "PL/SQL", category: "Bases de données" },
  { name: "MySQL", category: "Bases de données", usedIn: "SIGA, Minassa, SmartDent" },
  { name: "Conception de bases de données", category: "Bases de données", usedIn: "SmartDent" },
  { name: "Git", category: "Outils", usedIn: "Tous mes projets" },
  { name: "GitHub", category: "Outils" },
  { name: "GitLab", category: "Outils" },
];

export const skillCategories = ["Backend", "Frontend", "API", "Bases de données", "Outils"] as const;
