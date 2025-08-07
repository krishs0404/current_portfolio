export type Experience = {
  title: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  name: string;
  description: string;
  tags?: string[];
  links?: { label: string; href: string }[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  coursework: string[];
};

export type Profile = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  tagline: string;
  about?: string[];
  education: Education;
  experiences: Experience[];
  projects: Project[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    libraries: string[];
  };
};

export const profile: Profile = {
  name: "Krish Sharma",
  email: "krishs04@stanford.edu",
  phone: "(262) 402-0565",
  linkedin: "https://linkedin.com/in/krish-sharma-pop",
  github: "https://github.com/krishs0404",
  tagline:
    "ML engineer + computational biology researcher. Building production AI agents and genomics pipelines.",
  about: [
    "Hey! I'm Krish — I love building things with AI and shipping them fast. If there's a problem worth solving, I’ll probably prototype an agent for it before breakfast.",
    "When I'm not coding, I'm playing chess (blitz addict, constantly blundering and loving it) or talking sports. I get way too invested in underdog storylines and game analytics.",
    "I’m also dipping my toes into quant trading — learning factor models, backtesting simple strategies, and geeking out over market microstructure. It’s puzzle-solving with real stakes, which is my kind of fun.",
  ],
  education: {
    school: "Stanford University",
    degree: "B.S. in Mathematics / Computer Science",
    location: "Stanford, CA",
    start: "2024",
    end: "2027",
    coursework: [
      "Programming Abstractions",
      "Probability Theory",
      "Statistical Inference",
      "Linear Algebra",
    ],
  },
  experiences: [
    {
      title: "Computational Biology Researcher",
      organization: "Altemose Lab, Stanford Bioengineering",
      location: "Stanford, CA",
      start: "Feb 2025",
      end: "Present",
      bullets: [
        "Built high-throughput Snakemake pipelines to parse POD5 nanopore sequencing data and reduce analysis time by 70%",
        "Trained deep learning basecaller with 92% accuracy using 1M+ single-molecule long reads (ONT, PyTorch)",
        "Modeled 3D genome folding via transformer-based sequence-to-structure architecture",
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      organization: "Tessera Labs",
      location: "Remote",
      start: "Jul 2025",
      end: "Present",
      bullets: [
        "Prototyped an autonomous ops agent in Python, then migrated it to the team’s internal tooling stack—cut build/integration time by 30% and shipped to production in 1 week as the company’s first intern.",
        "Integrated a Workday agent and authored toolkits for a Salesforce agent (auth, query, CRUD actions), enabling 40+ automated workflows/day and reducing manual ops touchpoints by 50%.",
      ],
    },
    {
      title: "Software Engineer Intern",
      organization: "Pearson Labs (YC F24)",
      location: "Remote",
      start: "Jun 2025",
      end: "Aug 2025",
      bullets: [
        "Fixed production AI tools for legal dataroom product; resolved evaluation bottlenecks across 3 workflows",
        "Built file renaming feature powered by Hatchet + LLM agentic pipeline; improved document search by 40%",
        "Established evaluation framework for AI agents (accuracy, precision, recall); integrated into dev workflow",
      ],
    },
    {
      title: "Software Engineer",
      organization: "Quantitative Sciences Unit, Stanford Med",
      location: "Stanford, CA",
      start: "Feb 2025",
      end: "Jun 2025",
      bullets: [
        "Developed TypeScript/React dashboard for 50+ clinicians; cut data retrieval time by 50% for 200+ daily cases",
        "Led 10-person Agile team; deployed 12 production features via CI/CD (GitHub Actions, Docker)",
        "Scaled PostgreSQL-backed APIs to 2000+ req/min with 5x throughput and zero latency spikes",
      ],
    },
    {
      title: "AI Engineer",
      organization: "Fridaymail.ai (YC W24)",
      location: "Remote",
      start: "Dec 2024",
      end: "Jan 2025",
      bullets: [
        "Built GPT-4/Claude-powered email triage system in Python/Flask; automated 80% of support requests",
        "Integrated Nylas API to handle 1K+ daily messages; cut manual routing time by 40%",
      ],
    },
  ],
  projects: [
    {
      name: "Priori AI — LLaMA EHR Pipeline",
      description:
        "Fine-tuned LLaMA 3.1 8B on-device for 500K+ de-identified clinical notes; deployed GAN-based refinement boosting insurance approval rate by 25%.",
      tags: ["LLM", "Transformers", "PEFT", "GANs", "Healthcare AI"],
      links: [
        { label: "Live", href: "https://trypriori.com" },
        { label: "GitHub", href: "https://github.com/krishs0404" },
      ],
    },
    {
      name: "PitchPal — Cold Email Assistant",
      description:
        "Full-stack AI app with LangChain, Pinecone, PyTorch, and Dockerized agent backend; increased reply rates by 30% via adaptive multi-draft generation.",
      tags: ["LangChain", "Pinecone", "Agents", "Docker"],
      links: [
        { label: "GitHub", href: "https://github.com/krishs0404" },
      ],
    },
  ],
  skills: {
    languages: ["Python", "C++", "JavaScript", "SQL", "C", "Bash"],
    frameworks: [
      "React",
      "Node.js",
      "Flask",
      "Tailwind",
      "LangChain",
      "TensorFlow",
    ],
    tools: [
      "Git",
      "Docker",
      "Kubernetes",
      "Linux",
      "Jupyter",
      "Vite",
      "Pinecone",
      "Hatchet",
    ],
    libraries: [
      "pandas",
      "NumPy",
      "Matplotlib",
      "PyTorch",
      "Transformers",
    ],
  },
};


