import { useEffect } from "react";
import Lenis from "lenis";
import { site, about, experience, beyondWork, projects, moreProjects, toolkit, contactNote } from "./data";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Contact from "./components/Contact";
import Marquee from "./components/Marquee";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    let snapTimer;
    const sections = Array.from(document.querySelectorAll(".panel"));
    const isFree = (s) => s.dataset.panel === "0" || s.id === "work";
    const onScroll = () => {
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        const y = lenis.scroll;
        const rects = sections.map((s) => {
          const r = s.getBoundingClientRect();
          return { s, top: r.top + y, bottom: r.top + y + r.height };
        });

        const inFreeZone = rects.some(({ s, top, bottom }) => isFree(s) && y >= top && y <= bottom);
        if (inFreeZone) return;

        let best = null;
        let bestDist = Infinity;
        for (const { s, top } of rects) {
          if (isFree(s)) continue;
          const d = Math.abs(y - top);
          if (d < bestDist) {
            bestDist = d;
            best = top;
          }
        }
        if (best != null && Math.abs(best - y) > 1) {
          lenis.scrollTo(best, { duration: 0.8 });
        }
      }, 180);
    };
    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(snapTimer);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <>
      <Nav brand={site.name} />
      <main>
        <Hero
          role={site.role}
          tagline={site.tagline}
          status={site.status}
          intro={about}
          cityImage={site.cityImage}
        />
        <Marquee
          words={["DESIGN ENGINEER", "HARDWARE × AI", "INTERACTION", "MOTION", "REALTIME", "CONTENT", "CODE"]}
        />
        <Experience
          id="experience"
          index={1}
          kicker="Experience & Beyond Work"
          groups={[
            { label: "Experience", items: experience },
            { label: "Beyond Work", items: beyondWork },
          ]}
        />
        <Projects projects={projects} more={moreProjects} />
        <Toolkit data={toolkit} />
      </main>
      <Contact email={site.email} note={contactNote} socials={site.socials} site={site} />
    </>
  );
}
