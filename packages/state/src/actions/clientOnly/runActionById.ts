import { broadcastGlobalEvent } from "../../globalEvents/utils";
import {
    GlobalActionParamater,
    GlobalActionAwaitedReturnType,
    GlobalActionMap,
} from "./actionMapTypes";
import { bareGlobalActionsMap } from "./bareActionMap";
import type { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";


// const isGlobalId = <T extends InternalGlobalActionIds, K extends InternalGlobalActionIds>(id: K, compareTo: T): id is T => {
//        return id === compareTo
// }


// RESUME: Figure out why the fuck I can't constrain this id field no matter what sort of if and switch statements I apply.
const emitGlobalEvent = <ActionId extends keyof GlobalActionMap>(
    id: ActionId,
    props: GlobalActionParamater<ActionId>,
    res: Awaited<GlobalActionAwaitedReturnType<ActionId>>,
): void => {
    if(id === "toggleBookmarked"){
        id
        props
        res
    }
    // switch (id) {
    //     case "toggleBookmarked": {
    //         return broadcastGlobalEvent("bookmarkStateChange", {
    //             bookmarked: res || false,
    //             id: props,
    //         });
    //     }
    // }
    // if(id === ("toggleBookmarked" as "toggleBookmarked")){
    //     return broadcastglobalevent("bookmarkstatechange", {
    //         bookmarked: res || false,
    //         id: props
    //    })
    // }
};


export const runActionById = async <T extends InternalGlobalActionIds>(
    id: T,
    ...props: GlobalActionParamater<T>
): Promise<GlobalActionAwaitedReturnType<T>> => {
    // Had to use weird hack to make typescript not complain about not returning a promise, even though all functions in the map return a promise.
    const _props = props
        ? (props as GlobalActionParamater<T>)
        : ([] as GlobalActionParamater<T>);
    const res = (await bareGlobalActionsMap[id](
        ...(_props ?? [])
    )) as Awaited<GlobalActionAwaitedReturnType<T>>;
    emitGlobalEvent<T>(id, _props, res)
    return res;
};

const x = runActionById("toggleBookmarked", 4);
