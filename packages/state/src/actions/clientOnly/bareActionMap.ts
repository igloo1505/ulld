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
import { GlobalActionMap } from "./actionMapTypes";
import { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";


export const bareGlobalActionsMap: GlobalActionMap = {
    togglePreferFileSystem: async () => setPreferFs("toggle"),
    toggleTooltips: async () => toggleToolTips(),
    syncRootDirectory: async () => syncRootDirectory(),
    toggleDarkMode: async () => toggleDarkMode(),
    toggleAllJupyterFolds: async () =>  toggleAllJupyterFolds(),
    toggleIdSelectMode: async () => enterIdSelectMode(),
    showEquationIds: async () => toggleEquationSelectMode(),
    toggleBookmarked: (noteId: number) => toggleBookmarkedById(noteId)
} satisfies {[K in InternalGlobalActionIds]: (props: any) => Promise<any>}
