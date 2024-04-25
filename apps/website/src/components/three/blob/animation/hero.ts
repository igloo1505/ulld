import { RootState } from "@react-three/fiber";
import { UseBlobAnimationProps } from "./types";
import { wiggleWiggle } from "./wigglewiggle";

export const useHeroAnimation = (
    state: RootState,
    dt: number,
    { nucleus, camera }: UseBlobAnimationProps,
    timeScalar: number,
    morphScalar: number
) => {
    wiggleWiggle(
        nucleus,
        state,
        dt,
        timeScalar,
        morphScalar
    );
    state.scene.rotateY(dt * -0.02);
};
