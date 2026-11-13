import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  email: "wiem.arfaoui.989@gmail.com",
  githubUser: "wiem-arfaoui9",
  github: "https://github.com/wiem-arfaoui9",
  /** Add a real LinkedIn URL here to display it everywhere; leave undefined to hide it. */
  linkedin: "https://www.linkedin.com/in/wiem-arfaoui" as string | undefined,
  /** Put a CV in /public and set e.g. "/cv-wiem-arfaoui.pdf" to enable the download button. */
  cv: "/cv-wiem-arfaoui.pdf" as string | undefined,
};
