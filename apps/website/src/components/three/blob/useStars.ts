"use client";
import { useLoader, useThree } from "@react-three/fiber";
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import _texture3 from "./assets/06.png";
import { useEffect, useState } from "react";
import {
  Texture,
  BufferGeometry,
  PointsMaterial,
  AdditiveBlending,
  TextureLoader,
  BufferAttribute,
  Points,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";
import { getPointArray } from "./utils";
import { useSearchParams } from "next/navigation";

const createStars = (
  texture: Texture,
  size: number,
  total: number,
  radius: number = 150,
) => {
  let pointsGeo = new BufferGeometry();
  let pm = new PointsMaterial({
    size,
    map: texture,
    blending: AdditiveBlending,
  });
  pointsGeo.setAttribute(
    "position",
    new BufferAttribute(new Float32Array(getPointArray(radius, total)), 3),
  );
  return new Points(pointsGeo, pm);
};

type StarsType = Points<
  BufferGeometry<NormalBufferAttributes>,
  PointsMaterial,
  Object3DEventMap
>;

export const useStars = () => {
  const [stars, setStars] = useState<StarsType[]>([]);
  const sp = useSearchParams();
  const texture1 = useLoader(TextureLoader, _texture1.src);
  const texture2 = useLoader(TextureLoader, _texture2.src);
  const texture3 = useLoader(TextureLoader, _texture3.src);
  const three = useThree();
  useEffect(() => {
    setStars([
      createStars(texture1, 15, 20),
      createStars(texture2, 5, 5),
      createStars(texture3, 7, 5),
    ]);
  }, []);

  useEffect(() => {
    const section = sp.get("section") || "hero";
    if (stars && section === "hero") {
      stars.forEach((s) => three.scene.add(s));
    } else {
      stars.forEach((s) => three.scene.remove(s));
    }
  }, [sp, stars]);
};
