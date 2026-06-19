import { motion, useReducedMotion } from "framer-motion";

export default function LoadingScreen() {
  const shouldReduceMotion = useReducedMotion();
  const fadeTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeOut" as const };
  const contentTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.5 };
  const titleTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, delay: 0.15 };

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeTransition}
    >
      <div className="loading-inner" role="status" aria-live="polite">
        <motion.p
          className="loading-label"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={contentTransition}
        >
          Chaerin Lee Portfolio
        </motion.p>

        <motion.h1
          className="loading-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={titleTransition}
        >
          Loading
        </motion.h1>

        <div className="loading-dots" aria-label="로딩 중">
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.div>
  );
}
