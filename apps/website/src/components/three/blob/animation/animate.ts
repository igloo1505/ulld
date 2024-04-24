import { LandingSection } from "#/types/landingSection";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useSearchParams } from "next/navigation";
import { UseBlobAnimationProps } from "./types";
import { useHeroAnimation } from "./hero";
import { useDescriptionAnimation } from "./description";
import { useEffect, useState } from "react";
import { useSpring } from "@react-spring/three";

export const useBlobAnimation = (props: UseBlobAnimationProps) => {
    const sp = useSearchParams();
    const [nucleusHovered, setNucleusHovered] = useState(false);

    const [springs, api] = useSpring(
        () => ({
            timeScalar: 1,
            morphScalar: 3,
            config: {
                friction: 200,
                mass: 3,
                // duration: 3,
                precision: 0.0001
            },
        }),
        [],
    );

    useEffect(() => {
        if (nucleusHovered) {
            api.start({
                timeScalar: 3,
                morphScalar: 2,
            });
        } else {
            api.start({
                timeScalar: 1,
                morphScalar: 3,
            });
        }
    }, [nucleusHovered]);

    const section = (sp.get("section") as LandingSection) || ("hero" as "hero");
    useFrame((state, dt) => {
        if (section === "hero") {
            useHeroAnimation(
                state,
                dt,
                props,
                springs.timeScalar.get(),
                springs.morphScalar.get(),
            );
        }
        if (section === "description") {
            useDescriptionAnimation(state, dt, props, nucleusHovered);
        }
    });
    return [nucleusHovered, setNucleusHovered];
};
