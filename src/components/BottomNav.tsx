'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Star, BookOpen, User } from 'lucide-react';

const items = [
  { href: '/', icon: Home, label: 'Inicio' },
  { href: '/becas/vista-hermosa', icon: Star, label: 'Becas' },
  { href: '/guias', icon: BookOpen, label: 'Guías' },
  { href: '/acerca', icon: User, label: 'Acerca' },
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="bottom-nav-mobile" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border)',
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      <div style={{ display: 'flex' }}>
        {items.map(({ href, icon: Icon, label }) => {
          const active = path === href;
          return (
            <Link key={href} href={href} style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 3, padding: '10px 0 8px', textDecoration: 'none',
              color: active ? 'var(--rotaract-cranberry)' : 'var(--text-muted)',
            }}>
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span style={{ fontSize: 10, fontWeight: active ? 600 : 400 }}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
