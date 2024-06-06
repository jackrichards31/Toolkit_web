import React from "react";
import { motion } from "framer-motion";

/**
 * This is for creating an underline text animation. You can wrap this component around your text messages.
 */
const UnderlineText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative inline-block"
    >
      <motion.div
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-0 left-0 h-0.5 bg-blue-500`}
      />
      <span className={className}>{children}</span>
    </motion.div>
  );
};

export default UnderlineText;
