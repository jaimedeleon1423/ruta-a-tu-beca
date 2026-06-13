import Link from 'next/link';
import { ArrowRight, MapPin, Star, ChevronRight, Sparkles, Award, Clock } from 'lucide-react';

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
  { valor: 'Q7,500', label: 'máximo al año', icon: <Award size={18} color="var(--rotaract-gold)" /> },
  { valor: '2–3 años', label: 'de cobertura', icon: <Clock size={18} color="rgba(255,255,255,0.7)" /> },
  { valor: '100%', label: 'matrícula y mensualidades', icon: <Sparkles size={18} color="rgba(255,255,255,0.7)" /> },
];

const fotosFrases = [
  { foto: '/estudiante-1.jpg', frase: 'El esfuerzo de hoy es el éxito de mañana.', autor: 'Empieza tu ruta' },
  { foto: '/estudiante-2.jpg', frase: 'Cada página que estudias es un paso más cerca de tu sueño.', autor: 'Tú puedes lograrlo' },
  { foto: '/estudiante-3.jpg', frase: 'Una beca no cambia tu historia — la escribe.', autor: 'Ruta a tu Beca' },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .home-wrap { max-width: 1280px; margin: 0 auto; padding: 28px 40px 40px; }
        .modulos-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .testimonios-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .bottom-row { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; }
        .fotos-frases-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

        /* Hero desktop */
        .hero-section { padding: 40px 48px; }
        .hero-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .hero-stats { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
        .hero-stat-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 16px 20px; min-width: 160px; }
        .hero-stat-val { font-size: 24px; font-weight: 800; color: white; line-height: 1; }
        .hero-stat-label { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 4px; }

        /* Mobile overrides */
        @media (max-width: 767px) {
          .home-wrap { padding: 16px 16px 28px; }
          .hero-section { padding: 24px 20px 20px; }
          .hero-inner { flex-direction: column; gap: 0; }
          .hero-text { width: 100%; }
          .hero-text h1 { font-size: 30px; margin-bottom: 10px; }
          .hero-text p { font-size: 14px; margin-bottom: 18px; }
          .hero-btns { flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
          .hero-btns a:first-child { padding: 12px 22px; font-size: 14px; }
          .hero-btns a:last-child { padding: 12px 18px; font-size: 14px; }
          .hero-stats { flex-direction: row; gap: 8px; width: 100%; }
          .hero-stat-card { flex: 1; min-width: 0; padding: 10px 12px; border-radius: 12px; }
          .hero-stat-val { font-size: 16px; }
          .hero-stat-label { font-size: 10px; }
          .modulos-row { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .testimonios-row { grid-template-columns: 1fr; }
          .bottom-row { grid-template-columns: 1fr; }
          .fotos-frases-row { grid-template-columns: 1fr; gap: 10px; }
          .fotos-frases-row > div { height: 180px !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .home-wrap { padding: 20px 24px 32px; }
          .modulos-row { grid-template-columns: repeat(2, 1fr); }
          .testimonios-row { grid-template-columns: repeat(2, 1fr); }
          .fotos-frases-row { grid-template-columns: repeat(2, 1fr); }
          .hero-stat-card { min-width: 130px; }
        }
        @media (min-width: 600px) and (max-width: 767px) {
          .fotos-frases-row { grid-template-columns: repeat(2, 1fr) !important; }
          .fotos-frases-row > div { height: 200px !important; }
        }
      `}</style>

      <div className="home-wrap">

        {/* HERO */}
        <section className="hero-section" style={{
          background: 'linear-gradient(135deg, var(--rotaract-blue) 0%, #1a5db5 60%, #0d4a9e 100%)',
          borderRadius: 20, position: 'relative', overflow: 'hidden', marginBottom: 16,
        }}>
          <div style={{ position: 'absolute', top: -50, right: -50, width: 260, height: 260, borderRadius: '50%', background: 'rgba(193,0,66,0.15)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -40, width: 280, height: 280, borderRadius: '50%', background: 'rgba(247,168,27,0.1)', pointerEvents: 'none' }} />

          <div className="hero-inner" style={{ position: 'relative' }}>
            <div className="hero-text" style={{ maxWidth: 560 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 99, padding: '5px 14px', marginBottom: 16 }}>
                <MapPin size={13} color="rgba(255,255,255,0.9)" />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Guatemala · Ciclo diversificado</span>
              </div>
              <h1 style={{ fontSize: 44, fontWeight: 800, color: 'white', marginBottom: 16, lineHeight: 1.08 }}>
                Tu beca<br />empieza aquí
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.82)', marginBottom: 28, lineHeight: 1.55 }}>
                Te guiamos paso a paso: desde descubrir qué quieres estudiar hasta conseguir tu beca de diversificado.
              </p>
              <div className="hero-btns" style={{ display: 'flex', gap: 12 }}>
                <Link href="/modulo/1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--rotaract-cranberry)', color: 'white', padding: '14px 28px', borderRadius: 99, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 20px rgba(193,0,66,0.4)' }}>
                  Empieza ahora <ArrowRight size={17} />
                </Link>
                <Link href="/becas/vista-hermosa" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', padding: '14px 24px', borderRadius: 99, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
                  <Star size={15} fill="var(--rotaract-gold)" color="var(--rotaract-gold)" /> Ver beca
                </Link>
              </div>
            </div>

            {/* STATS */}
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat-card">
                  <div style={{ marginBottom: 6 }}>{s.icon}</div>
                  <div className="hero-stat-val">{s.valor}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTOS CON FRASES */}
        <div className="fotos-frases-row" style={{ marginBottom: 20 }}>
          {fotosFrases.map((item, i) => (
            <div key={i} style={{ borderRadius: 18, overflow: 'hidden', position: 'relative', height: 240 }}>
              <img src={item.foto} alt={item.frase} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,60,124,0.85) 0%, rgba(12,60,124,0.3) 50%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px 14px' }}>
                <p style={{ color: 'white', fontSize: 14, fontWeight: 700, lineHeight: 1.4, marginBottom: 5, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>&ldquo;{item.frase}&rdquo;</p>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.autor}</span>
              </div>
              <div style={{ position: 'absolute', top: 14, left: 14, width: 4, height: 28, borderRadius: 99, background: 'var(--rotaract-cranberry)' }} />
            </div>
          ))}
        </div>

        {/* BECA DESTACADA */}
        <Link href="/becas/vista-hermosa" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--rotaract-gold-light)', border: '1.5px solid rgba(247,168,27,0.4)', borderRadius: 16, padding: '14px 18px', textDecoration: 'none', marginBottom: 24 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--rotaract-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sparkles size={20} color="white" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#b86000', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 2 }}>Beca destacada</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Beca de Excelencia Vista Hermosa · Club Rotaract Guatemala Vista Hermosa</div>
          </div>
          <ChevronRight size={20} color="#b86000" style={{ flexShrink: 0 }} />
        </Link>

        {/* MÓDULOS */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>Las 4 etapas de tu ruta</h2>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ width: 28, height: 4, borderRadius: 99, background: i === 1 ? 'var(--rotaract-cranberry)' : 'rgba(12,60,124,0.12)' }} />
              ))}
            </div>
          </div>
          <div className="modulos-row">
            {modulos.map((mod) => (
              <Link key={mod.id} href={mod.href} style={{ display: 'flex', flexDirection: 'column', gap: 10, background: mod.color, border: `1.5px solid ${mod.border}`, borderRadius: 18, padding: '18px', textDecoration: 'none', position: 'relative' }}>
                {mod.destacado && (
                  <div style={{ position: 'absolute', top: -1, right: 14, background: 'var(--rotaract-cranberry)', color: 'white', fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: '0 0 8px 8px', letterSpacing: '0.05em' }}>DESTACADO</div>
                )}
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>{mod.emoji}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{mod.title}</div>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, flex: 1 }}>{mod.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 600, color: mod.accent }}>{mod.guias} guías →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* TESTIMONIOS */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Estudiantes que ya lo lograron</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 14 }}>Becadas del Club Rotaract Guatemala Vista Hermosa</p>
          <div className="testimonios-row">
            {testimonios.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img src={t.foto} alt={t.nombre} style={{ width: '100%', height: 200, objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ padding: '14px' }}>
                  <p style={{ fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 12, fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: 'var(--rotaract-cranberry-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: 'var(--rotaract-cranberry)' }}>{t.nombre[0]}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t.nombre}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t.carrera}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRINCIPIO + CTA */}
        <div className="bottom-row">
          <div style={{ background: 'var(--rotaract-blue)', borderRadius: 18, padding: '24px 28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(193,0,66,0.2)' }} />
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.92)', fontStyle: 'italic', lineHeight: 1.65, marginBottom: 8, position: 'relative' }}>
              &ldquo;Ningún estudiante debería perder una oportunidad educativa por falta de información.&rdquo;
            </p>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', position: 'relative' }}>Rotaract Club Guatemala Vista Hermosa</div>
          </div>
          <Link href="/modulo/1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'var(--rotaract-cranberry)', color: 'white', padding: '20px 36px', borderRadius: 18, textDecoration: 'none', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap', boxShadow: '0 6px 24px rgba(193,0,66,0.3)' }}>
            Empieza tu ruta <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </>
  );
}
