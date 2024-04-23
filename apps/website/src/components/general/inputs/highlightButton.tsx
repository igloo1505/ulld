"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@ulld/utilities/cn";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

type Direction = "top" | "left" | "bottom" | "right";

interface HighlightButtonProps {
  href: string;
  children: string;
  className?: string;
  clockwise?: boolean;
  duration?: number;
}

const movingMap: Record<Direction, string> = {
  top: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  left: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  bottom:
    "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  right:
    "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
};

const highlight =
  "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

export const HighlightButton = ({
  children,
  href,
  clockwise: _clockwise = true,
  duration = 1,
  ...props
}: HighlightButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("top");
  const [clockwise, setClockwise] = useState(_clockwise);
  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["top", "left", "bottom", "right"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      setClockwise(!clockwise);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Link
      {...props}
      className={clsx(
        "relative flex flex-col justify-center items-center w-[182px] h-[50px] rounded-[30px] overflow-visible",
        props.className,
      )}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        className={clsx(
          "absolute -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[180px] h-[48px] stroke-primary",
        )}
      >
        <rect width={180} height={48} rx={30} />
      </svg>
      <motion.div
        className={cn(
          "flex-none z-[-11] inset-0 overflow-hidden absolute rounded-[inherit]",
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div
        className={clsx(
          "absolute scale-0 origin-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[180px] h-[48px] bg-[radial-gradient(circle,rgba(109,39,217,1)90%,rgba(133,101,182,1)100%)] rounded-[30px] transition-transform duration-300",
          hovered && "scale-100 delay-1000",
        )}
      />
      <div className={"z-10"}>{children}</div>
    </Link>
  );
};

HighlightButton.displayName = "HighlightButton";
