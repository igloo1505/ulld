import { ValidIconNameDynamicallyGenerated } from "@ulld/types";
import {
    enterIdSelectMode,
    setPreferFs,
    toggleAllJupyterFolds,
    toggleDarkMode,
    toggleEquationSelectMode,
} from "./general";
import { toggleToolTips } from "./dom";
import { syncRootDirectory } from "@ulld/utilities/actions-syncDirectory";

interface InternalActionItem {
    onSelect: (() => void) | (() => Promise<void>);
    label: string;
    defaultIcon?: ValidIconNameDynamicallyGenerated;
}

export const internalGlobalActionMap: Record<string, InternalActionItem> = {
    togglepreferfilesystem: {
        label: "Toggle Prefer File System",
        onSelect: async () => await setPreferFs("toggle"),
        defaultIcon: "database-zap"
    },
    toggletooltips: {
        label: "Toggle Tooltips",
        onSelect: () => toggleToolTips(),
        defaultIcon: "popcorn"
    },
    syncnotes: {
        label: "Sync Notes",
        onSelect: async () => await syncRootDirectory(),
        defaultIcon: "folder-sync"
    },
    toggledarkmode: {
        label: "Toggle Dark Mode",
        onSelect: () => toggleDarkMode(),
        defaultIcon: "moon-star"
    },
    togglejupyterfolds: {
        label: "Toggle Jupyter Folds",
        onSelect: () => toggleAllJupyterFolds(),
        defaultIcon: "origami"
    },
    toggleidselect: {
        label: "ID Select Mode",
        onSelect: enterIdSelectMode,
        defaultIcon: "box-select"
    },
    showequationids: {
        label: "Show Equation Id's",
        onSelect: () => toggleEquationSelectMode(),
        defaultIcon: "glasses"
    },
    // backupdbonly: {
    //     label: "Backup Non-Filesystem",
    //     onSelect: async () => {
    //         // TODO: Move this to an api call now that the app is generating those webhooks.
    //             await client.sync.backupNonFileSystemDB.mutate();
    //             showToast({
    //                 title: "Success",
    //                 description:
    //                     "Data that can not be re-generated from the filesystem has been backed up successfully.",
    //             });
    //         },
    // },
};
