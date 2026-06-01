import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const modulos: Record<string, {
  id: number; emoji: string; title: string; color: string; accent: string;
  intro: string;
  guias: { num: string; titulo: string; desc: string; href: string; }[];
}> = {
  '1': {
    id: 1, emoji: '🧭', title: 'Descubre tu camino',
    color: 'var(--rotaract-blue-light)', accent: 'var(--rotaract-blue)',
    intro: 'Antes de buscar una beca, lo más importante es saber qué quieres estudiar y por qué. Estas guías te ayudarán a explorar tus intereses y conocer tus opciones.',
    guias: [
      { num: '01', titulo: '¿Qué quiero estudiar?', desc: 'Explora tus intereses, habilidades y lo que te apasiona para encontrar tu vocación.', href: '/guia/1' },
      { num: '02', titulo: 'Tipos de bachillerato en Guatemala', desc: 'Conoce todas las opciones de diversificado disponibles: bachillerato, magisterio, perito y más.', href: '/guia/2' },
      { num: '03', titulo: 'Cómo elegir el bachillerato adecuado', desc: 'Una guía práctica para tomar la mejor decisión según tus metas y situación.', href: '/guia/3' },
    ],
  },
  '2': {
    id: 2, emoji: '⭐', title: 'Encuentra una beca',
    color: '#fff3f7', accent: 'var(--rotaract-cranberry)',
    intro: 'Hay oportunidades esperándote. Aquí aprenderás qué es exactamente una beca, cómo funciona la Beca Vista Hermosa y qué otras opciones existen en Guatemala.',
    guias: [
      { num: '01', titulo: '¿Qué es una beca?', desc: 'Todo lo que necesitas saber sobre becas, cómo funcionan y qué tipos existen.', href: '/guia/4' },
      { num: '02', titulo: 'Beca Vista Hermosa ⭐', desc: 'La oportunidad destacada de la plataforma: requisitos, dotación y proceso.', href: '/becas/vista-hermosa' },
      { num: '03', titulo: 'Otras becas en Guatemala', desc: 'Un directorio de más oportunidades educativas para el diversificado.', href: '/guia/6' },
    ],
  },
  '3': {
    id: 3, emoji: '📋', title: 'Prepárate para aplicar',
    color: '#f0faf4', accent: '#1a7a3c',
    intro: 'Aplicar a una beca requiere preparación. Estas guías te explican paso a paso todo lo que necesitas hacer para presentar la mejor solicitud posible.',
    guias: [
      { num: '01', titulo: 'Documentos que necesitas', desc: 'Lista completa y explicada de todos los documentos que debes reunir.', href: '/guia/7' },
      { num: '02', titulo: 'Cómo escribir tu ensayo', desc: 'Aprende a escribir una carta o ensayo que realmente llame la atención.', href: '/guia/8' },
      { num: '03', titulo: 'La entrevista: cómo prepararte', desc: 'Consejos para presentarte con confianza y dejar una buena impresión.', href: '/guia/9' },
      { num: '04', titulo: 'Cómo construir tu perfil', desc: 'Actividades, actitudes y hábitos que hacen que tu candidatura destaque.', href: '/guia/10' },
    ],
  },
  '4': {
    id: 4, emoji: '💪', title: 'Sigue adelante',
    color: '#fff8ec', accent: '#b86000',
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
    <div>
      {/* Header */}
      <div style={{
        background: mod.color,
        padding: '20px 20px 28px',
        borderBottom: '1px solid var(--border)',
      }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, marginBottom: 20 }}>
          <ArrowLeft size={16} /> Inicio
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 36 }}>{mod.emoji}</span>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', marginBottom: 4, textTransform: 'uppercase' }}>Módulo {mod.id} de 4</div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.15 }}>{mod.title}</h1>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 16px' }}>

        {/* Progreso */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{
              flex: 1, height: 4, borderRadius: 99,
              background: i <= mod.id ? mod.accent : 'rgba(0,0,0,0.08)',
            }} />
          ))}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 20 }}>Módulo {mod.id} de 4</div>

        {/* Intro */}
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 24, padding: '14px', background: 'white', borderRadius: 14, border: '1px solid var(--border)' }}>
          {mod.intro}
        </p>

        {/* Guías */}
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
          {mod.guias.length} guías en este módulo
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {mod.guias.map((guia, i) => (
            <Link key={i} href={guia.href} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start',
              background: 'white', borderRadius: 16, padding: '16px',
              border: '1px solid var(--border)', textDecoration: 'none',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                background: mod.color, border: `1.5px solid ${mod.accent}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800, color: mod.accent,
              }}>{guia.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{guia.titulo}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.45 }}>{guia.desc}</div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
            </Link>
          ))}
        </div>

        {/* Navegación entre módulos */}
        <div style={{ display: 'flex', gap: 10 }}>
          {prevId && (
            <Link href={`/modulo/${prevId}`} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              border: '1.5px solid var(--border)', borderRadius: 14, padding: '13px',
              textDecoration: 'none', fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)',
            }}>
              <ArrowLeft size={16} /> Módulo {prevId}
            </Link>
          )}
          {nextId && (
            <Link href={`/modulo/${nextId}`} style={{
              flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'var(--rotaract-cranberry)', borderRadius: 14, padding: '13px',
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
