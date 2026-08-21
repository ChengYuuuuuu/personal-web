import { motion } from "framer-motion";
import Panel from "./Panel";

const ease = [0.22, 1, 0.36, 1];

const item = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-8% 0px" },
  transition: { duration: 0.7, ease },
};

export default function Toolkit({ data }) {
  return (
    <Panel id="toolkit" index={3}>
      <div className="sec-head">
        <span className="kicker">Toolkit</span>
        <span className="arrow">↗</span>
      </div>

      <div className="toolkit-grid">
        {data.columns.map((col, i) => (
          <motion.div key={col.title} className="toolkit-col" {...item} transition={{ ...item.transition, delay: i * 0.08 }}>
            <h3 className="toolkit-col__title">{col.title}</h3>
            <ul className="toolkit-col__list">
              {col.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="toolkit-langs">{data.languages}</p>
    </Panel>
  );
}
