import {
    enterIdSelectMode,
    setPreferFs,
    toggleAllJupyterFolds,
    toggleBookmarkedById,
    toggleDarkMode,
    toggleEquationSelectMode,
} from "./general";
import { toggleToolTips } from "./dom";
import { syncRootDirectory } from "@ulld/utilities/actions-syncDirectory";
import { UlldGlobalActionMap } from "./actionMapTypes";
import type { InternalGlobalActionIds } from "@ulld/types";


export const bareGlobalActionsMap: UlldGlobalActionMap = {
    togglePreferFileSystem: async () => setPreferFs("toggle"),
    toggleTooltips: async () => toggleToolTips(),
    syncRootDirectory: async () => syncRootDirectory(),
    toggleDarkMode: async () => toggleDarkMode(),
    toggleAllJupyterFolds: async () =>  toggleAllJupyterFolds(),
    toggleIdSelectMode: async () => enterIdSelectMode(),
    showEquationIds: async () => toggleEquationSelectMode(),
    toggleBookmarked: async (noteId: number) => toggleBookmarkedById(noteId)
} satisfies {[K in InternalGlobalActionIds]: (props: any) => Promise<any>}
