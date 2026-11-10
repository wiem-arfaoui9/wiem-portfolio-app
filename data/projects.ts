import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "minasa",
    kind: "Projet personnel",
    flagship: true,
    name: "Minassa",
    tagline: "Plateforme web pour aider les élèves tunisiens à réviser et à préparer le baccalauréat.",
    objective:
      "Regrouper sur une seule plateforme web de quoi réviser le baccalauréat : cours, exercices et quiz, avec une approche ludique pour encourager la régularité.",
    architecture: [
      { label: "Next.js", detail: "Interface web" },
      { label: "API Laravel", detail: "Backend" },
      { label: "MySQL", detail: "Base de données" },
    ],
    achievedLabel: "Ce qui est développé",
    achieved: [
      "Interface web réalisée avec Next.js",
      "Backend Laravel qui expose une API utilisée par l'interface",
      "Données organisées dans une base MySQL",
    ],
    planned: [
      "Espaces élève, enseignant et administrateur",
      "Cours organisés par section, matière et chapitre (vidéos et documents)",
      "Exercices avec corrections et quiz interactifs",
      "Suivi de progression, points d'expérience et classements",
    ],
    technologies: ["Next.js", "Laravel", "PHP", "MySQL", "API REST"],
    role: "Développement de l'interface et du backend, en projet personnel.",
    contribution: [
      "Interface développée avec Next.js",
      "Backend développé avec Laravel",
      "Communication entre l'interface et le backend par API",
      "Organisation des données dans MySQL",
    ],
    status: {
      label: "En cours",
      detail:
        "Le projet est en développement. Les fonctionnalités de la liste « Objectifs » sont visées : elles ne sont pas présentées comme terminées.",
    },
    accent: "violet",
  },
  {
    slug: "smartdent",
    kind: "Projet personnel",
    name: "SmartDent",
    tagline: "Application web de gestion d'un cabinet dentaire : patients, rendez-vous, dossiers, paiements.",
    objective:
      "Centraliser dans une application le travail quotidien d'un cabinet dentaire (accueil, soins, facturation, personnel), avec un accès adapté à chaque rôle : administrateur, dentiste, secrétaire et patient.",
    architecture: [
      { label: "React + Vite", detail: "Interface web" },
      { label: "API Laravel 11", detail: "Backend" },
      { label: "MySQL", detail: "Base de données" },
    ],
    achievedLabel: "Fonctionnalités réalisées",
    achieved: [
      "Authentification et gestion des rôles (administrateur, dentiste, secrétaire, patient)",
      "Gestion des patients et des rendez-vous, avec statuts et liste d'attente",
      "Dossiers médicaux, réservés aux dentistes et aux administrateurs",
      "Schéma dentaire interactif avec historique des modifications par dent",
      "Paiements et statistiques mensuelles ; génération de PDF (reçus, ordonnances, export du dossier)",
      "Tableau de bord : rendez-vous du jour, graphiques de rendez-vous et de revenus, taux d'occupation et d'absences",
      "Messagerie interne et notifications",
      "Gestion des employés, des plannings et des congés",
      "Portail patient : réservation et annulation de rendez-vous, factures, dossier, schéma dentaire",
      "Résumé de dossier assisté par IA (API Anthropic, identité retirée avant l'envoi), à utiliser avec une clé API configurée",
    ],
    technologies: ["Laravel 11", "PHP", "MySQL", "Laravel Sanctum", "Spatie Permission", "React 18", "Vite", "Tailwind CSS", "API REST"],
    role: "Projet personnel que j'ai développé : base de données, API Laravel et interface React.",
    contribution: [
      "Modélisation de la base de données (migrations Laravel)",
      "API REST avec accès limité selon le rôle de l'utilisateur",
      "Interface React connectée à l'API (Axios, React Query)",
      "Génération de documents PDF et intégration d'une API d'IA",
    ],
    skills: [
      "Contrôle d'accès par rôles",
      "Conception d'une API REST",
      "Liaison entre une interface React et une API",
      "Modélisation d'une base de données relationnelle",
    ],
    status: {
      label: "Prototype fonctionnel",
      detail:
        "Projet personnel d'apprentissage, avec des données de démonstration. Il n'est pas présenté comme un produit en service dans un cabinet.",
    },
    github: "https://github.com/wiem-arfaoui9/SmartDent",
    accent: "amber",
  },
  {
    slug: "siga",
    kind: "Stage",
    name: "SIGA",
    tagline: "Stage de développement full-stack : application web de gestion des missions et des utilisateurs.",
    context: "Stage de janvier à février 2026 · SIGA (Système Informatique et Gestion Automatisée), Les Berges du Lac",
    objective:
      "Permettre à un administrateur de confier des missions à des agents et de suivre leur avancement jusqu'à la validation.",
    architecture: [
      { label: "Angular", detail: "Interface web" },
      { label: "API Spring Boot", detail: "Backend" },
      { label: "MySQL", detail: "Base de données" },
    ],
    achievedLabel: "Fonctionnalités de l'application",
    achieved: [
      "Connexion sécurisée avec des rôles Administrateur et Agent",
      "Gestion des utilisateurs par l'administrateur",
      "Création de missions avec date d'échéance, affectées à un agent",
      "Parcours de validation : l'agent termine sa mission, l'administrateur la valide ou la renvoie à corriger",
      "Tableau de bord de suivi des missions",
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "Angular", "MySQL", "API REST", "Git"],
    role: "Stagiaire développeur, au sein d'un binôme de développement.",
    contribution: [
      "Backend : module des missions (entité, repository, service et contrôleur REST : création, modification, suppression, consultation par utilisateur), avec accès limité selon le rôle",
      "Frontend Angular : écran de gestion des missions pour l'administrateur et écran « mes missions » pour l'agent",
      "Service Angular de communication avec l'API et protection des pages réservées à l'administrateur",
      "Travail en équipe avec Git et GitHub",
    ],
    skills: [
      "Développement d'une API REST avec Spring Boot",
      "Sécurisation des accès par rôle",
      "Consommation d'une API depuis Angular",
      "Collaboration sur un dépôt Git commun",
    ],
    status: {
      label: "Stage terminé",
      detail: "Stage effectué de janvier à février 2026. Le dépôt est partagé avec l'autre développeur du projet.",
    },
    github: "https://github.com/wiem-arfaoui9/Siga",
    accent: "cyan",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
