import Link from 'next/link';
import { notFound } from 'next/navigation';
import Tag from '@/components/Tag';
import { getCaseStudy, caseStudies } from '@/lib/caseStudies';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return {
    title: cs?.h1 ?? 'Case Study',
    openGraph: {
      title: cs?.h1,
      type: 'website',
      url: `https://ignaciobarboza.com/work/${slug}`,
    },
    alternates: { canonical: `https://ignaciobarboza.com/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <>
      {/* CaseStudyHeader */}
      <section style={{ backgroundColor: cs.headerBg, padding: '96px 40px 80px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-dmmono)',
              fontSize: '11px',
              color: 'rgba(215,205,204,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            {cs.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 900,
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: '#FCFCFC',
              letterSpacing: '-0.04em',
              maxWidth: '800px',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {cs.h1}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 500,
              fontSize: '20px',
              color: 'rgba(215,205,204,0.65)',
              maxWidth: '640px',
              marginTop: '20px',
              marginBottom: 0,
            }}
          >
            {cs.subheadline}
          </p>
          {/* Tags */}
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {cs.tags.map((tag) => (
              <Tag key={tag} dark>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      {/* CaseStudyBody */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px' }}>
        {cs.sections.map((section, i) => (
          <div key={section.label}>
            {/* Section label */}
            <div
              style={{
                fontFamily: 'var(--font-dmmono)',
                fontSize: '11px',
                color: 'var(--acid)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '12px',
                marginTop: i === 0 ? 0 : '60px',
              }}
            >
              {section.label}
            </div>

            {/* Section heading */}
            <h2
              style={{
                fontFamily: 'var(--font-archivo)',
                fontWeight: 700,
                fontSize: '28px',
                color: 'var(--teal)',
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              {section.heading}
            </h2>

            {/* Body paragraphs */}
            {section.body.map((para, j) => (
              <p
                key={j}
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: '17px',
                  color: 'var(--teal-mid)',
                  lineHeight: 1.75,
                  maxWidth: '720px',
                  marginBottom: '16px',
                  marginTop: 0,
                }}
              >
                {para}
              </p>
            ))}

            {/* Pull quote */}
            {section.pullQuote && (
              <blockquote
                style={{
                  borderLeft: '3px solid var(--acid)',
                  background: 'rgba(189,191,9,0.06)',
                  padding: '24px 28px',
                  margin: '32px 0',
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: '24px',
                  color: 'var(--teal)',
                  maxWidth: '720px',
                }}
              >
                {section.pullQuote}
              </blockquote>
            )}

            {/* List items */}
            {section.isList && section.listItems && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.listItems.map((item, k) => (
                  <li
                    key={k}
                    style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontSize: '17px',
                      color: 'var(--teal-mid)',
                      lineHeight: 1.75,
                      padding: '6px 0',
                      borderBottom: '0.5px solid var(--teal-rule)',
                    }}
                  >
                    {'— '}{item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* ArtifactGrid */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 40px 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3px',
          }}
        >
          {cs.artifacts.map((artifact, i) => (
            <div key={artifact} style={{ position: 'relative', width: '100%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/work/${artifact}`}
                alt={`${cs.h1} — artifact ${i + 1}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CaseStudyNav */}
      <nav
        aria-label="Case study navigation"
        style={{
          borderTop: '0.5px solid var(--teal-rule)',
          padding: '48px 40px',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {cs.prev ? (
            <Link
              href={`/work/${cs.prev.slug}`}
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dmmono)',
                  fontSize: '10px',
                  color: 'var(--teal-mid)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                ← Previous
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'var(--teal)',
                }}
              >
                {cs.prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {cs.next ? (
            <Link
              href={`/work/${cs.next.slug}`}
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                alignItems: 'flex-end',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dmmono)',
                  fontSize: '10px',
                  color: 'var(--teal-mid)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Next →
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'var(--teal)',
                }}
              >
                {cs.next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}
