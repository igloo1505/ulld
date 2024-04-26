"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import * as Three from "three";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import sceneBackground from "./assets/01.jpg";
/* import sceneBackground from "./assets/sphere/stars12.jpg"; */
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import _texture3 from "./assets/06.png";
/* import { BlobNucleus } from "./nucleus"; */
import { BlobSphere } from "./sphere";
import { BlobStars } from "./stars";
import { useStars } from "./useStars";
import { AstralBodies } from "./astralBodies";
import {
  useLandingSection,
  useSection,
} from "#/components/pageSpecific/landing/useSection";
import { useBlobAnimation } from "./animation/animate";
import DreiNucleus from "./dreiNucleus";
import { OrbitingStars } from "./orbitingStars";
import { OrbitControls } from "@react-three/drei";
import { LandingSection } from "#/types/landingSection";
import { geoDataMap } from "./utils";
import { useViewport } from "@ulld/hooks/useViewport";

/* TODO: Find way to darken the background. Right now the backdrop can't be inserted between the background and the blob. */

interface NoiseyBlobProps {
  section: LandingSection;
  delay?: number;
}

const NoiseyBlobInternal = ({ section, delay }: NoiseyBlobProps) => {
  const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
  const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
  const textureSphere = useLoader(Three.TextureLoader, sceneBackground.src);
  const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
  const [show, setShow] = useState(false);
  const viewport = useViewport();
  textureNucleus.anisotropy = 16;
  let vw = viewport?.window.width || 1600;
  let vh = viewport?.window.height || 1200;
  useStars();
  const nucleusRef = useRef<any>(null!);
  const cameraRef = useRef<Three.PerspectiveCamera>(null!);

  const [nucHoverd, setNucHovered] = useBlobAnimation({
    nucleus: nucleusRef,
    camera: cameraRef,
  });

  useEffect(() => {
    if (section !== "hero") {
      setShow(false);
    } else {
      if (delay) {
        setTimeout(() => setShow(true), delay);
      } else {
        setShow(true);
      }
    }
  }, [section]);

  return (
    <>
      <perspectiveCamera
        fov={100}
        aspect={vw / vh}
        near={0.1}
        far={1000}
        position={[0, 0, 5]}
        ref={cameraRef}
      />
      <ambientLight position={[0, 20, 20]} color={"#fff"} intensity={1} />
      <directionalLight args={["#fff", 2]} position={[0, 50, -20]} />
      <DreiNucleus texture={textureNucleus} show={show} />
      <BlobStars texture={textureStar} />
      <BlobSphere show={show} radius={50} section={section} texture={textureSphere} />
      <AstralBodies
        show={show}
        minRadius={8}
        maxRadius={12}
        size={1}
        section={section}
        texture={textureStar1}
        n={2}
      />
      <OrbitingStars
        show={show}
        radius={15}
        size={0.5}
        section={section}
        texture={textureStar1}
        n={100}
        spread={2}
        sizeSpread={0.05}
        widthSegments={4}
        heightSegments={8}
      />
    </>
  );
};

const NoiseyBlob = () => {
  const [precision, setPrecision] = useState<undefined | "lowp">(undefined);
  const section = useLandingSection();
  useEffect(() => {
    if (section === "hero") {
      setPrecision(undefined);
    } else {
      setPrecision("lowp");
    }
  }, [section]);
  return (
    <div
      className={
        "w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-[10]"
      }
    >
      <Canvas
        className={"block w-full h-full"}
        gl={{
          antialias: precision ? false : true,
          alpha: true,
          pixelRatio: window?.devicePixelRatio,
          precision: precision,
        }}
        camera={{
          position: [0, 6.46, 6.46],
          quaternion: new Three.Quaternion(-0.38, 0, 0, 0.9238),
          rotation: new Three.Euler(-0.7853, 0, 0),
        }}
      >
        <NoiseyBlobInternal section={section} />
      </Canvas>
    </div>
  );
};

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
