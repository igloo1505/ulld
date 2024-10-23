import type { syncRootDirectory } from "@ulld/utilities/actions-syncDirectory";
// import { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";
import { internalGlobalActionMap } from "./actionMap";

// TODO: Find ways to implement type saftey, making sure all of the keys in the internalGlobalActionIds type are accounted for.

// export type GlobalActions =
//     | { id: "togglePreferFileSystem"; fnc: () => Promise<void> }
//     | { id: "toggleTooltips"; fnc: () => Promise<void> }
//     | { id: "syncRootDirectory"; fnc: () => ReturnType<typeof syncRootDirectory> }
//     | { id: "toggleDarkMode"; fnc: () => Promise<void> }
//     | { id: "toggleAllJupyterFolds"; fnc: () => Promise<number> }
//     | { id: "toggleIdSelectMode"; fnc: (other: string) => Promise<void> }
//     | { id: "showEquationIds"; fnc: (test: RegExp) => Promise<void> }
//     | { id: "toggleBookmarked"; fnc: (noteId: number) => Promise<boolean> };


// type InternalActionType = {
//     [K in InternalGlobalActionIds]: ((...props: any[]) => Promise<any>)
// }

export interface GlobalActionMap {
    togglePreferFileSystem: () => Promise<void>;
    toggleTooltips: () => Promise<void>;
    syncRootDirectory: () => ReturnType<typeof syncRootDirectory>;
    toggleDarkMode: () => Promise<void>;
    toggleAllJupyterFolds: () => Promise<void>;
    toggleIdSelectMode: () => Promise<void>;
    showEquationIds: () => Promise<void>;
    toggleBookmarked: (noteId: number) => Promise<boolean>;
};

export type GlobalActionIds = keyof GlobalActionMap

export type GlobalActionParamaterTest<T extends GlobalActionIds = GlobalActionIds> = GlobalActionMap[T]

export type GlobalActionParamater<T extends GlobalActionIds = GlobalActionIds> = Parameters<GlobalActionMap[T]>


export type GlobalActionAwaitedReturnType<T extends GlobalActionIds = GlobalActionIds> = Awaited<ReturnType<GlobalActionMap[T]>>



// export type GlobalActionIds = GlobalActions["id"]
// export type GlobalActionItem<T = GlobalActionIds> = GlobalActions & {id: T}

// export type GlobalActionParamater<T = GlobalActionIds> = Parameters<GlobalActionItem<T>["fnc"]>


// export type GlobalActionAwaitedReturnType<T = GlobalActionIds> = Awaited<ReturnType<GlobalActionItem<T>["fnc"]>>


// const x: GlobalActionAwaitedReturnType<"toggleBookmarked"> = true
// const y: GlobalActionParamater<"toggleBookmarked"> = [
//     1
// ]
