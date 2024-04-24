import { RefObject } from "react";
import { IcosahedronGeometry, PerspectiveCamera } from "three";

export interface UseBlobAnimationProps {
  nucleus: RefObject<IcosahedronGeometry>;
  camera: RefObject<PerspectiveCamera>;
}
