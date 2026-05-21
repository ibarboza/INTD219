import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import TileCard from '@/components/TileCard';

export const metadata = {
  title: 'Ignacio Barboza — Senior UX & Product Designer',
  description:
    'Senior UX and product design professional with 8+ years across banking, automotive, enterprise platforms, and global web ecosystems.',
  openGraph: {
    title: 'Ignacio Barboza — Senior UX & Product Designer',
    description:
      'Senior UX and product design professional with 8+ years across banking, automotive, enterprise platforms, and global web ecosystems.',
    type: 'website',
    url: 'https://ignaciobarboza.com',
  },
  alternates: {
    canonical: 'https://ignaciobarboza.com',
  },
};

// ─── Skills diagram data ───────────────────────────────────────────────────────

const skills = [
  {
    dot: 'acid' as const,
    name: 'UX & Product Design',
    sub: 'Flows, wireframes & interaction models',
    svg: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="12" height="12" stroke="#114B5F" strokeWidth="1.5" />
        <rect
          x="20"
          y="4"
          width="12"
          height="12"
          stroke="#BDBF09"
          strokeWidth="1.5"
          fill="rgba(189,191,9,0.15)"
        />
        <rect x="4" y="20" width="12" height="12" stroke="#114B5F" strokeWidth="1.5" />
        <rect x="20" y="20" width="12" height="12" stroke="#114B5F" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    dot: 'acid' as const,
    name: 'UX Research & Insight',
    sub: 'Plan, run & synthesize research',
    svg: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="14" r="7" stroke="#BDBF09" strokeWidth="1.5" />
        <path d="M12 28 Q18 22 24 28" stroke="#114B5F" strokeWidth="1.5" />
        <path d="M14 14 l3 3 l5-5" stroke="#114B5F" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    dot: 'plum' as const,
    name: 'CX Strategy',
    sub: 'Journey context & cross-channel decisions',
    svg: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M4 22 Q10 10 18 18 Q26 26 32 14"
          stroke="#BDBF09"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    dot: 'acid' as const,
    name: 'Journey & Service Design',
    sub: 'Map gaps, align stakeholders',
    svg: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <line x1="4" y1="12" x2="32" y2="12" stroke="#114B5F" strokeWidth="1" />
        <line x1="4" y1="18" x2="32" y2="18" stroke="#114B5F" strokeWidth="1" />
        <line x1="4" y1="24" x2="32" y2="24" stroke="#114B5F" strokeWidth="1" />
        <circle cx="10" cy="18" r="3" fill="#BDBF09" />
        <circle cx="22" cy="12" r="3" fill="#BDBF09" />
        <circle cx="28" cy="24" r="3" fill="#BDBF09" />
      </svg>
    ),
  },
  {
    dot: 'plum' as const,
    name: 'Enterprise UX & Systems',
    sub: 'Regulated flows & design systems',
    svg: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="6" width="28" height="18" rx="2" stroke="#BDBF09" strokeWidth="1.5" />
        <line x1="18" y1="24" x2="18" y2="30" stroke="#114B5F" strokeWidth="1.5" />
        <line x1="12" y1="30" x2="24" y2="30" stroke="#114B5F" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    dot: 'acid' as const,
    name: 'Cross-Functional Collaboration',
    sub: 'Reduce ambiguity, keep work moving',
    svg: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle
          cx="18"
          cy="18"
          r="5"
          fill="#BDBF09"
          fillOpacity="0.3"
          stroke="#BDBF09"
          strokeWidth="1.5"
        />
        <circle cx="6" cy="10" r="4" stroke="#114B5F" strokeWidth="1.5" />
        <circle cx="30" cy="10" r="4" stroke="#114B5F" strokeWidth="1.5" />
        <circle cx="6" cy="26" r="4" stroke="#114B5F" strokeWidth="1.5" />
        <circle cx="30" cy="26" r="4" stroke="#114B5F" strokeWidth="1.5" />
        <line x1="11" y1="13" x2="14" y2="15" stroke="#114B5F" strokeWidth="1" />
        <line x1="25" y1="13" x2="22" y2="15" stroke="#114B5F" strokeWidth="1" />
        <line x1="11" y1="23" x2="14" y2="21" stroke="#114B5F" strokeWidth="1" />
        <line x1="25" y1="23" x2="22" y2="21" stroke="#114B5F" strokeWidth="1" />
      </svg>
    ),
  },
];

// ─── SVG scenes for work tiles ─────────────────────────────────────────────────

const MazdaResearchSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 500"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    style={{ position: 'absolute', inset: 0 }}
  >
    <rect x="0" y="0" width="400" height="44" fill="rgba(17,75,95,0.1)" />
    <rect x="20" y="16" width="40" height="12" rx="6" stroke="rgba(17,75,95,0.3)" strokeWidth="1" />
    <rect x="70" y="16" width="60" height="12" rx="6" stroke="rgba(17,75,95,0.3)" strokeWidth="1" />
    <rect x="140" y="16" width="40" height="12" rx="6" stroke="rgba(17,75,95,0.3)" strokeWidth="1" />
    <rect x="300" y="12" width="80" height="20" rx="4" fill="rgba(189,191,9,0.3)" stroke="rgba(189,191,9,0.5)" strokeWidth="1" />
    <text x="20" y="100" fontFamily="serif" fontSize="22" fontStyle="italic" fill="rgba(17,75,95,0.7)">
      Electric for short trips.
    </text>
    <text x="20" y="128" fontFamily="serif" fontSize="22" fontStyle="italic" fill="rgba(17,75,95,0.5)">
      Hybrid for longer journeys.
    </text>
    <rect x="20" y="150" width="170" height="100" rx="4" stroke="rgba(17,75,95,0.2)" strokeWidth="1" />
    <rect x="210" y="150" width="170" height="100" rx="4" stroke="rgba(17,75,95,0.2)" strokeWidth="1" />
    <rect x="20" y="265" width="360" height="60" rx="4" stroke="rgba(17,75,95,0.15)" strokeWidth="1" />
    <rect x="20" y="340" width="80" height="24" rx="12" stroke="rgba(189,191,9,0.5)" strokeWidth="1" fill="rgba(189,191,9,0.1)" />
    <rect x="112" y="340" width="80" height="24" rx="12" stroke="rgba(17,75,95,0.2)" strokeWidth="1" />
  </svg>
);

const TDBankSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 250"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    style={{ position: 'absolute', inset: 0 }}
  >
    <rect x="20" y="20" width="60" height="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <text x="20" y="70" fontFamily="sans-serif" fontSize="14" fill="rgba(255,255,255,0.5)">
      About your business
    </text>
    <rect x="20" y="85" width="360" height="28" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <rect x="20" y="122" width="360" height="28" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <rect x="20" y="159" width="170" height="28" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <circle cx="28" cy="205" r="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <circle cx="52" cy="205" r="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
);

const MazdaIncentivesSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 250"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    style={{ position: 'absolute', inset: 0 }}
  >
    <text x="20" y="40" fontFamily="mono" fontSize="10" fill="rgba(54,21,30,0.5)" letterSpacing="2">
      CURRENT OFFER
    </text>
    <text x="20" y="80" fontFamily="serif" fontSize="24" fontStyle="italic" fill="rgba(54,21,30,0.8)">
      $0 down.
    </text>
    <text x="20" y="110" fontFamily="serif" fontSize="24" fontStyle="italic" fill="rgba(54,21,30,0.65)">
      2.9% APR.
    </text>
    <text x="20" y="140" fontFamily="serif" fontSize="24" fontStyle="italic" fill="rgba(54,21,30,0.5)">
      36 months.
    </text>
    <rect x="20" y="160" width="340" height="50" rx="4" stroke="rgba(54,21,30,0.2)" strokeWidth="1" />
    <rect x="20" y="220" width="100" height="28" rx="4" stroke="rgba(189,191,9,0.6)" strokeWidth="1" />
    <text x="42" y="239" fontFamily="sans-serif" fontSize="12" fill="rgba(189,191,9,0.8)">
      Apply →
    </text>
  </svg>
);

const MazdaBuildSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 600 250"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    style={{ position: 'absolute', inset: 0 }}
  >
    <rect x="0" y="0" width="600" height="44" fill="rgba(17,75,95,0.1)" />
    <text x="20" y="100" fontFamily="serif" fontSize="20" fontStyle="italic" fill="rgba(17,75,95,0.6)">
      Electric for short trips.
    </text>
    <text x="20" y="125" fontFamily="serif" fontSize="20" fontStyle="italic" fill="rgba(17,75,95,0.45)">
      Hybrid for longer journeys.
    </text>
    <text x="200" y="180" fontFamily="serif" fontSize="60" fontStyle="italic" fill="rgba(17,75,95,0.12)" fontWeight="700">
      CX-70
    </text>
    <rect x="20" y="150" width="50" height="24" rx="12" stroke="rgba(189,191,9,0.7)" strokeWidth="1" fill="rgba(189,191,9,0.15)" />
    <rect x="80" y="150" width="50" height="24" rx="12" stroke="rgba(17,75,95,0.2)" strokeWidth="1" />
    <rect x="140" y="150" width="50" height="24" rx="12" stroke="rgba(17,75,95,0.2)" strokeWidth="1" />
    <rect x="460" y="100" width="120" height="130" rx="4" stroke="rgba(17,75,95,0.2)" strokeWidth="1" />
  </svg>
);

const HexagonSvg = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 800 250"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    style={{ position: 'absolute', inset: 0 }}
  >
    <text x="40" y="50" fontFamily="sans-serif" fontSize="24" fontWeight="700" letterSpacing="8" fill="rgba(255,255,255,0.7)">
      HEXAGON
    </text>
    <text x="40" y="80" fontFamily="sans-serif" fontSize="12" fill="rgba(255,255,255,0.2)">
      Industries
    </text>
    <text x="140" y="80" fontFamily="sans-serif" fontSize="12" fill="rgba(255,255,255,0.2)">
      Solutions
    </text>
    <text x="240" y="80" fontFamily="sans-serif" fontSize="12" fill="rgba(255,255,255,0.2)">
      About
    </text>
    <rect x="40" y="100" width="340" height="130" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <text x="56" y="125" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.4)">
      Agriculture
    </text>
    <text x="56" y="147" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.3)">
      Aerospace
    </text>
    <text x="56" y="169" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.2)">
      Public Safety
    </text>
    <text x="56" y="191" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.15)">
      Marine
    </text>
    <text x="600" y="210" fontFamily="mono" fontSize="10" fill="rgba(189,191,9,0.5)">
      20+ industries · 3M+ users
    </text>
  </svg>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '72px 40px 64px',
          borderBottom: '0.5px solid rgba(17,75,95,0.12)',
          boxSizing: 'border-box',
        }}
      >
        <ScrollReveal>
          {/* Top row */}
          <div
            className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center"
            style={{ marginBottom: 40 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: 11,
                color: 'rgba(17,75,95,0.45)',
              }}
            >
              Senior UX &amp; Product Designer · Costa Rica · 8+ years
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: '#BDBF09',
                  display: 'inline-block',
                  marginRight: 6,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-dmmono)',
                  fontSize: 11,
                  color: '#36151E',
                }}
              >
                Let&apos;s talk about your next project
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 900,
              fontSize: 64,
              letterSpacing: '-0.04em',
              color: '#114B5F',
              maxWidth: 820,
              marginBottom: 36,
              lineHeight: 1.1,
            }}
          >
            I turn{' '}
            <span style={{ color: '#BDBF09' }}>complexity</span> into clarity.
          </h1>

          {/* Bottom row */}
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-end">
            <p
              style={{
                fontFamily: 'var(--font-dmsans)',
                fontSize: 15,
                color: 'rgba(17,75,95,0.45)',
                maxWidth: 440,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Research, strategy, interaction design, and delivery — across banking,
              automotive, enterprise platforms, and global digital ecosystems. I help
              teams move from hard problems to experiences that work.
            </p>
            <div
              className="flex flex-col items-start sm:items-end"
              style={{ gap: 10 }}
            >
              <Link
                href="/#work"
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#36151E',
                  borderBottom: '1px solid #36151E',
                  textDecoration: 'none',
                  paddingBottom: 1,
                }}
              >
                View selected work →
              </Link>
              <Link
                href="mailto:barbozaignacio@hotmail.com"
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: 13,
                  color: 'rgba(17,75,95,0.45)',
                  textDecoration: 'none',
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── SECTION 2: Skills Visual ────────────────────────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '52px 40px',
          borderBottom: '0.5px solid rgba(17,75,95,0.12)',
          boxSizing: 'border-box',
        }}
      >
        <ScrollReveal>
          {/* Section label */}
          <p
            style={{
              fontFamily: 'var(--font-dmmono)',
              fontSize: 11,
              color: '#36151E',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 36,
              margin: '0 0 36px 0',
            }}
          >
            What I do
          </p>

          {/* Diagram — scrollable on mobile */}
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                minWidth: 720,
              }}
            >
              {/* Horizontal connector line behind nodes */}
              <div
                style={{
                  position: 'absolute',
                  top: 44,
                  left: 44,
                  right: 44,
                  height: 1,
                  background: 'rgba(17,75,95,0.12)',
                  zIndex: 0,
                }}
              />

              {skills.map((skill, i) => (
                <React.Fragment key={skill.name}>
                  {/* Node */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      flex: 1,
                      zIndex: 1,
                    }}
                  >
                    {/* Circle wrapper */}
                    <div
                      style={{
                        position: 'relative',
                        width: 88,
                        height: 88,
                      }}
                    >
                      {/* Small dot at top */}
                      <span
                        style={{
                          position: 'absolute',
                          top: -4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 9,
                          height: 9,
                          borderRadius: '50%',
                          background: skill.dot === 'acid' ? '#BDBF09' : '#36151E',
                          zIndex: 2,
                        }}
                      />
                      {/* Circle */}
                      <div
                        style={{
                          width: 88,
                          height: 88,
                          borderRadius: '50%',
                          border: '1.5px solid rgba(17,75,95,0.12)',
                          background: '#FCFCFC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        {skill.svg}
                      </div>
                    </div>

                    {/* Stem */}
                    <div
                      style={{
                        width: 1,
                        height: 20,
                        background: 'rgba(17,75,95,0.12)',
                        margin: '0 auto',
                      }}
                    />

                    {/* Label block */}
                    <div style={{ textAlign: 'center', padding: '0 4px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-dmmono)',
                          fontSize: 10,
                          color: 'rgba(17,75,95,0.3)',
                        }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-archivo)',
                          fontWeight: 700,
                          fontSize: 12,
                          color: '#114B5F',
                          letterSpacing: '-0.01em',
                          display: 'block',
                          marginTop: 2,
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-dmsans)',
                          fontSize: 11,
                          color: 'rgba(17,75,95,0.45)',
                          maxWidth: 110,
                          margin: '2px auto 0',
                          display: 'block',
                          lineHeight: 1.4,
                        }}
                      >
                        {skill.sub}
                      </span>
                    </div>
                  </div>

                  {/* Arrow between nodes */}
                  {i < skills.length - 1 && (
                    <span
                      style={{
                        color: 'rgba(17,75,95,0.2)',
                        fontSize: 14,
                        alignSelf: 'center',
                        marginTop: -40,
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── SECTION 3: Work Mosaic ──────────────────────────────────────────── */}
      <section id="work" style={{ width: '100%', boxSizing: 'border-box' }}>
        {/* Header row */}
        <div
          style={{
            padding: '36px 40px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 700,
              fontSize: 11,
              color: '#36151E',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Selected work
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dmmono)',
              fontSize: 11,
              color: 'rgba(17,75,95,0.45)',
            }}
          >
            05 projects
          </span>
        </div>

        {/* Mosaic grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 3,
            padding: '0 40px 56px',
          }}
        >
          {/* Tile 01 — Mazda Research (tall, col 1, rows 1-2) */}
          <TileCard
            href="/work/mazda-research"
            bgColor="#BEB9B1"
            gradient="linear-gradient(to top, rgba(17,75,95,0.85) 0%, rgba(17,75,95,0.3) 45%, transparent 70%)"
            num="01"
            client="Mazda"
            title="Connected Vehicle Research — Electrification & Hybrid Ownership"
            tags={['UX Research', 'Synthesis', 'Automotive']}
            style={{ gridColumn: '1', gridRow: 'span 2' }}
            minHeight="468px"
          >
            <MazdaResearchSvg />
          </TileCard>

          {/* Tile 04 — TD Bank (row 1, col 2) */}
          <TileCard
            href="/work/td-bank"
            bgColor="#0A2316"
            gradient="linear-gradient(to top, rgba(10,35,22,0.9) 0%, rgba(10,35,22,0.4) 50%, transparent 75%)"
            num="04"
            client="TD Bank"
            title="Small Business Onboarding — Reducing Drop-off in Regulated Flows"
            tags={['Enterprise UX', 'Banking', 'Interaction Design']}
            style={{ gridColumn: '2', gridRow: '1' }}
            minHeight="230px"
          >
            <TDBankSvg />
          </TileCard>

          {/* Tile 03 — Mazda Incentives (row 1, col 3) */}
          <TileCard
            href="/work/mazda-incentives"
            bgColor="#CBBFBE"
            gradient="linear-gradient(to top, rgba(54,21,30,0.8) 0%, rgba(54,21,30,0.3) 50%, transparent 75%)"
            num="03"
            client="Mazda"
            title="Incentives & Offers — Contextual Financing at the Point of Decision"
            tags={['CX Strategy', 'Automotive', 'Conversion']}
            style={{ gridColumn: '3', gridRow: '1' }}
            minHeight="230px"
          >
            <MazdaIncentivesSvg />
          </TileCard>

          {/* Tile 02 — Mazda Build & Price (row 2, col 2-3) */}
          <TileCard
            href="/work/mazda-build"
            bgColor="#A8B2BC"
            gradient="linear-gradient(to top, rgba(17,75,95,0.85) 0%, rgba(17,75,95,0.3) 45%, transparent 70%)"
            num="02"
            client="Mazda"
            title="Build & Price — Personalisation Flow for EV & Hybrid Configurator"
            tags={['Product Design', 'Automotive', 'eCommerce']}
            style={{ gridColumn: '2 / span 2', gridRow: '2' }}
            minHeight="230px"
          >
            <MazdaBuildSvg />
          </TileCard>

          {/* Tile 05 — Hexagon (row 3, all cols) */}
          <TileCard
            href="/work/hexagon"
            bgColor="#0C3847"
            gradient="linear-gradient(to top, rgba(12,56,71,0.9) 0%, rgba(12,56,71,0.4) 50%, transparent 75%)"
            num="05"
            client="Hexagon"
            title="Global Enterprise Platform — UX Strategy Across 20+ Industry Verticals"
            tags={['Enterprise UX', 'Systems Design', 'CX Strategy', 'Global']}
            style={{ gridColumn: '1 / span 3', gridRow: '3' }}
            minHeight="230px"
          >
            <HexagonSvg />
          </TileCard>
        </div>
      </section>

      {/* ── SECTION 4: Contact CTA ──────────────────────────────────────────── */}
      <section
        style={{
          background: '#36151E',
          padding: '80px 40px',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <ScrollReveal>
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center">
            {/* Left */}
            <div>
              {/* Signal row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#BDBF09',
                    display: 'inline-block',
                    marginRight: 6,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-dmmono)',
                    fontSize: 11,
                    color: 'rgba(215,205,204,0.6)',
                  }}
                >
                  Let&apos;s talk about your next project
                </span>
              </div>

              {/* Headline */}
              <h2
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 900,
                  fontSize: 40,
                  color: '#FCFCFC',
                  letterSpacing: '-0.03em',
                  maxWidth: 480,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Let&apos;s build something that makes complexity clear.
              </h2>
            </div>

            {/* Right */}
            <div
              className="flex flex-col items-start sm:items-end"
              style={{ gap: 12 }}
            >
              <Link
                href="https://www.linkedin.com/in/ignaciobarbozadesign/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-dmmono)',
                  fontSize: 12,
                  color: '#BDBF09',
                  borderBottom: '1px solid rgba(189,191,9,0.3)',
                  textDecoration: 'none',
                  paddingBottom: 1,
                }}
              >
                ↗ LinkedIn
              </Link>
              <Link
                href="mailto:barbozaignacio@hotmail.com"
                style={{
                  fontFamily: 'var(--font-dmmono)',
                  fontSize: 12,
                  color: '#BDBF09',
                  borderBottom: '1px solid rgba(189,191,9,0.3)',
                  textDecoration: 'none',
                  paddingBottom: 1,
                }}
              >
                barbozaignacio@hotmail.com
              </Link>
              <p
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: 12,
                  color: 'rgba(215,205,204,0.35)',
                  textAlign: 'right',
                  margin: 0,
                }}
              >
                Senior UX · Product Design / CX Strategy · Enterprise Experience
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
