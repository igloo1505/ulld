import type { syncRootDirectory } from "@ulld/utilities/actions-syncDirectory";
// import { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";
import { internalGlobalActionMap } from "./actionMap";
import { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";

// TODO: Find ways to implement type saftey, making sure all of the keys in the internalGlobalActionIds type are accounted for.



// type InternalActionType = {
//     [K in InternalGlobalActionIds]: ((...props: any[]) => Promise<any>)
// }

type ValidActionFunction<ActionReturn = any> = (...args: any[]) => Promise<ActionReturn>



// export type GlobalActions =
//     | { id: "togglePreferFileSystem"; fnc: () => Promise<void> }
//     | { id: "toggleTooltips"; fnc: () => Promise<void> }
//     | { id: "syncRootDirectory"; fnc: () => ReturnType<typeof syncRootDirectory> }
//     | { id: "toggleDarkMode"; fnc: () => Promise<void> }
//     | { id: "toggleAllJupyterFolds"; fnc: () => Promise<number> }
//     | { id: "toggleIdSelectMode"; fnc: (other: string) => Promise<void> }
//     | { id: "showEquationIds"; fnc: (test: RegExp) => Promise<void> }
//     | { id: "toggleBookmarked"; fnc: (noteId: number) => Promise<boolean> };



// export type GlobalActionIds = GlobalActions["id"]
// export type GlobalActionItem<T = GlobalActionIds> = GlobalActions & {id: T}

// export type GlobalActionParamater<T = GlobalActionIds> = Parameters<GlobalActionItem<T>["fnc"]>


// export type GlobalActionAwaitedReturnType<T = GlobalActionIds> = Awaited<ReturnType<GlobalActionItem<T>["fnc"]>>


// const x: GlobalActionAwaitedReturnType<"toggleBookmarked"> = true
// const y: GlobalActionParamater<"toggleBookmarked"> = [
    1
// ]


type GlobalActionIdMapBase = {
    [K in InternalGlobalActionIds]: ValidActionFunction
}

export interface UlldGlobalActionMap extends GlobalActionIdMapBase {
    togglePreferFileSystem: () => Promise<void>;
    toggleTooltips: () => Promise<void>;
    syncRootDirectory: () => ReturnType<typeof syncRootDirectory>;
    toggleDarkMode: () => Promise<void>;
    toggleAllJupyterFolds: () => Promise<void>;
    toggleIdSelectMode: () => Promise<void>;
    showEquationIds: () => Promise<void>;
    toggleBookmarked: (noteId: number) => Promise<boolean>;
};


export type GlobalActionIds = keyof UlldGlobalActionMap

export type GlobalActionParamaterTest<T extends keyof UlldGlobalActionMap> = UlldGlobalActionMap[T]

export type UlldGlobalActionParamater<T extends keyof UlldGlobalActionMap> = Parameters<UlldGlobalActionMap[T]>


export type UlldGlobalActionAwaitedReturnType<T extends keyof UlldGlobalActionMap> = Awaited<ReturnType<UlldGlobalActionMap[T]>>
