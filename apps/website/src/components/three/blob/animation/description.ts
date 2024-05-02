import { RootState } from "@react-three/fiber";
import { UseBlobAnimationProps } from "./types";
import { wiggleWiggle } from "./wigglewiggle";
import { Pos } from "../utils";

export const useDescriptionAnimation = (
  state: RootState,
  dt: number,
  { nucleus, camera }: UseBlobAnimationProps,
    nucleusHovered: boolean
) => {
    wiggleWiggle(nucleus, state, dt, 5, 2);
};
