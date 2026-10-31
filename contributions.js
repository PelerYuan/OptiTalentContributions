// All site content lives here. Edit, save and refresh.

const site = {
  name: "Peler Yuan",
  intro: "A running record of my engineering work, newest first.",
};

// Add one object per contribution, in any order. The page sorts by date.
//
//   date      required  "2026-10-24", or "2026-10" if the day is unknown
//   project   required
//   type      required  e.g. Architecture, Feature, Fix, Performance
//   title     required
//   summary   optional  one or two sentences
//   highlights optional  headline numbers, [{ value, label, detail }]
//   note      optional  small print under the highlights
//   sections  optional  [{ heading, text }]
//   figure    optional  { src, alt, caption }
//   stack     optional  list of technologies
//   links     optional  [{ label, url }]
//   featured  optional  true for a major milestone
const contributions = [
  {
    date: "2026-10-26",
    project: "OptiTalent",
    type: "Infrastructure",
    featured: true,
    title: "Cut CI time from 35–50 minutes to about 5",
    summary:
      "Moved our GitHub Actions pipeline onto self-hosted runners and reworked the workflows, so all six repositories now get a full check in minutes.",
    highlights: [
      { value: "7–10×", label: "Faster CI", detail: "Wall-clock time per full run" },
      { value: "~5 min", label: "Full CI, all six repositories", detail: "Was 35–50 min" },
      { value: "~20 min", label: "Total machine time", detail: "Was 41–68 min" },
    ],
    note: "Measured on self-hosted runners with warm caches. Before: one monorepo run. After: all six repositories triggered at once across four runners.",
    sections: [
      {
        heading: "The problem",
        text: "A single CI run took 35–50 minutes. On standard GitHub-hosted runners, the same run was estimated at 1.5–2.5 hours.",
      },
      {
        heading: "What I did",
        text: "I set up self-hosted GitHub runners and reworked the workflows to run jobs in parallel across the new repositories.",
      },
    ],
    stack: ["GitHub Actions", "Self-hosted runners"],
  },
  {
    date: "2026-10-24",
    project: "OptiTalent",
    type: "Architecture",
    featured: true,
    title: "Rebuilt OptiTalent on a new architecture",
    summary:
      "Redesigned the entire technology stack from the ground up and led a full refactor of the core codebase.",
    sections: [
      {
        heading: "The problem",
        text: "After a long stretch of AI-driven development, the core codebase had become nearly impossible to maintain or change. The product needed a new foundation.",
      },
      {
        heading: "What I did",
        text: "I designed the new stack myself and drove the refactor end to end. The single repository became independent services with versioned contracts between them: a Rust gateway at the edge and a TypeScript business layer behind it.",
      },
    ],
    figure: {
      src: "assets/architecture.svg",
      alt: "High-level OptiTalent architecture with four layers: client, edge, business and data.",
      caption: "The new architecture at a high level.",
    },
    stack: ["Rust", "TypeScript", "PostgreSQL", "Docker Compose"],
  },
];
