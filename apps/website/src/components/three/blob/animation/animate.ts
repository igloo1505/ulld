import { LandingSection } from "#/types/landingSection";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useSearchParams } from "next/navigation";
import { UseBlobAnimationProps } from "./types";
import { useHeroAnimation } from "./hero";
import { useDescriptionAnimation } from "./description";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { animated, useSpring } from "@react-spring/three";

export const useBlobAnimation = (props: UseBlobAnimationProps) => {
  const sp = useSearchParams();
  const hovered = useRef<boolean>(false);
  // const t = useMotionValue(1)
  // const m = useMotionValue(3)
  const timeScalar = useRef<{ value: number }>({ value: 1 });
  const morphScalar = useRef<{ value: number }>({ value: 3 });

  const [springs, api] = useSpring(
    () => ({
      timeScalar: 1,
      morphScalar: 3,
      config: {
        friction: 200,
        mass: 3,
        // duration: 3,
        precision: 0.0001,
      },
    }),
    [],
  );

  const setNucleusHovered = (isHovered: boolean) => {
    hovered.current = isHovered;
    if (isHovered) {
      api.start({
        timeScalar: 3,
        morphScalar: 2,
      });
      // gsap.to(timeScalar.current, {
      //   value: 3,
      //   duration: 1,
      //   ease: "ease-in",
      // });
    } else {
      api.start({
        timeScalar: 1,
        morphScalar: 3,
      });
      // gsap.to(timeScalar.current, {
      //   value: 1,
      //   duration: 1,
      //   ease: "ease-in",
      // });
    }
  };


  const section = (sp.get("section") as LandingSection) || ("hero" as "hero");
  useFrame((state, dt) => {
    if (section === "hero") {
      useHeroAnimation(
        state,
        dt,
        props,
        timeScalar.current.value,
        morphScalar.current.value,
      );
    }
    if (section === "description") {
      useDescriptionAnimation(state, dt, props, hovered.current);
    }
  });

  return [hovered.current, setNucleusHovered] as [
    boolean,
    (b: boolean) => void,
  ];
};
