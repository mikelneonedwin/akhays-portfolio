type Experience = {
  /**
   * The job title or position held at the company.
   * Example: "Frontend Developer", "Software Engineer Intern".
   */
  role: string;
  /**
   * The starting date of the experience in ISO 8601 format (YYYY-MM).
   * Used for sorting and calculating duration.
   * Example: "2022-07"
   */
  start: `${number}-${number}`;
  /**
   * The ending date of the experience in ISO 8601 format (YYYY-MM)
   * or the string "Present" if the experience is ongoing.
   * Example: "2023-12" or "Present"
   */
  end: `${number}-${number}` | "Present";
  /**
   * A detailed summary of responsibilities, accomplishments, or projects
   * undertaken during this experience.
   */
  description: string;
  /**
   * The name of the company or organization where the experience took place.
   * Example: "TechNova Inc."
   */
  workedAt: string;
  /**
   * A link to the company's website or relevant project page.
   * Example: "https://technova.dev"
   */
  link: string;
  /**
   * A URL to the company's logo or brand icon, typically used for display purposes.
   * Example: "https://logo.clearbit.com/technova.dev"
   */
  icon: "/vite.svg";
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    start: "2021-01",
    end: "2022-06",
    description:
      "Built and maintained responsive web interfaces using React and TypeScript. Collaborated with designers and backend engineers to implement new features.",
    workedAt: "TechNova Inc.",
    link: "https://technova.dev",
    icon: "/vite.svg",
  },
  {
    role: "Full Stack Engineer",
    start: "2022-07",
    end: "Present",
    description:
      "Led development of a SaaS platform using Node.js, Express, and PostgreSQL on the backend, and React with Tailwind CSS on the frontend.",
    workedAt: "Stackify Labs",
    link: "https://stackifylabs.com",
    icon: "/vite.svg",
  },
  {
    role: "Software Engineering Intern",
    start: "2020-05",
    end: "2020-08",
    description:
      "Assisted in migrating legacy codebases to modern JavaScript frameworks. Wrote unit tests and documentation to improve code quality.",
    workedAt: "CodeCraft Co.",
    link: "https://codecraft.co",
    icon: "/vite.svg",
  },
  {
    role: "UI/UX Designer",
    start: "2019-09",
    end: "2020-04",
    description:
      "Designed wireframes, prototypes, and user flows for mobile and web apps, contributing to a 30% improvement in user engagement.",
    workedAt: "DesignMint Studio",
    link: "https://designmint.io",
    icon: "/vite.svg",
  },
];
