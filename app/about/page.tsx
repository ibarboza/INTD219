export const metadata = {
  title: 'About',
  description: 'Senior UX and product design professional based in Costa Rica.',
  openGraph: {
    title: 'About — Ignacio Barboza',
    type: 'website',
    url: 'https://ignaciobarboza.com/about',
  },
  alternates: { canonical: 'https://ignaciobarboza.com/about' },
};

const teal = '#114B5F';
const plum = '#36151E';
const acid = '#BDBF09';
const tealMid = 'rgba(17,75,95,0.45)';
const tealRule = 'rgba(17,75,95,0.12)';

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-dmmono)',
  fontSize: 11,
  color: acid,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  marginBottom: 16,
};

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-archivo)',
  fontWeight: 700,
  fontSize: 22,
  color: teal,
  letterSpacing: '-0.02em',
  marginBottom: 24,
};

const experienceBlocks = [
  {
    title: 'Banking & Financial Services',
    body: 'Enterprise onboarding, KYC workflows, regulated experiences, assisted and self-serve channels, design systems.',
  },
  {
    title: 'Automotive',
    body: 'Vehicle configuration, incentives discovery, digital shopping journeys, research programs, customer decision support.',
  },
  {
    title: 'Enterprise Platforms & Global Web',
    body: 'Global website ecosystems, information architecture, scalable UX patterns, stakeholder alignment.',
  },
  {
    title: 'Public Services & CX',
    body: 'Journey mapping, service thinking, experience strategy, user-centered problem solving.',
  },
  {
    title: 'Concept & Venture Work',
    body: 'CX strategy, service blueprints, pitch narratives, early-stage service design.',
  },
];

const capabilityClusters = [
  {
    heading: 'Strategy & Discovery',
    pills: [
      'UX Strategy',
      'CX Strategy',
      'Product Discovery',
      'Problem Framing',
      'Journey Mapping',
      'Service Blueprinting',
      'Workshop Facilitation',
    ],
  },
  {
    heading: 'Research & Insight',
    pills: [
      'User Interviews',
      'Usability Testing',
      'Research Planning',
      'Insight Synthesis',
      'Behavioral Analysis',
      'PIE Scoring',
      'Hypothesis Framing',
    ],
  },
  {
    heading: 'Product & Interaction Design',
    pills: [
      'Information Architecture',
      'User Flows',
      'Wireframes',
      'Prototyping',
      'Interaction Design',
      'Responsive Design',
      'Annotations',
      'Handoff',
    ],
  },
  {
    heading: 'Systems & Delivery',
    pills: [
      'Enterprise UX',
      'Design Systems',
      'Component Design',
      'Cross-Functional Collaboration',
      'Agile Delivery',
      'Scalable Documentation',
    ],
  },
];

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '80px 40px',
      }}
    >
      <div className="grid md:grid-cols-[280px_1fr] grid-cols-1 gap-16 md:gap-[64px]">
        {/* LEFT COLUMN */}
        <div style={{ position: 'sticky', top: 80, alignSelf: 'flex-start' }}>
          <img
            src="/0YPUInaPnsZIG9ia.jpg"
            alt="Ignacio Barboza — Senior UX & Product Designer"
            style={{
              maxWidth: 200,
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: 4,
              display: 'block',
              marginBottom: 20,
            }}
          />

          <h2
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 700,
              fontSize: 16,
              color: teal,
              margin: '0 0 4px',
            }}
          >
            Ignacio Barboza
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-dmmono)',
              fontSize: 11,
              color: tealMid,
              margin: '0 0 2px',
            }}
          >
            Senior UX & Product Designer
          </p>

          <p
            style={{
              fontFamily: 'var(--font-dmmono)',
              fontSize: 11,
              color: tealMid,
              margin: '0 0 12px',
            }}
          >
            Costa Rica · English & Spanish
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: acid,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: 11,
                color: plum,
              }}
            >
              Let&apos;s talk about your next project
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginTop: 24,
            }}
          >
            <a
              href="https://www.linkedin.com/in/ignaciobarbozadesign/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: 12,
                color: teal,
                borderBottom: `0.5px solid ${tealRule}`,
                textDecoration: 'none',
                paddingBottom: 2,
                width: 'fit-content',
              }}
            >
              ↗ LinkedIn
            </a>

            <a
              href="mailto:barbozaignacio@hotmail.com"
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: 12,
                color: teal,
                textDecoration: 'none',
                width: 'fit-content',
              }}
            >
              barbozaignacio@hotmail.com
            </a>

            <a
              href="/Ignacio_Barboza_Resume_2026.pdf"
              download
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: 12,
                color: acid,
                textDecoration: 'none',
                width: 'fit-content',
              }}
            >
              ↓ Download resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Bio */}
          <div style={{ marginBottom: 56 }}>
            {[
              "I'm a senior UX and product design professional based in Costa Rica, with experience across research, strategy, product design, service design, enterprise UX, and digital experience delivery.",
              'My work is grounded in understanding how people navigate complex decisions. I\'ve supported enterprise onboarding and KYC experiences, automotive shopping journeys, incentives discovery, global website redesigns, research programs, journey mapping, service blueprints, and scalable design documentation.',
              'I bring a horizontal UX perspective with a strong research foundation. I can zoom out to understand business goals, service ecosystems, and customer journeys, then zoom in to shape flows, interaction patterns, prototypes, annotations, and delivery-ready design documentation.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: 17,
                  color: tealMid,
                  lineHeight: 1.75,
                  marginBottom: 20,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Experience Range */}
          <div style={{ marginBottom: 56 }}>
            <p style={sectionLabel}>Experience Range</p>
            <h2 style={sectionHeading}>Where I&apos;ve worked</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {experienceBlocks.map((block) => (
                <div
                  key={block.title}
                  style={{
                    padding: 20,
                    border: `0.5px solid ${tealRule}`,
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: 14,
                      color: teal,
                      marginBottom: 8,
                    }}
                  >
                    {block.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontSize: 14,
                      color: tealMid,
                      lineHeight: 1.7,
                    }}
                  >
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities */}
          <div style={{ marginBottom: 56 }}>
            <p style={sectionLabel}>Core Capabilities</p>
            <h2 style={sectionHeading}>Core Capabilities</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {capabilityClusters.map((cluster) => (
                <div key={cluster.heading}>
                  <p
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontWeight: 700,
                      fontSize: 13,
                      color: teal,
                      marginBottom: 12,
                    }}
                  >
                    {cluster.heading}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                    }}
                  >
                    {cluster.pills.map((pill) => (
                      <span
                        key={pill}
                        style={{
                          fontFamily: 'var(--font-dmmono)',
                          fontSize: 10,
                          color: tealMid,
                          border: `0.5px solid ${tealRule}`,
                          padding: '3px 10px',
                          borderRadius: 2,
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p style={sectionLabel}>Tools</p>
            <h2 style={{ ...sectionHeading, marginBottom: 16 }}>Tools</h2>
            <p
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: 11,
                color: tealMid,
              }}
            >
              Figma · Adobe Creative Suite · Miro · UserTesting · Maze · Hotjar · Medallia · Adobe Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
