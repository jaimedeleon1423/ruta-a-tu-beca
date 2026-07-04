import Link from 'next/link';
import { ArrowLeft, Star, CheckCircle2, Mail, BookOpen, Users, Heart, Award, Zap, Clock, AlertCircle } from 'lucide-react';

const requisitos = [
  { icon: '🇬🇹', texto: 'Ser guatemalteco/a' },
  { icon: '📊', texto: 'Promedio de 85+ puntos en los últimos 2 años de básico' },
  { icon: '📜', texto: 'Diploma de ciclo básico' },
  { icon: '❤️', texto: 'Escasos recursos económicos' },
];

const documentos = [
  { num: '01', titulo: 'Foto reciente', desc: 'Foto tamaño cédula o pasaporte, reciente' },
  { num: '02', titulo: 'Carta de solicitud', desc: 'Explica qué carrera deseas estudiar y por qué la elegiste' },
  { num: '03', titulo: 'Carta de recomendación', desc: 'Del director de tu establecimiento de básico' },
  { num: '04', titulo: 'Calificaciones', desc: 'De los últimos 2 años de educación básica' },
];

const caracteristicas = [
  { icon: '🎓', titulo: 'Trayectoria académica', desc: 'Promedio de 85+ y compromiso con el aprendizaje' },
  { icon: '💡', titulo: 'Capacidad de aprendizaje', desc: 'Interés por aprender cosas nuevas' },
  { icon: '🔥', titulo: 'Motivación', desc: 'Deseos de superación personal' },
  { icon: '🌟', titulo: 'Liderazgo', desc: 'Participación activa en tu comunidad escolar' },
  { icon: '🤝', titulo: 'Colaboración', desc: 'Ayuda a compañeros y docentes' },
  { icon: '✅', titulo: 'Responsabilidad', desc: 'Cumples con tus tareas y compromisos' },
];

const condiciones = [
  'Asistir a clases según el calendario del establecimiento',
  'Enviar copias de calificaciones periódicamente',
  'Participar en actividades de servicio del Club Rotaract',
  'Demostrar buen comportamiento ante autoridades y compañeros',
  'Firmar el compromiso de aceptación de condiciones',
];

const calendario = [
  { mes: 'Julio', accion: 'Período para aplicar', desc: 'Prepara y envía tu solicitud con todos los documentos.', color: '#0050a2', bg: '#e8f0fb' },
  { mes: 'Agosto', accion: 'Revisión de solicitudes', desc: 'El comité evalúa todas las aplicaciones recibidas.', color: '#b86000', bg: '#fff8ec' },
  { mes: 'Septiembre', accion: 'Notificación de resultados', desc: 'Recibirás respuesta a tiempo para buscar otras opciones si es necesario.', color: '#1a7a3c', bg: '#f0faf4' },
];

const testimonios = [
  { nombre: 'Guadalupe Lemus', carrera: '4° Magisterio · Palencia', quote: 'No está malo soñar, lo malo es no luchar por hacer tus sueños realidad.' },
  { nombre: 'Ruth Santisteban', carrera: '5° Bachillerato · Mixco', quote: 'Gracias a esta beca, ese sueño está más cerca de hacerse realidad.' },
  { nombre: 'Yohana Vanesa', carrera: '4° Bachillerato Computación · Mixco', quote: 'Gracias por confiar en mí.' },
];

export default function BecaVistaHermosaPage() {
  return (
    <>
      <style>{`
        .vh-wrap { max-width: 1280px; margin: 0 auto; padding: 0 40px 60px; }
        .vh-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 28px; }
        .vh-body { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .vh-caract { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 20px; }
        .vh-testimonios { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 28px; }
        .vh-ctas { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .vh-header { border-radius: 24px; overflow: hidden; margin-bottom: 28px; position: relative; height: 320px; }
        .vh-cal { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 24px; }

        @media (max-width: 767px) {
          .vh-wrap { padding: 0 16px 48px; }
          .vh-header { height: 260px; border-radius: 18px; margin-bottom: 16px; }
          .vh-stats { gap: 8px; margin-bottom: 16px; }
          .vh-stat-card { padding: 14px 10px !important; }
          .vh-stat-val { font-size: 18px !important; }
          .vh-stat-label { font-size: 11px !important; }
          .vh-body { grid-template-columns: 1fr; gap: 0; }
          .vh-foto { display: none; }
          .vh-caract { grid-template-columns: 1fr 1fr; }
          .vh-testimonios { grid-template-columns: 1fr; gap: 10px; }
          .vh-ctas { grid-template-columns: 1fr; }
          .vh-ctas a { font-size: 14px !important; padding: 14px !important; }
          .vh-cal { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="vh-wrap">

        {/* Header */}
        <div className="vh-header">
          <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80" alt="Beca Vista Hermosa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(12,60,124,0.85) 0%, rgba(193,0,66,0.6) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: '28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14 }}>
              <ArrowLeft size={16} /> Inicio
            </Link>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--rotaract-gold)', borderRadius: 99, padding: '4px 14px', marginBottom: 14 }}>
                <Star size={12} color="white" fill="white" />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>BECA DESTACADA</span>
              </div>
              <h1 style={{ fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: 8 }}>
                Beca de Excelencia<br />Vista Hermosa
              </h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)' }}>
                Club Rotaract Guatemala Vista Hermosa · Plan diario, presencial, lunes a viernes
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="vh-stats">
          {[
            { icon: <Award size={20} color="var(--rotaract-cranberry)" />, valor: 'Q7,500', label: 'máximo al año (matrícula + mensualidades)' },
            { icon: <Clock size={20} color="var(--rotaract-blue)" />, valor: '2–3 años', label: 'según la carrera elegida' },
            { icon: <Zap size={20} color="#b86000" />, valor: '100%', label: 'cubre matrícula y mensualidades' },
          ].map((stat, i) => (
            <div key={i} className="vh-stat-card" style={{ background: 'white', borderRadius: 16, padding: '18px', textAlign: 'center', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>{stat.icon}</div>
              <div className="vh-stat-val" style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{stat.valor}</div>
              <div className="vh-stat-label" style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* AVISO plan presencial */}
        <div style={{ background: '#fff8ec', border: '1.5px solid rgba(247,168,27,0.35)', borderRadius: 14, padding: '14px 18px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <AlertCircle size={18} color="#b86000" style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#b86000', marginBottom: 4 }}>Modalidad presencial · Plan diario</div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Esta beca aplica únicamente para carreras de plan diario, de lunes a viernes, en modalidad presencial. Si el colegio está en la ciudad de Guatemala, debes contemplar tiempos de traslado, transporte y costos adicionales al planificar tu presupuesto.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="vh-body">
          {/* Columna izquierda */}
          <div>
            <div style={{ background: 'var(--rotaract-blue-light)', borderRadius: 16, padding: '20px', marginBottom: 20, border: '1px solid rgba(0,80,162,0.12)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <BookOpen size={20} color="var(--rotaract-blue)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--rotaract-blue)', marginBottom: 8 }}>¿Qué es esta beca?</h2>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    La Beca de Excelencia Vista Hermosa es otorgada por el Club Rotaract Guatemala Vista Hermosa. Cubre matrícula y mensualidades hasta Q7,500 anuales para que puedas estudiar tu diversificado en modalidad presencial, plan diario. Aplica para colegios que ofrezcan la carrera de tu elección.
                  </p>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>¿Puedo aplicar?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              {requisitos.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'white', borderRadius: 12, padding: '12px 14px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 20 }}>{r.icon}</span>
                  <span style={{ fontSize: 14, color: 'var(--text-primary)', flex: 1 }}>{r.texto}</span>
                  <CheckCircle2 size={16} color="var(--rotaract-cranberry)" style={{ flexShrink: 0 }} />
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>Documentos — Beca Vista Hermosa</h2>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>Estos son los documentos base para esta beca. Cada beca puede tener requisitos distintos — siempre revisa el listado oficial.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {documentos.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'white', borderRadius: 14, padding: '14px', border: '1px solid var(--border)' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, flexShrink: 0, background: 'var(--rotaract-cranberry)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: 'white' }}>{d.num}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>{d.titulo}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff8ec', border: '1.5px solid rgba(247,168,27,0.3)', borderRadius: 16, padding: '16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Mail size={20} color="#b86000" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#b86000', marginBottom: 2 }}>Envía tu solicitud a</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', wordBreak: 'break-all' }}>becasrotaryvistahermosa@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div>
            <div className="vh-foto" style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 20, height: 200 }}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Estudiantes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>¿Qué busca la beca en ti?</h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 14 }}>El Rotaract evalúa estas características:</p>
            <div className="vh-caract">
              {caracteristicas.map((c, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 14, padding: '14px 12px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 22, display: 'block', marginBottom: 6 }}>{c.icon}</span>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>{c.titulo}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{c.desc}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>Si obtienes la beca, debes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              {condiciones.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#f0faf4', borderRadius: 12, padding: '11px 13px', border: '1px solid rgba(26,122,60,0.14)' }}>
                  <CheckCircle2 size={16} color="#1a7a3c" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CALENDARIO */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Calendario de aplicación</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 14 }}>Los resultados se notifican en septiembre para que tengas tiempo de buscar otras opciones si es necesario.</p>
        <div className="vh-cal">
          {calendario.map((c, i) => (
            <div key={i} style={{ background: c.bg, borderRadius: 16, padding: '18px', border: `1.5px solid ${c.color}22` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: c.color, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{c.mes}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{c.accion}</div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* TESTIMONIOS */}
        <div style={{ marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Users size={18} color="var(--rotaract-cranberry)" />
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>Quienes ya lo lograron</h2>
          </div>
          <div className="vh-testimonios">
            {testimonios.map((t, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--border)', borderLeft: '4px solid var(--rotaract-cranberry)' }}>
                <div style={{ padding: '18px' }}>
                  <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 14, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--rotaract-cranberry-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: 'var(--rotaract-cranberry)', flexShrink: 0 }}>{t.nombre[0]}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t.nombre}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t.carrera}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="vh-ctas">
            <a href="mailto:becasrotaryvistahermosa@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--rotaract-cranberry)', color: 'white', padding: '16px', borderRadius: 16, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 6px 24px rgba(193,0,66,0.3)' }}>
              <Mail size={18} /> Enviar mi solicitud
            </a>
            <Link href="/modulo/3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', color: 'var(--rotaract-cranberry)', border: '1.5px solid var(--rotaract-cranberry)', padding: '16px', borderRadius: 16, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
              <Heart size={16} /> Prepárate para aplicar
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
