import { broadcastGlobalEvent } from "../../globalEvents/utils";
import {
    GlobalActionIds,
    UlldGlobalActionMap,
    UlldGlobalActionParamater,
    UlldGlobalActionAwaitedReturnType,
} from "./actionMapTypes";
import { bareGlobalActionsMap } from "./bareActionMap";
import type { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";


const isGlobalId = <T extends GlobalActionIds>(id: T, globalActionId: GlobalActionIds): id is T => {
      return id === globalActionId
}


// PRIORITY: Figure out why the fuck I can't constrain this id field no matter what sort of if and switch statements I apply.
// RESUME: Figure out why the fuck I can't constrain this id field no matter what sort of if and switch statements I apply.
const emitGlobalEvent = <J extends keyof UlldGlobalActionMap>(
    id: J,
    props: UlldGlobalActionParamater<J>,
    res: UlldGlobalActionAwaitedReturnType<J>,
): void => {
    // if(id === "toggleBookmarked" as GlobalActionIds){
    //     id
    //     props
    //     res
    // }
    // if(id === "toggleDarkMode"){
    //     return broadcastGlobalEvent("bookmarkStateChange", {
    //         bookmarked: res || false,
    //         id: props
    //    })
    // }
};


export const runActionById = async <T extends InternalGlobalActionIds>(
    id: T,
    ...props: UlldGlobalActionParamater<T>
): Promise<UlldGlobalActionAwaitedReturnType<T>> => {
    // Had to use weird hack to make typescript not complain about not returning a promise, even though all functions in the map return a promise.
    const _props = props
        ? (props as UlldGlobalActionParamater<T>)
        : ([] as UlldGlobalActionParamater<T>);
    const res = (await bareGlobalActionsMap[id](
        ...(_props ?? [])
    )) as Awaited<UlldGlobalActionAwaitedReturnType<T>>;
    emitGlobalEvent<T>(id, _props, res)
    return res;
};

const x = runActionById("toggleBookmarked", 4);
