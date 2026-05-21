'use client';

import { useState } from 'react';
import Link from 'next/link';
import Tag from './Tag';

interface TileCardProps {
  href: string;
  bgColor: string;
  gradient: string;
  num: string;
  client: string;
  title: string;
  tags: string[];
  children: React.ReactNode;
  style?: React.CSSProperties;
  minHeight?: string;
}

export default function TileCard({
  href,
  bgColor,
  gradient,
  num,
  client,
  title,
  tags,
  children,
  style,
  minHeight = '230px',
}: TileCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'block',
        backgroundColor: bgColor,
        minHeight,
        textDecoration: 'none',
        ...style,
      }}
    >
      {/* SVG scene */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {children}
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradient,
        }}
      />

      {/* Tile number */}
      <span
        style={{
          position: 'absolute',
          top: 14,
          left: 18,
          fontFamily: 'var(--font-dmmono)',
          fontSize: 10,
          color: 'rgba(255,255,255,0.3)',
          zIndex: 2,
        }}
      >
        {num}
      </span>

      {/* Tile bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '14px 18px 18px',
          zIndex: 2,
        }}
      >
        {/* Client + Arrow row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dmmono)',
              fontSize: 9,
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {client}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dmsans)',
              fontSize: 14,
              color: hovered ? '#BDBF09' : 'rgba(255,255,255,0.6)',
              transform: hovered ? 'translateX(3px)' : 'none',
              transition: 'color 0.2s ease, transform 0.2s ease',
              display: 'inline-block',
            }}
          >
            →
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: 'var(--font-archivo)',
            fontWeight: 800,
            fontSize: 14,
            color: '#FCFCFC',
            letterSpacing: '-0.02em',
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Tag key={tag} dark>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
