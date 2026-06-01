import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ maxWidth: 480, margin: '80px auto', padding: '0 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Página no encontrada</h1>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
        Lo sentimos, esta página no existe.
      </p>
      <Link href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'var(--rotaract-cranberry)', color: 'white',
        padding: '12px 24px', borderRadius: 99, textDecoration: 'none',
        fontSize: 14, fontWeight: 700,
      }}>
        Volver al inicio
      </Link>
    </div>
  );
}
