import React, { useRef } from "react";
import { BackSide, SphereGeometry, type Texture } from "three";
import { animated, useSpring } from "@react-spring/three";
import { LandingSection } from "#/types/landingSection";

interface BlobSphereProps {
    texture: Texture;
    section: LandingSection;
}

export const BlobSphere = ({ texture, section }: BlobSphereProps) => {
    const ref = useRef<SphereGeometry>(null!)
    /* const [springs, api] = useSpring(() => { */
    /*     return { */
    /*         scale: section === "hero" ? 1 : 0, */
    /*         onChange: (val) => { */
    /*             /* ref.current.setAttribute("radius", val.value.radius) */
    /*             ref.current.scale = val.value.scale */
    /*         }, */
    /*         config: (key) => { */
    /*             switch (key) { */
    /*                 case "scale": */
    /*                     return { */
    /*                         mass: 4, */
    /*                         friction: 10, */
    /*                     }; */
    /*                 default: */
    /*                     return {}; */
    /*             } */
    /*         }, */
    /*     }; */
    /* }, [section]); */

    return (
        <mesh>
            <animated.sphereGeometry
                args={[150, 40, 40]}
                ref={ref}
            /* parameters={{ */
            /* radius: springs.radius, */
            /*     widthSegments: 40, */
            /*     heightSegments: 40 */
            /* }} */
            />
            <meshBasicMaterial side={BackSide} map={texture} />
        </mesh>
    );
};

BlobSphere.displayName = "BlobSphere";
