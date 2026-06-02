import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const modulos: Record<string, {
  id: number; emoji: string; title: string; color: string; accent: string; border: string;
  foto: string; intro: string;
  guias: { num: string; titulo: string; desc: string; href: string; }[];
}> = {
  '1': {
    id: 1, emoji: '🧭', title: 'Descubre tu camino',
    color: '#e8f0fb', accent: '#0050a2', border: 'rgba(0,80,162,0.18)',
    foto: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
    intro: 'Antes de buscar una beca, lo más importante es saber qué quieres estudiar y por qué. Estas guías te ayudarán a explorar tus intereses y conocer tus opciones.',
    guias: [
      { num: '01', titulo: '¿Qué quiero estudiar?', desc: 'Explora tus intereses, habilidades y lo que te apasiona para encontrar tu vocación.', href: '/guia/1' },
      { num: '02', titulo: 'Tipos de bachillerato en Guatemala', desc: 'Conoce todas las opciones de diversificado: bachillerato, magisterio, perito y más.', href: '/guia/2' },
      { num: '03', titulo: 'Cómo elegir el bachillerato adecuado', desc: 'Una guía práctica para tomar la mejor decisión según tus metas y situación.', href: '/guia/3' },
    ],
  },
  '2': {
    id: 2, emoji: '⭐', title: 'Encuentra una beca',
    color: '#fff3f7', accent: '#c10042', border: 'rgba(193,0,66,0.22)',
    foto: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
    intro: 'Hay oportunidades esperándote. Aquí aprenderás qué es exactamente una beca, cómo funciona la Beca Vista Hermosa y qué otras opciones existen en Guatemala.',
    guias: [
      { num: '01', titulo: '¿Qué es una beca?', desc: 'Todo lo que necesitas saber sobre becas, cómo funcionan y qué tipos existen.', href: '/guia/4' },
      { num: '02', titulo: 'Beca Vista Hermosa ⭐', desc: 'La oportunidad destacada de la plataforma: requisitos, dotación y proceso completo.', href: '/becas/vista-hermosa' },
      { num: '03', titulo: 'Otras becas en Guatemala', desc: 'Un directorio de más oportunidades educativas para el diversificado.', href: '/guia/6' },
    ],
  },
  '3': {
    id: 3, emoji: '📋', title: 'Prepárate para aplicar',
    color: '#f0faf4', accent: '#1a7a3c', border: 'rgba(26,122,60,0.18)',
    foto: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
    intro: 'Aplicar a una beca requiere preparación. Estas guías te explican paso a paso todo lo que necesitas hacer para presentar la mejor solicitud posible.',
    guias: [
      { num: '01', titulo: 'Documentos que necesitas', desc: 'Lista completa y explicada de todos los documentos que debes reunir.', href: '/guia/7' },
      { num: '02', titulo: 'Cómo escribir tu ensayo', desc: 'Aprende a escribir una carta que realmente llame la atención.', href: '/guia/8' },
      { num: '03', titulo: 'La entrevista: cómo prepararte', desc: 'Consejos para presentarte con confianza y dejar una buena impresión.', href: '/guia/9' },
      { num: '04', titulo: 'Cómo construir tu perfil', desc: 'Actividades y actitudes que hacen que tu candidatura destaque.', href: '/guia/10' },
    ],
  },
  '4': {
    id: 4, emoji: '💪', title: 'Sigue adelante',
    color: '#fff8ec', accent: '#b86000', border: 'rgba(184,96,0,0.18)',
    foto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    intro: 'El proceso puede ser difícil, pero cada paso te hace crecer. Estas guías son para mantenerte fuerte sin importar lo que pase.',
    guias: [
      { num: '01', titulo: 'Si no obtienes la beca esta vez', desc: 'Qué hacer cuando las cosas no salen como esperabas. No es el fin.', href: '/guia/11' },
      { num: '02', titulo: 'Cómo mantener la motivación', desc: 'Técnicas y mentalidad para no rendirte en el camino hacia tu meta.', href: '/guia/12' },
    ],
  },
};

export default async function ModuloPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mod = modulos[id];
  if (!mod) notFound();

  const prevId = mod.id > 1 ? mod.id - 1 : null;
  const nextId = mod.id < 4 ? mod.id + 1 : null;

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px 60px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Foto de cabecera */}
        <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 32, height: 240, position: 'relative' }}>
          <img src={mod.foto} alt={mod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <Link href="/" style={{ position: 'absolute', top: 20, left: 20, display: 'inline-flex', alignItems: 'center', gap: 6, color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 500, background: 'rgba(0,0,0,0.3)', padding: '6px 12px', borderRadius: 99, backdropFilter: 'blur(8px)' }}>
            <ArrowLeft size={14} /> Inicio
          </Link>
          <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>Módulo {mod.id} de 4</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 28 }}>{mod.emoji}</span>
              <h1 style={{ fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.15 }}>{mod.title}</h1>
            </div>
          </div>
        </div>

        {/* Progreso */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ flex: 1, height: 5, borderRadius: 99, background: i <= mod.id ? mod.accent : 'rgba(0,0,0,0.08)' }} />
            ))}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Módulo {mod.id} de 4</div>
        </div>

        {/* Intro */}
        <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32, padding: '16px 20px', background: mod.color, borderRadius: 14, border: `1px solid ${mod.border}`, borderLeft: `4px solid ${mod.accent}` }}>
          {mod.intro}
        </div>

        {/* Guías */}
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>
          {mod.guias.length} guías en este módulo
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
          {mod.guias.map((guia, i) => (
            <Link key={i} href={guia.href} style={{
              display: 'flex', gap: 16, alignItems: 'center',
              background: 'white', borderRadius: 16, padding: '18px 20px',
              border: '1px solid var(--border)', textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 13, flexShrink: 0,
                background: mod.color, border: `1.5px solid ${mod.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 800, color: mod.accent,
              }}>{guia.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{guia.titulo}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.45 }}>{guia.desc}</div>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            </Link>
          ))}
        </div>

        {/* Navegación entre módulos */}
        <div style={{ display: 'flex', gap: 12 }}>
          {prevId && (
            <Link href={`/modulo/${prevId}`} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              border: '1.5px solid var(--border)', borderRadius: 14, padding: '14px',
              textDecoration: 'none', fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)',
            }}>
              <ArrowLeft size={16} /> Módulo {prevId}
            </Link>
          )}
          {nextId && (
            <Link href={`/modulo/${nextId}`} style={{
              flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'var(--rotaract-cranberry)', borderRadius: 14, padding: '14px',
              textDecoration: 'none', fontSize: 14, fontWeight: 700, color: 'white',
              boxShadow: '0 4px 16px rgba(193,0,66,0.25)',
            }}>
              Módulo {nextId} <ArrowRight size={16} />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ['1','2','3','4'].map(id => ({ id }));
}
