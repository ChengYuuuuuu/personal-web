import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];

export default function Panel({ id, children, className = "", innerClassName = "", index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id={id} className={`panel ${className}`} data-panel={index}>
      <motion.div style={{ y, opacity }} className={`container ${innerClassName}`}>
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-6% 0px -6% 0px" }}
          transition={{ duration: 0.9, ease }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
