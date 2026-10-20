import { socials } from "@/data/nav";

export interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  url: string;
  updatedAt: string;
}

/**
 * Fetches the real public repositories of the GitHub account (cached for 1h).
 * Returns null on any failure (rate limit, offline…) so the UI can fall back
 * gracefully instead of showing made-up numbers.
 */
export async function getGithubRepos(): Promise<GithubRepo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${socials.githubUser}/repos?per_page=100&sort=updated`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      html_url: string;
      updated_at: string;
      fork: boolean;
    }>;
    return data
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
        updatedAt: r.updated_at,
      }));
  } catch {
    return null;
  }
}
