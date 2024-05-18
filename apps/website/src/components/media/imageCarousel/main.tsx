import { AnimatePresence, TargetAndTransition, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import NextImage from "next/image";
const Image = motion(NextImage);
import { wrap } from "popmotion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "#/styles/slider.module.scss";
import clsx from "clsx";

export type SlideShowImage = {
  src: StaticImageData;
  className?: string;
  alt?: string;
};

interface ImageCarouselProps {
  images: SlideShowImage[];
  className?: string;
  alt?: string;
  withButtons?: boolean;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  exit: (dir: number) => ({
    zIndex: 0,
    x: dir * -1000,
    opacity: 0,
  }),
  animate: {
    zIndex: 1,
    opacity: 1,
    x: 0,
  },
  initial: (dir: number) => ({
    x: dir * 1000,
    opacity: 0,
  }),
};

const ImageCarousel = ({
  className,
  images,
  alt,
  withButtons,
}: ImageCarouselProps) => {
  const [[page, direction], setState] = useState<[number, number]>([0, 0]);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const imageIndex = wrap(0, images.length, page);

  const cycleImages = (dir: 1 | -1 = 1) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const _timer = setTimeout(() => {
      cycleImages(1);
    }, 5000);
    timer.current = _timer;
    setState([page + dir, dir]);
  };

  const handleClick = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    cycleImages(1);
  };

  return (
    <div
      className={clsx(
        "w-full h-full flex flex-col justify-center items-center max-w-full max-h-full overflow-hidden",
        className,
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <Image
          key={page}
          onClick={handleClick}
          src={images[imageIndex].src}
          className={clsx(
            "absolute max-w-full max-h-full w-auto",
            images[imageIndex].className,
          )}
                    custom={direction}
          alt={images[imageIndex].alt || alt || "ULLD Image"}
          variants={variants}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          initial="initial"
          animate="animate"
          drag={"x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            console.log("e: ", e);
            console.log("offset, velocity: ", offset, velocity);
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              cycleImages(1);
            } else if (swipe > swipeConfidenceThreshold) {
              cycleImages(-1);
            }
          }}
        />
      </AnimatePresence>
      {withButtons && (
        <>
          <div className={styles["prev-btn"]} onClick={() => cycleImages(1)}>
            <ChevronLeft />
          </div>
          <div className={styles["next-btn"]} onClick={() => cycleImages(-1)}>
            <ChevronRight />
          </div>
        </>
      )}
    </div>
  );
};

ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel;
