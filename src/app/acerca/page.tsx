import { Heart, Mail } from 'lucide-react';
export default function AcercaPage() {
  return (
    <div style={{ padding: '24px 16px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>Acerca de</h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
        Ruta a tu Beca es una plataforma educativa para jóvenes guatemaltecos que quieren obtener su beca de diversificado.
      </p>
      <div style={{ background: 'white', borderRadius: 18, padding: '20px', border: '1px solid var(--border)', marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <Heart size={20} color="var(--rotaract-cranberry)" style={{ flexShrink: 0 }} />
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Nuestra misión</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Ningún estudiante debería perder una oportunidad educativa por falta de información.
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--rotaract-cranberry-light)', borderRadius: 18, padding: '20px', border: '1px solid rgba(193,0,66,0.15)' }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--rotaract-cranberry)' }}>Beca Vista Hermosa</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 12 }}>
          Desarrollado para apoyar la difusión de la Beca de Excelencia del Club Rotaract Guatemala Vista Hermosa.
        </p>
        <a href="mailto:becasrotaryvistahermosa@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--rotaract-cranberry)', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
          <Mail size={14} /> becasrotaryvistahermosa@gmail.com
        </a>
      </div>
    </div>
  );
}
