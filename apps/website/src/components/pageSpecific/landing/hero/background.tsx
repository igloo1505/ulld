import PreventSharpEdges from "#/components/utility/ui/preventSharpEdges";
import cn from "@ulld/utilities/cn";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useInView,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

export const HeroBackground = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref);
  const isInView = useRef<boolean>(true);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    if (!currentTarget) return;
    let { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const scroll = useScroll()

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    isInView.current = inView;
  }, [inView]);

  return (
    <div
      className={cn(
        "relative h-[40rem] flex items-center bg-background justify-center w-full group",
        containerClassName,
      )}
      ref={ref}
    >
      <PreventSharpEdges />
      <div className="absolute inset-0 bg-dot-thick-neutral-800  pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-sky-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};
