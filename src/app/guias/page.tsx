import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
const guias = [
  { id: 1, num: '01', mod: 1, titulo: '¿Qué quiero estudiar?', emoji: '🤔' },
  { id: 2, num: '02', mod: 1, titulo: 'Tipos de bachillerato en Guatemala', emoji: '🏫' },
  { id: 3, num: '03', mod: 1, titulo: 'Cómo elegir el bachillerato adecuado', emoji: '🧭' },
  { id: 4, num: '04', mod: 2, titulo: '¿Qué es una beca?', emoji: '🎓' },
  { id: 5, num: '05', mod: 2, titulo: 'Beca Vista Hermosa', emoji: '⭐' },
  { id: 6, num: '06', mod: 2, titulo: 'Otras becas en Guatemala', emoji: '🔍' },
  { id: 7, num: '07', mod: 3, titulo: 'Documentos que necesitas', emoji: '📄' },
  { id: 8, num: '08', mod: 3, titulo: 'Cómo escribir tu ensayo', emoji: '✍️' },
  { id: 9, num: '09', mod: 3, titulo: 'La entrevista', emoji: '🎤' },
  { id: 10, num: '10', mod: 3, titulo: 'Construye tu perfil', emoji: '🌟' },
  { id: 11, num: '11', mod: 4, titulo: 'Si no obtienes la beca', emoji: '💙' },
  { id: 12, num: '12', mod: 4, titulo: 'Mantén la motivación', emoji: '🔥' },
];
export default function GuiasPage() {
  return (
    <div style={{ padding: '24px 16px' }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Todas las guías</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {guias.map(g => (
          <Link key={g.id} href={g.id === 5 ? '/becas/vista-hermosa' : `/guia/${g.id}`} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'white', borderRadius: 14, padding: '14px',
            border: '1px solid var(--border)', textDecoration: 'none',
          }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{g.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>Guía {g.num} · Módulo {g.mod}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{g.titulo}</div>
            </div>
            <ChevronRight size={16} color="var(--text-muted)" />
          </Link>
        ))}
      </div>
    </div>
  );
}
