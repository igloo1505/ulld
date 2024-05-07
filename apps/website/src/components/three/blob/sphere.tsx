import React, { useEffect, useRef } from "react";
import { BackSide, DoubleSide, MeshStandardMaterial, NearestFilter, RGBAFormat, SphereGeometry, TextureLoader } from "three";
import { animated, useSpring } from "@react-spring/three";
import { LandingSection } from "#/types/landingSection";
import sceneBackground from "./assets/01.jpg";
import { useLoader } from "@react-three/fiber";


interface BlobSphereProps {
    section: LandingSection;
    radius?: number
    show: boolean
    onHide: () => void
}

const fullOpacity = 0.1

export const BlobSphere = ({ section, show, onHide, radius=200 }: BlobSphereProps) => {
    const ref = useRef<SphereGeometry>(null!);
  const texture = useLoader(TextureLoader, sceneBackground.src);
    texture.magFilter = NearestFilter
    texture.minFilter = NearestFilter

    const [springs, api] = useSpring(
        () => ({
            opacity: section === "hero" ? fullOpacity : 0,
            radius: section === "hero" ? radius : 0,
            scale: section === "hero" ? 1 : 0,
            config: {
                friction: 50,
                mass: 3,
            },
        }),
        [],
    );

    useEffect(() => {
        if (show) {
            api.start({
                radius: radius,
                opacity: fullOpacity,
                scale: 1
            });
        } else {
            api.start({
                radius: 0,
                opacity: 0,
                scale: 0,
                onRest: () => onHide()
            });
        }
    }, [show]);

    return (
        <animated.mesh
            scale={springs.scale}
        >
            <animated.sphereGeometry
                args={[200, 40, 40]}
                ref={ref}
                attach={"geometry"}
            />
            <animated.meshStandardMaterial
                opacity={0.4}
                side={BackSide}
                map={texture}
                depthWrite={false}
                attach={"material"}
                transparent
            />
        </animated.mesh>
    );
};

BlobSphere.displayName = "BlobSphere";
