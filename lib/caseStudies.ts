export interface CaseStudy {
  slug: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  tags: string[];
  headerBg: string; // CSS color
  sections: Array<{
    label: string;
    heading: string;
    body: string[];
    pullQuote?: string;
    isList?: boolean;
    listItems?: string[];
  }>;
  artifacts: string[]; // image filenames in /public/work/
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mazda-research',
    eyebrow: 'Mazda / VML · 2024–2025 · UX Research Lead & Senior UX Designer',
    h1: 'From gut feeling to evidence.',
    subheadline: 'Building a research practice that made design decisions easier to defend.',
    tags: ['Research Operations', 'UX Design', 'Strategy', 'Automotive'],
    headerBg: '#36151E',
    sections: [
      {
        label: 'The context',
        heading: 'The context',
        body: ["Mazda's digital platform was evolving continuously — but most design decisions were made on internal assumptions rather than validated user insight. My job was to change that."],
      },
      {
        label: 'What I did',
        heading: 'What I did',
        body: [
          "I founded and scaled a structured UX research and experimentation program for MazdaUSA.com, building the infrastructure for teams to validate decisions, reduce product risk, and align around real evidence before committing to build.",
          "This meant designing the process as much as the research itself. I created intake frameworks to prioritize what to test, developed hypothesis-based research plans tied to specific design questions, and introduced PIE scoring (Potential, Impact, Ease) to align research with product and delivery timelines.",
          "Findings were packaged into Intelligence Reports and Insight Dashboards — formats built for product managers and stakeholders who needed clear recommendations, not raw data.",
          "The result was a repeatable practice that made research actionable, made design decisions easier to defend, and gave teams a shared language for evaluating experience quality across the platform.",
        ],
        pullQuote: "Research is most valuable when it helps teams make better decisions — not when it produces reports.",
      },
      {
        label: 'What I made',
        heading: 'What I made',
        body: [],
        isList: true,
        listItems: [
          'Hypothesis frameworks and experiment prioritization system',
          'Usability testing plans and moderation guides',
          'Intelligence Reports and Insight Dashboards',
          'Research intake and backlog structure',
          'Stakeholder presentations and recommendation decks',
        ],
      },
    ],
    artifacts: ['lgWKnaQQq3ihRCo1.png', 'SOUtojY83lzrPcXF.png', 'qkRs6Elu6lVu1yHr.png', 'BUHql5gPERcVRP6V.webp'],
    next: { slug: 'mazda-build-price', title: 'Helping people choose a car.' },
  },
  {
    slug: 'mazda-build-price',
    eyebrow: 'Mazda / VML · 2024–2025 · UX Research Lead & Senior UX Designer',
    h1: 'Helping people choose a car.',
    subheadline: 'Untangling a high-stakes configuration experience where complexity was costing conversions.',
    tags: ['Interaction Design', 'Journey Analysis', 'UX Strategy', 'Automotive'],
    headerBg: '#1A3A4A',
    sections: [
      {
        label: 'The context',
        heading: 'The context',
        body: ["Buying a car online means making a sequence of interdependent decisions — trim levels, engine options, colors, packages, pricing formats — often without a sales rep to translate. Mazda's Build & Price tool put users at the center of that complexity."],
      },
      {
        label: 'What I did',
        heading: 'What I did',
        body: [
          "I led research and design activities to understand where the experience created confusion, then shaped recommendations for how the tool could better support decision-making at each stage. This included journey analysis, funnel review, interaction pattern evaluation, and usability assessment of the current experience — translated into prioritized UX recommendations tied to product and engineering roadmaps.",
          "The work shifted the team from general concern about tool performance toward specific, evidence-based opportunities with clear rationale and design direction attached.",
        ],
        pullQuote: "The challenge wasn't the car. It was the sequence of decisions users had to make without enough support.",
      },
      {
        label: 'What I made',
        heading: 'What I made',
        body: [],
        isList: true,
        listItems: [
          'Journey maps and funnel analysis documentation',
          'Usability evaluation and annotated findings',
          'Interaction design recommendations',
          'Prioritized opportunity backlog',
          'Stakeholder presentation and design rationale',
        ],
      },
    ],
    artifacts: ['6GlEs6BsB1mKLL7Z.png', '5hs9kSgK8aJmu5Q0.webp', '1XpU6QXRSB8dOD94.png', 'qkRs6Elu6lVu1yHr.png'],
    prev: { slug: 'mazda-research', title: 'From gut feeling to evidence.' },
    next: { slug: 'mazda-incentives', title: 'Making a good offer actually land.' },
  },
  {
    slug: 'mazda-incentives',
    eyebrow: 'Mazda / VML · 2024–2025 · Senior UX Designer',
    h1: 'Making a good offer actually land.',
    subheadline: "Redesigning how Mazda communicated financial incentives for customers who didn't know what APR meant.",
    tags: ['Information Architecture', 'Content Strategy', 'UX Design', 'Automotive'],
    headerBg: '#114B5F',
    sections: [
      {
        label: 'The context',
        heading: 'The context',
        body: ["Automotive incentives are powerful purchase drivers — but only if customers can understand them. At Mazda, offers varied by model, region, eligibility window, and financial term. The experience of discovering and interpreting those offers was fragmented, jargon-heavy, and built for finance teams rather than buyers."],
      },
      {
        label: 'What I did',
        heading: 'What I did',
        body: [
          "I contributed research, strategy, and UX design work to rethink how incentives were structured, surfaced, and explained across the digital ecosystem. This meant evaluating how customers discovered offers, where they lost confidence or dropped off, and what information they actually needed to act. The work produced clearer IA, simplified content patterns, and a more scalable framework for how promotional content could live across the site — structured around customer decision points rather than internal offer categories.",
        ],
        pullQuote: "A good offer that nobody understands is just noise. The design challenge was making the math feel human.",
      },
      {
        label: 'What I made',
        heading: 'What I made',
        body: [],
        isList: true,
        listItems: [
          'IA recommendations and content structure mapping',
          'Customer decision flow analysis',
          'Wireframes and interaction guidance',
          'Content clarity recommendations',
          'Scalable incentive pattern documentation',
        ],
      },
    ],
    artifacts: ['qmdtuLMhPU2leCT3.png', '0pajrZxDXnziLGxe.png', 'uS6L2Pmvdj3AvY5s.webp'],
    prev: { slug: 'mazda-build-price', title: 'Helping people choose a car.' },
    next: { slug: 'td-bank', title: 'Onboarding inside a regulated world.' },
  },
  {
    slug: 'td-bank',
    eyebrow: 'TD Bank / Publicis Groupe · 2025–2026 · Senior UX Designer & People Manager',
    h1: 'Onboarding inside a regulated world.',
    subheadline: 'Simplifying complex KYC and business onboarding workflows without losing the compliance layer.',
    tags: ['Enterprise UX', 'Interaction Design', 'Design Systems', 'Banking'],
    headerBg: '#36151E',
    sections: [
      {
        label: 'The context',
        heading: 'The context',
        body: ["Enterprise banking onboarding is not a simple form. It spans regulatory requirements, identity verification, business classification, document uploads, internal review processes, and — depending on the channel — either a self-serve digital flow or an assisted branch experience. Every field has a reason. Every step has a compliance team behind it."],
      },
      {
        label: 'What I did',
        heading: 'What I did',
        body: [
          "I contributed as senior UX designer and people manager on TD Bank's onboarding and KYC initiatives. My work covered wireframes and flow updates across assisted and self-serve channels, scenario-based annotations that translated regulatory requirements into design direction, design system application across components, and cross-functional alignment with product, engineering, operations, and compliance stakeholders.",
          "I also supported the team directly — running feedback practices, contributing to delivery alignment, and helping the design function stay effective inside a complex agile enterprise environment.",
        ],
        pullQuote: "In regulated environments, simplicity isn't about removing steps. It's about making the necessary ones feel manageable.",
      },
      {
        label: 'What I made',
        heading: 'What I made',
        body: [],
        isList: true,
        listItems: [
          'Wireframes across assisted and self-serve onboarding flows',
          'Scenario-based annotations and design rationale documentation',
          'Design system component application and pattern guidance',
          'Cross-functional alignment artifacts',
          'Stakeholder review decks and flow documentation',
        ],
      },
    ],
    artifacts: ['ZZ0HvVbman2Kaevq.png', 'f6GNoTs0JrnI7Mr1.png', 'f6Cx8EXGtsdBUoII.png'],
    prev: { slug: 'mazda-incentives', title: 'Making a good offer actually land.' },
    next: { slug: 'hexagon', title: 'One platform. Twenty industries. No clear front door.' },
  },
  {
    slug: 'hexagon',
    eyebrow: 'Hexagon / Wunderman Thompson · 2022–2024 · Senior UX Designer',
    h1: 'One platform. Twenty industries. No clear front door.',
    subheadline: "Bringing structure to a global enterprise web ecosystem that had grown faster than its navigation.",
    tags: ['Information Architecture', 'Enterprise Web', 'UX Strategy', 'Global Platforms'],
    headerBg: '#1A3A4A',
    sections: [
      {
        label: 'The context',
        heading: 'The context',
        body: ["Hexagon serves more than 20 industries — from aerospace and agriculture to public safety and marine positioning. Its digital platform needed to support enterprise buyers, researchers, and domain specialists, each arriving with different questions and different levels of familiarity with what Hexagon actually offers. The problem was structural: the site had grown faster than its navigation."],
      },
      {
        label: 'What I did',
        heading: 'What I did',
        body: [
          "I contributed UX strategy, research-informed recommendations, wireframing, information architecture, and stakeholder alignment across the global website redesign. This included evaluating how users navigated the current experience using tree testing and first-click testing, identifying where the structure broke down, and shaping a more scalable IA that could accommodate Hexagon's breadth without overwhelming the people landing on it.",
        ],
        pullQuote: "When a site serves everyone equally, it often serves no one well. Clarity requires choosing what goes first.",
      },
      {
        label: 'What I made',
        heading: 'What I made',
        body: [],
        isList: true,
        listItems: [
          'IA evaluation and tree testing analysis',
          'Navigation structure recommendations',
          'Wireframes and interaction guidance',
          'Heuristic evaluation report',
          'Research synthesis and stakeholder recommendations',
        ],
      },
    ],
    artifacts: ['v6TYWObfSWgQU63o.png', 'lgWKnaQQq3ihRCo1.png', 'LosvI12wpM8QDQMW.png', 'SOUtojY83lzrPcXF.png', 'D9OG5p4QPNRTAw1c.png', 's5r5JZ4EEZhFmuBb.png'],
    prev: { slug: 'td-bank', title: 'Onboarding inside a regulated world.' },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
