import { LandingSection } from "#/types/landingSection";
import {  useFrame } from "@react-three/fiber";
import { useSearchParams } from "next/navigation";
import { UseBlobAnimationProps } from "./types";
import { useHeroAnimation } from "./hero";
import { useDescriptionAnimation } from "./description";


export const useBlobAnimation = (props: UseBlobAnimationProps) => {
  const sp = useSearchParams();
  const section = (sp.get("section") as LandingSection) || ("hero" as "hero");
  useFrame((state, dt) => {
    if(section === "hero"){
            useHeroAnimation(state, dt, props)
        }
    if(section === "description"){
            useDescriptionAnimation(state, dt, props)
        }
  });

};
