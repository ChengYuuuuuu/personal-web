import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const TILTS = [-3, 2, -2, 3, -2];
const OFFSETS = ["18px", "-10px", "26px", "-6px", "12px"];

export default function MediaWall({ items }) {
  return (
    <div className="polaroid-gallery media-wall">
      {items.map((m, i) => {
        const rotate = TILTS[i % TILTS.length];
        return (
          <motion.figure
            className="polaroid"
            key={m.src}
            initial={{ opacity: 0, y: 40, rotate }}
            whileInView={{ opacity: 1, y: 0, rotate }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.18 }}
            style={{ marginTop: OFFSETS[i % OFFSETS.length] }}
          >
            {m.type === "video" ? (
              <video
                ref={(el) => {
                  if (el) el.muted = true;
                }}
                src={m.src}
                autoPlay
                muted
                defaultMuted
                loop
                playsInline
              />
            ) : (
              <img src={m.src} alt="" loading="lazy" />
            )}
          </motion.figure>
        );
      })}
    </div>
  );
}
