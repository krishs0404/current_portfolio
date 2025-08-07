export type Post = {
  title: string;
  date: string;
  summary: string;
  href?: string;
  tags?: string[];
};

// You can edit these or replace with your own writing later
export const posts: Post[] = [
  {
    title: "Training a Deep Learning Basecaller on 1M+ ONT Reads",
    date: "2025-05-01",
    summary:
      "How I built a high-throughput nanopore pipeline and a transformer basecaller that reached 92% accuracy.",
    tags: ["Genomics", "DL", "PyTorch"],
  },
  {
    title: "Shipping Production Agents: From Python Prototype to Tooling Stack",
    date: "2025-07-01",
    summary:
      "Lessons learned migrating an ops agent into a production-grade workflow and cutting integration time by 30%.",
    tags: ["Agents", "Systems", "Infra"],
  },
];


