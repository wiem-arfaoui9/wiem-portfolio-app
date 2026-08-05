import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "Frontend", level: 88 },
  { name: "React", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 82 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "HTML", category: "Frontend", level: 95 },
  { name: "CSS", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Frontend", level: 92 },
  // Backend
  { name: "Laravel", category: "Backend", level: 88 },
  { name: "PHP", category: "Backend", level: 85 },
  { name: "REST API", category: "Backend", level: 88 },
  { name: "MySQL", category: "Backend", level: 84 },
  // Programming
  { name: "Java", category: "Programming", level: 75 },
  { name: "C", category: "Programming", level: 72 },
  { name: "Python", category: "Programming", level: 78 },
  // DevOps
  { name: "Docker", category: "DevOps", level: 76 },
  { name: "Git", category: "DevOps", level: 90 },
  { name: "GitLab CI/CD", category: "DevOps", level: 74 },
  // Tools
  { name: "VS Code", category: "Tools", level: 95 },
  { name: "Postman", category: "Tools", level: 88 },
];

export const skillCategories = ["Frontend", "Backend", "Programming", "DevOps", "Tools"] as const;
