"use client";
import { WhiteboardRootProps, WBoard } from "./whiteboard";
import {
    WhiteboardStateConfig,
    useWhiteboardState,
} from "./useWhiteboardState";

interface Props extends Omit<WhiteboardRootProps, "initialData"> {
    showIfNoData?: boolean;
}

export const WhiteboardLocal = (props: Props & WhiteboardStateConfig) => {
    if (!props.data && !props.url) return null;

    const [whiteboardState, data, isReady] = useWhiteboardState(props);

    if ((!data && !props.showIfNoData) || !isReady) return null;
    console.log("whiteboardState: ", whiteboardState)

    console.log("data, isReady: ", data, isReady)

    return <WBoard {...props} {...whiteboardState} isLocal initialData={data} />;
};
