'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 40px', height: 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo - cranberry on white, transparent bg */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logos-01.png" alt="Rotaract Guatemala Vista Hermosa" style={{ height: 36, width: 'auto' }} />
          <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Ruta a tu Beca
          </span>
        </Link>

        {/* Desktop links */}
        {isDesktop && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {[
              { href: '/modulo/1', label: 'Descubre' },
              { href: '/modulo/2', label: 'Becas' },
              { href: '/modulo/3', label: 'Prepárate' },
              { href: '/guias', label: 'Guías' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{
                textDecoration: 'none', color: 'var(--text-secondary)',
                fontSize: 14, fontWeight: 500, padding: '6px 14px', borderRadius: 8,
              }}>{item.label}</Link>
            ))}
            <Link href="/becas/vista-hermosa" style={{
              textDecoration: 'none', background: 'var(--rotaract-cranberry)',
              color: 'white', fontSize: 14, fontWeight: 600,
              padding: '8px 18px', borderRadius: 99, marginLeft: 8,
            }}>⭐ Vista Hermosa</Link>
          </div>
        )}

        {/* Mobile hamburger */}
        {!isDesktop && (
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--text-secondary)' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {open && !isDesktop && (
        <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '12px 24px 20px' }}>
          {[
            { href: '/', label: 'Inicio' },
            { href: '/becas/vista-hermosa', label: '⭐ Beca Vista Hermosa' },
            { href: '/modulo/1', label: 'Descubre tu camino' },
            { href: '/modulo/2', label: 'Encuentra una beca' },
            { href: '/modulo/3', label: 'Prepárate para aplicar' },
            { href: '/guias', label: 'Todas las guías' },
            { href: '/acerca', label: 'Acerca de' },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0', borderBottom: '1px solid var(--border)',
              textDecoration: 'none', color: 'var(--text-primary)', fontSize: 15, fontWeight: 500,
            }}>{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
