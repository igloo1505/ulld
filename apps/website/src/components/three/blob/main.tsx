"use client";
import React, { useEffect } from "react";
import * as Three from "three";
import { Canvas, Vector2, useLoader, useThree } from "@react-three/fiber";
import sceneBackground from "./assets/01.jpg";
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import _texture3 from "./assets/06.png";
import Script from "next/script";
import Image from "next/image";
import { createNoise4D } from "simplex-noise";
import { OrbitControls } from "@react-three/drei";
import { BlobNucleus } from "./nucleus";
import { BlobSphere } from "./sphere";
import { BlobStars } from "./stars";
import { useStars } from "./useStars";
import PointsTest from "./pointTest";

interface NoiseyBlobProps {}

const NoiseyBlobInternal = (props: NoiseyBlobProps) => {
  const three = useThree();
  const noise = createNoise4D();
  useEffect(() => {
    console.log("three: ", three);
  }, [three]);
  const textureNucleus = useLoader(Three.TextureLoader, _textureNucleus.src);
  const textureStar = useLoader(Three.TextureLoader, _textureStar.src);
  const textureSphere = useLoader(Three.TextureLoader, sceneBackground.src);
  const textureStar1 = useLoader(Three.TextureLoader, _texture1.src);
  textureNucleus.anisotropy = 16;
  let vw = window?.innerWidth || 1600;
  let vh = window?.innerHeight || 1200;
  useStars()

  return (
    <>
      <OrbitControls
        /* enableRotate */
        /* enableDamping */
        autoRotate
        enablePan={false}
        autoRotateSpeed={1}
        minDistance={160}
        /* maxDistance={350} */
      />
      <perspectiveCamera
        args={[55, vw / vh, 0.01, 1000]}
        position={[0, 0, 230]}
      />
        <ambientLight 
                position={[0, 20, 20]}
                args={["#fff", 1]}
            />
      <directionalLight args={["#fff", 2]} position={[0, 50, -20]} />
      <BlobNucleus texture={textureNucleus} />
      <BlobStars texture={textureStar} />
      <BlobSphere texture={textureSphere} />
            <PointsTest 
                texture={textureStar1}
            />
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
      <Image
        fill
        src={sceneBackground}
        objectFit="cover"
        alt=""
        className={""}
        priority
      />
      <div
        className={
          "absolute top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen bg-black opacity-50"
        }
      />
      <Canvas
        className={"block w-full h-full"}
        gl={{
          antialias: true,
          alpha: true,
          pixelRatio: window.devicePixelRatio,
        }}
      >
        <NoiseyBlobInternal />
      </Canvas>
    </div>
  );
};

NoiseyBlob.displayName = "NoiseyBlob";

export default NoiseyBlob;
