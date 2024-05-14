import React, { useEffect, useRef } from "react";
import { motion, usePresence } from "framer-motion";
import { FeatureContainerProps } from "./types";
import clsx from "clsx";

interface FeatureContainerDisplayProps
  extends Pick<FeatureContainerProps, "orientation" | "component"> {
  idx: number;
  displayExpand?: boolean;
  containerClasses?: string;
  displayDelay?: number;
  shouldShow: boolean;
}

const FeatureContainerDisplay = ({
  component,
  orientation,
  idx,
  displayExpand,
  containerClasses,
  displayDelay = 0.5,
  shouldShow,
}: FeatureContainerDisplayProps) => {
  const scope = useRef<HTMLDivElement>(null!);
  const Component = component;
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  if (!shouldShow || !isPresent) {
    return null;
  }

  return (
    <motion.div
      className={clsx(
        "w-full max-h-[60vh] md:h-full flex flex-col justify-center items-center origin-center p-8",
        displayExpand && "h-full",
        containerClasses,
      )}
      ref={scope}
      animate={{
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
          delay: displayDelay,
          type: "spring",
          stiffness: 100,
        },
      }}
      initial={{
        scale: 0,
        opacity: 0,
        x: orientation === "ltr" ? 200 : -200,
      }}
      exit={{
        scale: 0,
        opacity: 0,
        y: orientation === "ltr" ? 200 : -200,
        transition: {
          /* delay: 0.5, */
          type: "spring",
          stiffness: 100,
        },
      }}
    >
      <Component
        shouldShow={shouldShow}
        orientation={orientation}
      />
    </motion.div>
  );
};

FeatureContainerDisplay.displayName = "FeatureContainerDisplay";

export default FeatureContainerDisplay;
