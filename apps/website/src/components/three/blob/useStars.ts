"use client";
import { Vector3, useLoader, useThree } from "@react-three/fiber";
import sceneBackground from "./assets/01.jpg";
import _textureNucleus from "./assets/02.jpg";
import _textureStar from "./assets/03.png";
import _texture1 from "./assets/04.png";
import _texture2 from "./assets/05.png";
import _texture3 from "./assets/06.png";
import { useEffect } from "react";
import {
  Texture,
  BufferGeometry,
  PointsMaterial,
  AdditiveBlending,
  MathUtils,
  TextureLoader,
  Vector2,
  BufferAttribute,
  Points,
} from "three";
import { getPointArray, randomPointSphere } from "./utils";

const createStars = (texture: Texture, size: number, total: number, radius: number = 150) => {
  let pointsGeo = new BufferGeometry();
  let pm = new PointsMaterial({
    size,
    map: texture,
    blending: AdditiveBlending,
  });
  pointsGeo.setAttribute("position", new BufferAttribute(new Float32Array(getPointArray(radius, total)), 3))
    return new Points(pointsGeo, pm)
};




export const useStars = () => {
  const texture1 = useLoader(TextureLoader, _texture1.src);
  const texture2 = useLoader(TextureLoader, _texture2.src);
  const texture3 = useLoader(TextureLoader, _texture3.src);
  const three = useThree();
  useEffect(() => {
    three.scene.add(createStars(texture1, 15, 20));
    three.scene.add(createStars(texture2, 5, 5));
    three.scene.add(createStars(texture3, 7, 5));
  }, []);
};
