import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lightbulb, CheckSquare, AlertCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

const guias: Record<string, {
  titulo: string; emoji: string; modulo: number; intro: string;
  foto?: string;
  secciones: { titulo: string; contenido: string; tipo?: 'normal' | 'tip' | 'checklist' | 'ejemplo' | 'warning' }[];
  prevId?: number; nextId?: number
}> = {
  '1': {
    titulo: '¿Qué quiero estudiar?', emoji: '🤔', modulo: 1,
    foto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80q=80',
    intro: 'Antes de buscar una beca, lo más importante es conocerte a ti mismo. Esta guía te ayudará a descubrir qué quieres estudiar.',
    prevId: undefined, nextId: 2,
    secciones: [
      { titulo: '¿Por qué es importante saber qué quiero estudiar?', contenido: 'Elegir qué estudiar es una de las decisiones más importantes de tu vida. Cuando estudias algo que te apasiona, es más fácil mantenerte motivado, obtener buenas calificaciones y crecer profesionalmente. También es más fácil convencer a una beca de que mereces su apoyo cuando tienes claro tu propósito.' },
      { titulo: 'Preguntas que debes hacerte', tipo: 'checklist', contenido: '¿Qué materias me gustan más en el colegio?\n¿Qué actividades hago cuando tengo tiempo libre?\n¿Qué tipo de trabajo me imagino haciendo de grande?\n¿Qué problemas del mundo me gustaría ayudar a resolver?\n¿En qué dicen los demás que soy bueno/a?' },
      { titulo: '💡 Consejo', tipo: 'tip', contenido: 'Habla con personas que ya trabajan en áreas que te llaman la atención. Pregúntales qué les gusta de su trabajo, qué fue difícil y si lo volverían a elegir. Esa conversación vale más que cualquier test vocacional.' },
      { titulo: 'No tienes que tener todo claro aún', contenido: 'Es completamente normal no saber exactamente qué quieres estudiar. Lo importante es explorar tus intereses. Visita ferias vocacionales. Lee sobre distintas profesiones. Poco a poco el camino se irá aclarando.' },
    ],
  },
  '2': {
    titulo: 'Tipos de bachillerato en Guatemala', emoji: '🏫', modulo: 1,
    foto: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=1200&q=80q=80',
    intro: 'En Guatemala existen varios tipos de diversificado. Aquí te explicamos las opciones más comunes para que puedas elegir con información.',
    prevId: 1, nextId: 3,
    secciones: [
      { titulo: 'Bachillerato en Ciencias y Letras', contenido: 'Es la opción más común. Tiene un enfoque general en ciencias (matemáticas, física, química, biología) y humanidades. Te prepara bien para ingresar a la universidad en casi cualquier carrera.\n\n⏱ Duración: 2 años' },
      { titulo: 'Magisterio', contenido: 'Te forma para ser maestro/a de primaria o preprimaria. Es una opción muy valorada, especialmente en comunidades rurales. El título te permite trabajar inmediatamente como docente.\n\n⏱ Duración: 3 años' },
      { titulo: 'Perito Contador', contenido: 'Enfocado en contabilidad, finanzas y administración de empresas. Muy útil si te interesa el área de negocios. Te permite trabajar en el área contable al graduarte.\n\n⏱ Duración: 3 años' },
      { titulo: 'Bachillerato en Computación', contenido: 'Combina el bachillerato general con formación en tecnología e informática. Ideal si te apasiona la tecnología y los sistemas.\n\n⏱ Duración: 2-3 años' },
      { titulo: '💡 ¿Cuál te conviene?', tipo: 'tip', contenido: 'Si quieres ir a la universidad, el Bachillerato en Ciencias y Letras es la mejor puerta. Si quieres trabajar pronto, el Magisterio o el Perito te dan herramientas inmediatas.' },
    ],
  },
  '3': {
    titulo: 'Cómo elegir el bachillerato adecuado', emoji: '🧭', modulo: 1,
    foto: '/guia-3-header.jpg',
    intro: 'Ya conoces las opciones. Ahora te ayudamos a tomar la mejor decisión para tu situación y tus metas.',
    prevId: 2, nextId: 4,
    secciones: [
      { titulo: 'Considera tus metas a largo plazo', contenido: '¿Quieres ir a la universidad? El Bachillerato en Ciencias y Letras es generalmente la mejor puerta de entrada.\n\n¿Quieres trabajar pronto? El Magisterio o el Perito Contador te dan herramientas para trabajar al graduarte.' },
      { titulo: 'Considera tu situación económica', contenido: 'Si necesitas trabajar mientras estudias, busca establecimientos con horarios flexibles o modalidad virtual. Recuerda que la Beca Vista Hermosa cubre matrícula y mensualidades, lo que alivia mucho la carga económica.' },
      { titulo: 'Antes de decidir, verifica esto', tipo: 'checklist', contenido: 'Investiga qué colegios ofrecen esa carrera cerca de tu casa\nConfirma los horarios y si hay modalidad virtual\nPregunta el costo y si aceptan la beca Vista Hermosa\nHabla con alguien que ya esté en esa carrera' },
      { titulo: '⚠️ Importante', tipo: 'warning', contenido: 'Una vez inscrito, cambiar de carrera puede significar perder el año. Tómate el tiempo necesario para decidir bien antes de inscribirte.' },
    ],
  },
  '4': {
    titulo: '¿Qué es una beca?', emoji: '🎓', modulo: 2,
    foto: '/guia-4-header.jpg',
    intro: 'Si nunca has solicitado una beca o no tienes claro qué es exactamente, esta guía es para ti.',
    prevId: 3, nextId: 6,
    secciones: [
      { titulo: '¿Qué es una beca?', contenido: 'Una beca es un apoyo económico que una organización, empresa o institución le da a un estudiante para que pueda estudiar. No es un préstamo: no tienes que devolverlo. Es un reconocimiento a tu potencial y una inversión en tu futuro.' },
      { titulo: '¿Qué puede cubrir?', tipo: 'checklist', contenido: 'Matrícula y cuota de inscripción\nMensualidades del colegio\nMateriales y útiles escolares\nTransporte (en algunas becas)\nAlimentación (en algunas becas)' },
      { titulo: '💡 La Beca Vista Hermosa cubre', tipo: 'tip', contenido: 'Matrícula y mensualidades hasta Q7,500 anuales. Eso puede representar entre 8 y 10 meses de colegio completamente pagados.' },
      { titulo: '¿Qué espera la beca de ti?', contenido: 'Las becas esperan que mantengas buenas calificaciones, tengas buen comportamiento y cumplas con los compromisos acordados. La Beca Vista Hermosa también pide que participes en actividades de servicio comunitario del Club Rotaract.' },
    ],
  },
  '6': {
    titulo: 'Otras becas en Guatemala', emoji: '🔍', modulo: 2,
    foto: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80q=80',
    intro: 'Además de la Beca Vista Hermosa, existen otras oportunidades educativas en Guatemala que vale la pena conocer.',
    prevId: 4, nextId: 7,
    secciones: [
      { titulo: 'MINEDUC - Ministerio de Educación', contenido: 'El Ministerio de Educación ofrece programas de apoyo para estudiantes destacados. Consulta en tu colegio o en la dirección departamental de educación más cercana.' },
      { titulo: 'Fundación Carlos F. Novella', contenido: 'Ofrece becas para estudiantes guatemaltecos destacados con necesidad económica. Busca información actualizada en su sitio web.' },
      { titulo: 'Becas en colegios privados', contenido: 'Muchos colegios privados tienen sus propios programas de becas o descuentos para estudiantes con buen rendimiento y necesidad económica.' },
      { titulo: '💡 Tip para encontrar más becas', tipo: 'tip', contenido: 'Pregunta en tu municipalidad, en organizaciones religiosas de tu comunidad, en empresas locales y en fundaciones. Muchas becas no se publicitan ampliamente y se consiguen preguntando directamente.' },
      { titulo: 'Qué hacer mientras buscas', tipo: 'checklist', contenido: 'Habla con el director de tu colegio\nPregunta en la municipalidad de tu municipio\nBusca en redes sociales de organizaciones locales\nPregunta a familiares o conocidos que hayan tenido becas' },
    ],
  },
  '7': {
    titulo: 'Documentos que necesitas', emoji: '📄', modulo: 3,
    foto: '/estudiante-1.jpg',
    intro: 'Reunir los documentos correctos es el primer paso para aplicar. Aquí tienes la lista completa explicada.',
    prevId: 6, nextId: 8,
    secciones: [
      { titulo: 'Lista completa de documentos', tipo: 'checklist', contenido: 'Carta de solicitud (escrita por ti)\nCalificaciones de 2° y 3° básico\nCarta de recomendación del director de tu instituto' },
      { titulo: 'La carta de solicitud', contenido: 'Esta es tu oportunidad de presentarte. Debe incluir: quién eres, qué carrera deseas estudiar, por qué la elegiste, cuál es tu situación económica y por qué mereces la beca. No necesita ser perfecta, pero sí sincera y clara.' },
      { titulo: '💡 Para la carta de recomendación', tipo: 'tip', contenido: 'Acércate a tu director con al menos 2 semanas de anticipación. Explícale para qué es, dale los datos de la beca y agradécele. La mayoría está dispuesto a ayudar cuando se lo pides con tiempo y cortesía.' },
      { titulo: '⚠️ Antes de enviar, verifica', tipo: 'warning', contenido: 'Que todos los documentos estén legibles y completos. Un documento borroso o incompleto puede hacer que tu solicitud sea rechazada sin siquiera ser revisada.' },
      { titulo: 'Dónde enviar', contenido: 'Todos los documentos se envían por correo electrónico a:\nbecasrotaryvistahermosa@gmail.com' },
    ],
  },
  '8': {
    titulo: 'Cómo escribir tu ensayo', emoji: '✍️', modulo: 3,
    foto: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80q=80',
    intro: 'La carta de solicitud es tu voz en el proceso. Aquí te enseñamos cómo escribirla de manera que realmente impacte.',
    prevId: 7, nextId: 9,
    secciones: [
      { titulo: 'Antes de escribir: piensa en estas preguntas', tipo: 'checklist', contenido: '¿Quién soy más allá de mi nombre?\n¿Por qué quiero estudiar esta carrera específica?\n¿Cuál es mi situación económica real?\n¿Qué haré con esta beca si me la dan?\n¿Cuál es mi sueño y cómo esta beca me acerca a él?' },
      { titulo: 'Estructura recomendada', contenido: 'Párrafo 1: Preséntate\nNo solo digas tu nombre. Cuéntales quién eres. Incluye tu nombre completo, tu edad, el municipio o comunidad donde vives, y el instituto donde cursaste tu básico. Si hay algo de tu historia personal que sea relevante — como que eres la primera persona en tu familia en llegar al diversificado — este es el momento de mencionarlo.\nEjemplo: "Mi nombre es María García, tengo 15 años y vivo en San Juan Sacatepéquez. Estudié mi ciclo básico en el Instituto Nacional de San Juan, donde fui representante estudiantil en tercer grado."\n\nPárrafo 2: Tu carrera y tu por qué\nNo solo menciones la carrera. Explica qué te llamó la atención de ella, cuándo te diste cuenta de que era lo tuyo, y cómo se conecta con tus metas de vida. Cuanto más específico y personal sea tu relato, más memorable será tu carta.\nEjemplo: "Quiero estudiar Magisterio de Educación Primaria porque desde pequeña he visto cómo la falta de buenos maestros afecta a los niños de mi comunidad. Quiero ser parte del cambio."\n\nPárrafo 3: Tu situación económica\nSé honesto y directo. No necesitas dar todos los detalles, pero sí explicar por qué necesitas el apoyo. Menciona si tu familia depende de un solo ingreso, si hay hermanos que también estudian, o si existe alguna otra dificultad económica.\nEjemplo: "Mi familia depende del trabajo de mi mamá como vendedora en el mercado. Somos cuatro hermanos y aunque ella hace todo lo posible, el costo del diversificado es una carga muy grande para ella."\n\nPárrafo 4: Por qué mereces esta beca\nEste párrafo no es para presumir — es para demostrar compromiso. Habla de tu trayectoria académica, de tus actitudes y de cómo planeas devolver ese apoyo a tu comunidad en el futuro.\nEjemplo: "Mantuve un promedio de 88 puntos en básico a pesar de que muchas veces tuve que estudiar sin luz eléctrica. Me comprometo a mantener mis calificaciones y a participar activamente en las actividades del Rotaract."\n\nCierre: Agradece y comprométete\nTermina con una oración de agradecimiento genuina y una declaración de compromiso.\nEjemplo: "Agradezco profundamente la oportunidad que el Club Rotaract Guatemala Vista Hermosa brinda a jóvenes como yo. Me comprometo a honrar esta beca con esfuerzo, dedicación y gratitud."' },
      { titulo: '💡 Lo que hace que una carta destaque', tipo: 'tip', contenido: 'Sé específico: no digas "quiero ser alguien en la vida", di "quiero ser maestra para enseñar en mi comunidad". Las historias reales y concretas conectan mucho más que las frases generales.' },
      { titulo: 'Lo que debes evitar', tipo: 'warning', contenido: 'No copies cartas de internet: se nota inmediatamente y demuestra falta de compromiso. No exageres tu situación. No seas demasiado corto: una carta de 3-4 párrafos es lo mínimo aceptable.' },
    ],
  },
  '9': {
    titulo: 'La entrevista: cómo prepararte', emoji: '🎤', modulo: 3,
    foto: '/estudiante-2.jpg',
    intro: 'Si llegas a la etapa de entrevista, es una muy buena señal. Aquí te preparamos para ese momento importante.',
    prevId: 8, nextId: 10,
    secciones: [
      { titulo: '¿Para qué sirve la entrevista?', contenido: 'La entrevista es una conversación donde los evaluadores quieren conocerte mejor. No es un examen. Quieren saber quién eres, cuáles son tus metas y si eres el tipo de estudiante a quien quieren apoyar.' },
      { titulo: 'Preguntas frecuentes', tipo: 'checklist', contenido: '¿Por qué quieres esta beca?\n¿Qué carrera quieres estudiar y por qué?\n¿Cómo es tu situación económica?\n¿Cuáles son tus fortalezas como estudiante?\n¿Cómo planeas usar la beca?\n¿Qué harás si no obtienes la beca?' },
      { titulo: '💡 Cómo prepararte', tipo: 'tip', contenido: 'Practica en voz alta con un familiar o amigo. Pídele que te haga preguntas y respóndelas como si fuera la entrevista real. La práctica reduce el nerviosismo significativamente.' },
      { titulo: 'El día de la entrevista', tipo: 'checklist', contenido: 'Llega 10 minutos antes\nViste de manera limpia y presentable\nSaluda con seguridad y mantén contacto visual\nEscucha cada pregunta completa antes de responder\nSi no entiendes algo, pide que te lo repitan' },
    ],
  },
  '10': {
    titulo: 'Construye tu perfil', emoji: '🌟', modulo: 3,
    foto: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80q=80',
    intro: 'Un perfil sobresaliente se construye con el tiempo. Aquí te decimos qué puedes hacer ahora mismo para mejorar tus posibilidades.',
    prevId: 9, nextId: 11,
    secciones: [
      { titulo: '¿Qué es un perfil sobresaliente?', contenido: 'Es la combinación de tus calificaciones, tu actitud, tu participación en actividades y tu historia personal. Las becas no solo buscan al estudiante con las mejores notas; buscan a personas con potencial, valores y compromiso.' },
      { titulo: 'Las 11 características que busca el Rotaract', tipo: 'checklist', contenido: 'Trayectoria académica destacada (promedio 85+)\nCapacidad de aprendizaje y curiosidad\nMotivación y deseos de superación\nLiderazgo en grupos o actividades\nColaboración con compañeros y docentes\nActitud positiva ante los retos\nResponsabilidad con tareas y compromisos\nGestión emocional equilibrada\nEmpatía con los demás\nBuen manejo de relaciones\nCuidado de sí mismo' },
      { titulo: '💡 Empieza hoy', tipo: 'tip', contenido: 'No esperes a tener el perfil perfecto para aplicar. Empieza a construirlo ahora: participa más en clase, ayuda a un compañero, involúcrate en actividades del colegio. Cada pequeña acción suma.' },
    ],
  },
  '11': {
    titulo: 'Si no obtienes la beca esta vez', emoji: '💙', modulo: 4,
    foto: '/guia-11-header.jpg',
    intro: 'No obtener la beca es difícil. Pero no es el fin. Esta guía es para ayudarte a procesar ese momento y seguir adelante.',
    prevId: 10, nextId: 12,
    secciones: [
      { titulo: 'Es normal sentirse triste', contenido: 'Si aplicaste y no obtuviste la beca, es completamente normal sentirte desilusionado/a. Eso significa que te importa tu futuro, y eso es algo valioso. Permite que ese sentimiento pase antes de tomar cualquier decisión.' },
      { titulo: 'No significa que no mereces la beca', contenido: 'Las becas tienen un número limitado de cupos. Que no hayas sido seleccionado/a esta vez no significa que no seas capaz. Puede haber habido muchos candidatos muy buenos y muy pocos cupos.' },
      { titulo: 'Qué puedes hacer', tipo: 'checklist', contenido: 'Pide retroalimentación: pregunta qué podrías mejorar para la próxima vez\nSigue mejorando tus calificaciones y tu perfil\nBusca otras becas disponibles (ver Guía 06)\nExplora otras opciones de financiamiento\nVuelve a aplicar el próximo ciclo' },
      { titulo: '💡 Recuerda', tipo: 'tip', contenido: 'Suleymi, una de las becadas del Rotaract, reconoce que no tenía el promedio ideal cuando aplicó. Pero su actitud, su esfuerzo y su determinación la llevaron a obtener la beca. Tu historia todavía se está escribiendo.' },
    ],
  },
  '12': {
    titulo: 'Mantén la motivación', emoji: '🔥', modulo: 4,
    foto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80q=80',
    intro: 'El camino hacia tu beca puede ser largo. Estas herramientas te ayudarán a mantenerte enfocado/a cuando las cosas se pongan difíciles.',
    prevId: 11, nextId: undefined,
    secciones: [
      { titulo: '¿Por qué se pierde la motivación?', contenido: 'Es normal que en algún momento sientas que ya no puedes más. Los estudios son difíciles, la situación económica puede ser estresante y a veces los resultados tardan en llegar. Reconocer esto es el primer paso para manejarlo.' },
      { titulo: 'Recuerda tu "por qué"', contenido: 'Escribe en algún lugar visible: ¿Por qué quiero estudiar? ¿A quién quiero ayudar? ¿Cómo me veo en 5 años? Cuando el camino se ponga difícil, lee ese texto. Tu "por qué" es más poderoso que cualquier obstáculo.' },
      { titulo: 'Técnicas para días difíciles', tipo: 'checklist', contenido: 'Divide tus metas grandes en pasos pequeños\nCelebra cada pequeño logro\nHabla con alguien de confianza sobre cómo te sientes\nRodéate de personas que te apoyen\nDescansa cuando lo necesites: no es rendirse, es recargar energía' },
      { titulo: '💡 Las palabras de tus compañeras becadas', tipo: 'tip', contenido: '"No importa las caídas, siempre me levantaré por mi mamá y por mí." — Angélica\n\n"Con esfuerzo y fe, mis metas son posibles." — Amalia\n\nTú también puedes. Tu historia aún se está escribiendo.' },
    ],
  },
};

const moduloColors: Record<number, { bg: string; accent: string; border: string }> = {
  1: { bg: '#e8f0fb', accent: '#0050a2', border: '#0050a220' },
  2: { bg: '#fff3f7', accent: '#c10042', border: '#c1004220' },
  3: { bg: '#f0faf4', accent: '#1a7a3c', border: '#1a7a3c20' },
  4: { bg: '#fff8ec', accent: '#b86000', border: '#b8600020' },
};

function SeccionContenido({ sec, colors }: { sec: { titulo: string; contenido: string; tipo?: string }, colors: { bg: string; accent: string; border: string } }) {
  if (sec.tipo === 'tip') {
    return (
      <div style={{ background: colors.bg, borderRadius: 14, padding: '16px 20px', border: `1px solid ${colors.border}`, display: 'flex', gap: 12 }}>
        <Lightbulb size={20} color={colors.accent} style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.accent, marginBottom: 6 }}>{sec.titulo.replace('💡 ', '')}</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{sec.contenido}</div>
        </div>
      </div>
    );
  }
  if (sec.tipo === 'warning') {
    return (
      <div style={{ background: '#fff8ec', borderRadius: 14, padding: '16px 20px', border: '1px solid rgba(184,96,0,0.2)', display: 'flex', gap: 12 }}>
        <AlertCircle size={20} color="#b86000" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#b86000', marginBottom: 6 }}>{sec.titulo.replace('⚠️ ', '')}</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{sec.contenido}</div>
        </div>
      </div>
    );
  }
  if (sec.tipo === 'checklist') {
    const items = sec.contenido.split('\n').filter(Boolean);
    return (
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14, lineHeight: 1.3 }}>{sec.titulo}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'white', borderRadius: 10, padding: '10px 14px', border: '1px solid var(--border)' }}>
              <CheckSquare size={16} color={colors.accent} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14, lineHeight: 1.3 }}>{sec.titulo}</h2>
      <div style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{sec.contenido}</div>
    </div>
  );
}

export default async function GuiaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const guia = guias[id];
  if (!guia) notFound();
  const colors = moduloColors[guia.modulo];

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px 60px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Foto de cabecera */}
        {guia.foto && (
          <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 32, height: 260, position: 'relative' }}>
            <img src={guia.foto} alt={guia.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
          </div>
        )}

        {/* Header */}
        <div style={{ paddingBottom: 28, borderBottom: `1px solid ${colors.border}`, marginBottom: 36 }}>
          <Link href={`/modulo/${guia.modulo}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, marginBottom: 20, fontWeight: 500 }}>
            <ArrowLeft size={14} /> Módulo {guia.modulo}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: 18, flexShrink: 0, background: colors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, border: `1px solid ${colors.border}` }}>
              {guia.emoji}
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Guía {id.padStart(2,'0')} · Módulo {guia.modulo}
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.15 }}>
                {guia.titulo}
              </h1>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 40, padding: '20px 24px', background: colors.bg, borderRadius: 14, borderLeft: `4px solid ${colors.accent}`, fontStyle: 'italic' }}>
          {guia.intro}
        </div>

        {/* Secciones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {guia.secciones.map((sec, i) => (
            <div key={i}>
              <SeccionContenido sec={sec} colors={colors} />
              {i < guia.secciones.length - 1 && sec.tipo !== 'tip' && sec.tipo !== 'warning' && (
                <div style={{ height: 1, background: 'var(--border)', marginTop: 36 }} />
              )}
            </div>
          ))}
        </div>

        {/* Navegación */}
        <div style={{ display: 'flex', gap: 12, marginTop: 56 }}>
          {guia.prevId && (
            <Link href={`/guia/${guia.prevId}`} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '1.5px solid var(--border)', borderRadius: 14, padding: '15px', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>
              <ArrowLeft size={16} /> Guía anterior
            </Link>
          )}
          {guia.nextId && (
            <Link href={`/guia/${guia.nextId}`} style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--rotaract-cranberry)', borderRadius: 14, padding: '15px', textDecoration: 'none', fontSize: 14, fontWeight: 700, color: 'white', boxShadow: '0 4px 16px rgba(193,0,66,0.25)' }}>
              Siguiente guía <ArrowRight size={16} />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ['1','2','3','4','6','7','8','9','10','11','12'].map(id => ({ id }));
}
