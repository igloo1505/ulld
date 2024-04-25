import React, { useEffect, useRef } from "react";
import { BackSide, BufferAttribute, SphereGeometry, type Texture } from "three";
import { animated, useSpring } from "@react-spring/three";
import { LandingSection } from "#/types/landingSection";

interface BlobSphereProps {
    texture: Texture;
    section: LandingSection;
}

export const BlobSphere = ({ texture, section }: BlobSphereProps) => {
    const ref = useRef<SphereGeometry>(null!);

    const [springs, api] = useSpring(
        () => ({
            opacity: section === "hero" ? 0.8 : 0,
            radius: section === "hero" ? 200 : 0,
            scale: section === "hero" ? 1 : 0,
            config: {
                friction: 50,
                mass: 3,
            },
        }),
        [],
    );

    useEffect(() => {
        if (section === "hero") {
            api.start({
                radius: 200,
                opacity: 1,
                scale: 1
            });
        } else {
            api.start({
                radius: 0,
                opacity: 0,
                scale: 0
            });
        }
    }, [section]);

    return (
        <animated.mesh
            scale={springs.scale}
        >
            <animated.sphereGeometry
                args={[200, 40, 40]}
                ref={ref}
            />
            <animated.meshBasicMaterial
                opacity={springs.opacity}
                side={BackSide}
                map={texture}
            />
        </animated.mesh>
    );
};

BlobSphere.displayName = "BlobSphere";
