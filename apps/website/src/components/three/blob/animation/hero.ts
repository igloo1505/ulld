import { RootState } from "@react-three/fiber";
import { UseBlobAnimationProps } from "./types";
import { wiggleWiggle } from "./wigglewiggle";
import { geoDataMap } from "../utils";

export const useHeroAnimation = (state: RootState, dt: number, {
    nucleus, camera
}: UseBlobAnimationProps) => {
    wiggleWiggle(nucleus, state, dt, 1, 3)
    state.scene.rotateY(dt * -0.02)
}
