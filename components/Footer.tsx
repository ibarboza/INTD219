export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--plum)',
        borderTop: '0.5px solid rgba(215,205,204,0.08)',
        padding: '20px 40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-dmmono)',
          fontSize: '11px',
          color: 'rgba(215,205,204,0.2)',
        }}
      >
        Ignacio Barboza · Senior UX &amp; Product Designer
      </span>
      <span
        style={{
          fontFamily: 'var(--font-dmmono)',
          fontSize: '11px',
          color: 'rgba(215,205,204,0.1)',
        }}
      >
        © 2026
      </span>
    </footer>
  );
}
