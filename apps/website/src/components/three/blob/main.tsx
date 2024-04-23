"use client";
import React, { useEffect, useState } from "react";
import * as Three from "three";
import { Canvas, Vector2, useLoader, useThree } from "@react-three/fiber";
import sceneBackground from "./assets/01.jpg";
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import _texture3 from "./assets/06.png";
import { useViewport } from "@ulld/hooks/useViewport";
import Script from "next/script";
import Image from "next/image";
import { createNoise3D } from "simplex-noise";
import { OrbitControls } from "@react-three/drei";
import { BlobNucleus } from "./nucleus";
import { BlobSphere } from "./sphere";
import { BlobStars } from "./stars";
import { useStars } from "./useStars";
import PointsTest from "./pointTest";
import { LandingSection } from "#/types/landingSection";
import { useSection } from "#/components/pageSpecific/landing/useSection";

/* TODO: Find way to darken the background. Right now the backdrop can't be inserted between the background and the blob. */

interface NoiseyBlobProps {}

interface GeoData {
  distance: number;
  rotateSpeed: number;
  nucleus: {
    timeScalar: number;
    morphScalar: number;
  };
}

const _geoData: {
  [k in LandingSection]: (viewport: ReturnType<typeof useViewport>) => GeoData;
} = {
  hero: (vp) => {
    return {
      distance: 120,
      rotateSpeed: 0.8,
      nucleus: {
        timeScalar: 1,
        morphScalar: 3,
      },
    };
  },
  description: (vp) => {
    return {
      distance: 250,
      rotateSpeed: 0.8,
      nucleus: {
        timeScalar: 2,
        morphScalar: 2,
      },
    };
  },
};

const NoiseyBlobInternal = (props: NoiseyBlobProps) => {
  const viewport = useViewport();
  const section = useSection("hero");
  const [geoData, setGeoData] = useState(_geoData[section.active](viewport));
  const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
  const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
  const textureSphere = useLoader(Three.TextureLoader, sceneBackground.src);
  const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
  textureNucleus.anisotropy = 16;
  let vw = window?.innerWidth || 1600;
  let vh = window?.innerHeight || 1200;
  useStars();

  useEffect(() => {
    setGeoData(_geoData[section.active](viewport));
  }, [viewport, section]);

  return (
    <>
      <OrbitControls
        autoRotate
        enablePan={false}
        autoRotateSpeed={geoData.rotateSpeed}
        minDistance={geoData.distance}
        maxDistance={geoData.distance}
        /* maxDistance={350} */
      />
      <perspectiveCamera
        args={[55, vw / vh, 0.01, 1000]}
        position={[0, 0, 230]}
      />
      <ambientLight position={[0, 20, 20]} args={["#fff", 1]} />
      <directionalLight args={["#fff", 2]} position={[0, 50, -20]} />
      <BlobNucleus texture={textureNucleus} {...geoData.nucleus} />
      <BlobStars texture={textureStar} />
      <BlobSphere texture={textureSphere} />
      <PointsTest texture={textureStar1} />
    </>
  );
};

const NoiseyBlob = (props: NoiseyBlobProps) => {
  return (
    <div
      className={
        "w-full h-screen absolute top-0 left-0 right-0 bottom-0 -z-[10]"
      }
    >
      <div
        className={
          "absolute top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen opacity-90"
        }
      />
      <Canvas
        className={"block w-full h-full"}
        gl={{
          antialias: true,
          alpha: true,
          pixelRatio: window?.devicePixelRatio,
        }}
      >
        <NoiseyBlobInternal {...props} />
      </Canvas>
    </div>
  );
};

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
