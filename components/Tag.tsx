interface TagProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function Tag({ children, dark = false }: TagProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-dmmono)',
        fontSize: '9px',
        color: dark ? 'rgba(189,191,9,0.75)' : 'rgba(189,191,9,0.8)',
        border: `0.5px solid rgba(189,191,9,0.25)`,
        padding: '2px 6px',
        borderRadius: '2px',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
}
