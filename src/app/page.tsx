import Link from 'next/link';
import { ArrowRight, MapPin, Star, ChevronRight, Sparkles, Award, Clock, BookOpen, FileText, Users, Trophy } from 'lucide-react';

const modulos = [
  { id: 1, emoji: '🧭', title: 'Descubre tu camino', desc: 'Explora qué quieres estudiar y conoce los tipos de bachillerato en Guatemala.', guias: 3, color: '#e8f0fb', accent: '#0050a2', border: 'rgba(0,80,162,0.18)', href: '/modulo/1' },
  { id: 2, emoji: '⭐', title: 'Encuentra una beca', desc: 'Conoce la Beca Vista Hermosa y otras oportunidades disponibles para ti.', guias: 3, color: '#fff3f7', accent: '#c10042', border: 'rgba(193,0,66,0.25)', href: '/modulo/2', destacado: true },
  { id: 3, emoji: '📋', title: 'Prepárate para aplicar', desc: 'Aprende a escribir tu ensayo, prepararte para la entrevista y armar tu perfil.', guias: 4, color: '#f0faf4', accent: '#1a7a3c', border: 'rgba(26,122,60,0.18)', href: '/modulo/3' },
  { id: 4, emoji: '💪', title: 'Sigue adelante', desc: 'Mantén la motivación sin importar el resultado.', guias: 2, color: '#fff8ec', accent: '#b86000', border: 'rgba(184,96,0,0.18)', href: '/modulo/4' },
];

const testimonios = [
  { nombre: 'Guadalupe', carrera: '4° Magisterio · Palencia', quote: 'No está malo soñar, lo malo es no luchar por hacer tus sueños realidad.', foto: '/guadalupe.jpg' },
  { nombre: 'Laura Sofía', carrera: '4° Magisterio · Palencia', quote: 'Esta beca me está abriendo muchas puertas.', foto: '/laura.jpg' },
  { nombre: 'Alison', carrera: 'Magisterio Preprimaria · Chinautla', quote: 'Ahora creo en mí y en todo lo que puedo lograr.', foto: '/alison.jpg' },
];

const stats = [
  { valor: 'Q7,500', label: 'máximo al año', icon: <Award size={20} color="var(--rotaract-gold)" /> },
  { valor: '2–3 años', label: 'de cobertura', icon: <Clock size={20} color="rgba(255,255,255,0.7)" /> },
  { valor: '100%', label: 'matrícula y mensualidades', icon: <Sparkles size={20} color="rgba(255,255,255,0.7)" /> },
];

const pasos = [
  { num: '01', icon: <BookOpen size={22} color="#0050a2" />, titulo: 'Explora tu camino', desc: 'Conoce los tipos de bachillerato y elige la carrera que va contigo.', color: '#e8f0fb', accent: '#0050a2' },
  { num: '02', icon: <Star size={22} color="#c10042" />, titulo: 'Encuentra tu beca', desc: 'Descubre becas disponibles para estudiantes guatemaltecos.', color: '#fff3f7', accent: '#c10042' },
  { num: '03', icon: <FileText size={22} color="#1a7a3c" />, titulo: 'Arma tu aplicación', desc: 'Redacta tu ensayo, prepara documentos y destaca en la entrevista.', color: '#f0faf4', accent: '#1a7a3c' },
  { num: '04', icon: <Trophy size={22} color="#b86000" />, titulo: 'Consigue tu beca', desc: 'Recibe el apoyo económico y comienza tu carrera con confianza.', color: '#fff8ec', accent: '#b86000' },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .home-wrap { max-width: 1280px; margin: 0 auto; padding: 28px 40px 40px; }
        .hero-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .hero-stats { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
        .modulos-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .testimonios-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .bottom-row { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; }
        .pasos-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 900px) {
          .home-wrap { padding: 20px 20px 32px; }
          .hero-inner { flex-direction: column; }
          .hero-stats { flex-direction: row; flex-wrap: wrap; }
          .modulos-row { grid-template-columns: repeat(2, 1fr); }
          .testimonios-row { grid-template-columns: 1fr; }
          .bottom-row { grid-template-columns: 1fr; }
          .pasos-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .modulos-row { grid-template-columns: 1fr; }
          .pasos-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="home-wrap">

        {/* HERO */}
        <section style={{
          padding: '40px 48px',
          background: 'linear-gradient(135deg, var(--rotaract-blue) 0%, #1a5db5 60%, #0d4a9e 100%)',
          borderRadius: 24, position: 'relative', overflow: 'hidden', marginBottom: 20,
        }}>
          <div style={{ position: 'absolute', top: -50, right: -50, width: 260, height: 260, borderRadius: '50%', background: 'rgba(193,0,66,0.15)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -40, width: 280, height: 280, borderRadius: '50%', background: 'rgba(247,168,27,0.1)', pointerEvents: 'none' }} />
          <div className="hero-inner" style={{ position: 'relative' }}>
            <div style={{ maxWidth: 560 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 99, padding: '5px 14px', marginBottom: 20 }}>
                <MapPin size={13} color="rgba(255,255,255,0.9)" />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Guatemala · Ciclo diversificado</span>
              </div>
              <h1 style={{ fontSize: 44, fontWeight: 800, color: 'white', marginBottom: 16, lineHeight: 1.08 }}>
                Tu beca<br />empieza aquí
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.82)', marginBottom: 32, lineHeight: 1.55 }}>
                Te guiamos paso a paso: desde descubrir qué quieres estudiar hasta conseguir tu beca de diversificado.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/modulo/1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--rotaract-cranberry)', color: 'white', padding: '14px 28px', borderRadius: 99, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 20px rgba(193,0,66,0.4)' }}>
                  Empieza ahora <ArrowRight size={17} />
                </Link>
                <Link href="/becas/vista-hermosa" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', padding: '14px 24px', borderRadius: 99, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
                  <Star size={15} fill="var(--rotaract-gold)" color="var(--rotaract-gold)" /> Ver beca
                </Link>
              </div>
            </div>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: '16px 20px', minWidth: 160 }}>
                  <div style={{ marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: 'white', lineHeight: 1 }}>{s.valor}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>¿Cómo funciona Ruta a tu Beca?</h2>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>4 pasos para pasar de la duda a la beca</p>
            </div>
            <Link href="/modulo/1" style={{ fontSize: 13, fontWeight: 600, color: 'var(--rotaract-cranberry)', textDecoration: 'none' }}>Ver todo →</Link>
          </div>
          <div className="pasos-row">
            {pasos.map((p, i) => (
              <div key={i} style={{ background: p.color, border: `1.5px solid ${p.accent}22`, borderRadius: 20, padding: '20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 36, fontWeight: 900, color: p.accent, opacity: 0.08, lineHeight: 1, fontFamily: 'monospace' }}>{p.num}</div>
                <div style={{ width: 44, height: 44, borderRadius: 13, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                  {p.icon}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{p.titulo}</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</p>
                <div style={{ marginTop: 14, width: 28, height: 3, borderRadius: 99, background: p.accent, opacity: 0.5 }} />
              </div>
            ))}
          </div>
        </div>

        {/* BECA DESTACADA */}
        <Link href="/becas/vista-hermosa" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--rotaract-gold-light)', border: '1.5px solid rgba(247,168,27,0.4)', borderRadius: 18, padding: '16px 20px', textDecoration: 'none', marginBottom: 28 }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--rotaract-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sparkles size={22} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#b86000', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>Beca destacada</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>Beca de Excelencia Vista Hermosa · Club Rotaract Guatemala Vista Hermosa</div>
          </div>
          <ChevronRight size={22} color="#b86000" style={{ flexShrink: 0 }} />
        </Link>

        {/* MÓDULOS */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>Las 4 etapas de tu ruta</h2>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ width: 32, height: 4, borderRadius: 99, background: i === 1 ? 'var(--rotaract-cranberry)' : 'rgba(12,60,124,0.12)' }} />
              ))}
            </div>
          </div>
          <div className="modulos-row">
            {modulos.map((mod) => (
              <Link key={mod.id} href={mod.href} style={{ display: 'flex', flexDirection: 'column', gap: 12, background: mod.color, border: `1.5px solid ${mod.border}`, borderRadius: 20, padding: '20px', textDecoration: 'none', position: 'relative' }}>
                {mod.destacado && (
                  <div style={{ position: 'absolute', top: -1, right: 16, background: 'var(--rotaract-cranberry)', color: 'white', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: '0 0 10px 10px', letterSpacing: '0.05em' }}>DESTACADO</div>
                )}
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>{mod.emoji}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{mod.title}</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, flex: 1 }}>{mod.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: mod.accent }}>{mod.guias} guías →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* TESTIMONIOS */}
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Estudiantes que ya lo lograron</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>Becadas del Club Rotaract Guatemala Vista Hermosa</p>
          <div className="testimonios-row">
            {testimonios.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img
                  src={t.foto}
                  alt={t.nombre}
                  style={{ width: '100%', height: 200, objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{ padding: '16px' }}>
                  <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 14, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, background: 'var(--rotaract-cranberry-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: 'var(--rotaract-cranberry)' }}>{t.nombre[0]}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{t.nombre}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.carrera}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRINCIPIO + CTA */}
        <div className="bottom-row">
          <div style={{ background: 'var(--rotaract-blue)', borderRadius: 20, padding: '28px 32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(193,0,66,0.2)' }} />
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.92)', fontStyle: 'italic', lineHeight: 1.65, marginBottom: 10, position: 'relative' }}>
              &ldquo;Ningún estudiante debería perder una oportunidad educativa por falta de información.&rdquo;
            </p>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', position: 'relative' }}>Rotaract Club Guatemala Vista Hermosa</div>
          </div>
          <Link href="/modulo/1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'var(--rotaract-cranberry)', color: 'white', padding: '20px 40px', borderRadius: 20, textDecoration: 'none', fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap', boxShadow: '0 6px 24px rgba(193,0,66,0.3)' }}>
            Empieza tu ruta <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </>
  );
}
