import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function BlockTransition({ colors }) {
  return colors.map((color, i) => (
    <motion.div
      key={i}
      style={{
        position: "fixed", inset: 0, background: color,
        zIndex: 999 - i, originX: 0,
        pointerEvents: "none",
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: [0, 1, 1, 0] }}
      transition={{ duration: 0.45, delay: i * 0.05, times: [0, 0.4, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
    />
  ));
}

const TRANSITION_COLORS = {
  default:      ["#000000", "#8b3d01", "#F5842D"],
  userinterface:["#000000", "#01418b", "#2d8af5"],
  animation:    ["#000000", "#8b0101", "#c4001a"],
  vfx:          ["#000000", "#3a6b00", "#8a9a00"],
  sfx:          ["#000000", "#7a4e00", "#d4920a"],
  combattags:   ["#000000", "#4a007a", "#7b2fd4"],
};

function TransitionOverlay({ variant }) {
  const colors = TRANSITION_COLORS[variant] ?? TRANSITION_COLORS.default;
  return <BlockTransition colors={colors} />;
}

export default function PageTransition({ children, variant = "default" }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <TransitionOverlay variant={variant} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.18 }}
          style={{ width: "100%", height: "100%" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}