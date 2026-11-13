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

/** Ouvre la fenêtre de rédaction Gmail (web) au lieu de l'application mail par défaut (Outlook, etc.). */
export function gmailComposeUrl(to: string, subject = "", body = "") {
  const p = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) p.set("su", subject);
  if (body) p.set("body", body);
  return `https://mail.google.com/mail/?${p.toString()}`;
}

export const socials = {
  email: "wiem.arfaoui.989@gmail.com",
  githubUser: "wiem-arfaoui9",
  github: "https://github.com/wiem-arfaoui9",
  /** Add a real LinkedIn URL here to display it everywhere; leave undefined to hide it. */
  linkedin: "https://www.linkedin.com/in/wiem-arfaoui" as string | undefined,
  /** Put a CV in /public and set e.g. "/cv-wiem-arfaoui.pdf" to enable the download button. */
  cv: "/cv-wiem-arfaoui.pdf" as string | undefined,
};
