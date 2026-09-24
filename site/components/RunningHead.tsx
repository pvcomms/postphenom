"use client";
import { useEffect, useState } from "react";

type Part = { id: string; title: string };

// The running head of a printed document: the institution's name and the part being read.
// Hidden while the title page is on screen; slides in once the reader is past it.
export function RunningHead({ name, parts }: { name: string; parts: readonly Part[] }) {
  const [past, setPast] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const title = document.getElementById("top");
    const io = title
      ? new IntersectionObserver(([e]) => setPast(!e.isIntersecting), { threshold: 0 })
      : null;
    if (title && io) io.observe(title);

    const sections = parts.map((p) => document.getElementById(p.id)).filter((el): el is HTMLElement => !!el);
    let raf = 0;
    const measure = () => {
      raf = 0;
      const y = window.scrollY + 96;
      let current: string | null = null;
      for (const s of sections) if (s.offsetTop <= y) current = s.id;
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parts]);

  return (
    <div className={`running-head${past ? " past" : ""}`} aria-hidden={!past}>
      <a className="caps rh-name" href="#top" tabIndex={past ? 0 : -1}>{name}</a>
      <nav className="rh-nav" aria-label="Parts">
        <ul>
          {parts.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} aria-current={active === p.id ? "true" : undefined} tabIndex={past ? 0 : -1}>{p.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
