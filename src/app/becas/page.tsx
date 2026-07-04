import Link from 'next/link';
import { Star, ChevronRight, ExternalLink } from 'lucide-react';

const becas = [
  {
    nombre: 'Beca de Excelencia Vista Hermosa',
    org: 'Club Rotaract Guatemala Vista Hermosa',
    emoji: '⭐',
    destacada: true,
    cubre: 'Matrícula y mensualidades hasta Q7,500/año',
    modalidad: 'Presencial · Plan diario · Lunes a viernes',
    href: '/becas/vista-hermosa',
    externo: false,
  },
  {
    nombre: 'Becas SEGEPLAN',
    org: 'Secretaría de Planificación y Programación de la Presidencia',
    emoji: '🏛️',
    cubre: 'Varios tipos de apoyo educativo a nivel nacional',
    modalidad: 'Consultar en página oficial',
    href: 'https://www.segeplan.gob.gt',
    externo: true,
  },
  {
    nombre: 'Becas MINEDUC',
    org: 'Ministerio de Educación de Guatemala',
    emoji: '📚',
    cubre: 'Apoyo a estudiantes de escasos recursos en el nivel diversificado',
    modalidad: 'Consultar disponibilidad en tu municipio',
    href: 'https://www.mineduc.gob.gt',
    externo: true,
  },
  {
    nombre: 'Becas Glasswing International',
    org: 'Glasswing International Guatemala',
    emoji: '🌐',
    cubre: 'Programas de liderazgo y apoyo educativo para jóvenes',
    modalidad: 'Consultar en página oficial',
    href: 'https://www.glasswing.org',
    externo: true,
  },
];

export default function BecasPage() {
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 20px 60px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6, color: 'var(--text-primary)' }}>Becas disponibles</h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 28, lineHeight: 1.6 }}>
        Un directorio de oportunidades educativas para estudiantes guatemaltecos de diversificado. Siempre verifica los requisitos actualizados en la página oficial de cada beca.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {becas.map((b, i) => (
          <div key={i} style={{ position: 'relative' }}>
            {b.destacada && (
              <div style={{ position: 'absolute', top: -1, left: 20, background: 'var(--rotaract-gold)', color: 'white', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: '0 0 10px 10px', letterSpacing: '0.05em', zIndex: 1 }}>DESTACADA</div>
            )}
            <Link
              href={b.href}
              target={b.externo ? '_blank' : undefined}
              rel={b.externo ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: b.destacada ? 'var(--rotaract-gold-light)' : 'white',
                border: b.destacada ? '1.5px solid rgba(247,168,27,0.4)' : '1px solid var(--border)',
                borderRadius: 18, padding: '20px', textDecoration: 'none',
              }}
            >
              <div style={{ width: 50, height: 50, borderRadius: 14, background: b.destacada ? 'var(--rotaract-gold)' : 'var(--rotaract-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>{b.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>{b.nombre}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>{b.org}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 3 }}>✓ {b.cubre}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>📅 {b.modalidad}</div>
              </div>
              {b.externo
                ? <ExternalLink size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                : <ChevronRight size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
              }
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, background: 'var(--rotaract-blue-light)', border: '1px solid rgba(0,80,162,0.15)', borderRadius: 16, padding: '18px 20px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--rotaract-blue)', marginBottom: 6 }}>💡 ¿Conoces otra beca?</div>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          Si conoces una beca que debería estar en este directorio, escríbenos a <strong>becasrotaryvistahermosa@gmail.com</strong> y la evaluamos para agregarla.
        </p>
      </div>
    </div>
  );
}
