import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];

export default function Contact({ email, note, socials, site }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="panel contact" id="contact" data-panel={4}>
      <motion.div className="container" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="contact__kicker">( Contact ) — {note}</p>
          <a className="contact__big" href={`mailto:${email}`}>
            {email}
          </a>
          <div className="contact__extra">
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
            {socials.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
            <a href={site.cv} download>
              Download CV ↓
            </a>
          </div>
        </motion.div>
      </motion.div>

      <footer className="footer">
        <span>©2026 {site.name}</span>
        <span>{site.city}</span>
        <span>{site.phone}</span>
      </footer>
    </section>
  );
}
