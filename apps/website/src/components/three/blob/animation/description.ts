import { RootState } from "@react-three/fiber";
import { UseBlobAnimationProps } from "./types";
import { createNoise4D } from "simplex-noise";
import alea from "alea";
import { wiggleWiggle } from "./wigglewiggle";

export const useDescriptionAnimation = (
  state: RootState,
  dt: number,
  { nucleus, camera }: UseBlobAnimationProps,
) => {
  wiggleWiggle(nucleus, state, dt, 5, 2);
};
