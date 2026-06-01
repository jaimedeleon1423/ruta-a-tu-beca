import Link from 'next/link';
import { Star, ChevronRight } from 'lucide-react';
export default function BecasPage() {
  return (
    <div style={{ padding: '24px 16px' }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Becas disponibles</h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>Oportunidades educativas para tu diversificado en Guatemala.</p>
      <Link href="/becas/vista-hermosa" style={{
        display: 'flex', alignItems: 'center', gap: 14, background: '#fff3f7',
        border: '2px solid rgba(193,0,66,0.25)', borderRadius: 18, padding: '18px',
        textDecoration: 'none', marginBottom: 12,
      }}>
        <div style={{ width: 46, height: 46, borderRadius: 14, background: 'var(--rotaract-cranberry)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Star size={22} color="white" fill="white" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--rotaract-cranberry)', letterSpacing: '0.06em', marginBottom: 3, textTransform: 'uppercase' }}>Beca destacada</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>Beca Vista Hermosa</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Hasta Q7,500/año · Rotaract Guatemala Vista Hermosa</div>
        </div>
        <ChevronRight size={18} color="var(--rotaract-cranberry)" />
      </Link>
      <div style={{ background: 'white', borderRadius: 16, padding: '18px', border: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>🔜</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>Más becas próximamente</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Estamos agregando más oportunidades. Vuelve pronto.</div>
      </div>
    </div>
  );
}
