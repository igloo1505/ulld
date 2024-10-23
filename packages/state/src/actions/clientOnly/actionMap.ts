import { ValidIconNameDynamicallyGenerated } from "@ulld/types";
import { GlobalActionIds } from "./actionMapTypes";
import { InternalGlobalActionIds } from "@ulld/utilities/internalGLobalActionsGeneratedData";

interface InternalActionItem {
    label: string;
    defaultIcon?: ValidIconNameDynamicallyGenerated;
}

export const internalGlobalActionMap: Record<InternalGlobalActionIds, InternalActionItem> = {
    togglePreferFileSystem: {
        label: "Toggle Prefer File System",
        defaultIcon: "database-zap"
    },
    toggleTooltips: {
        label: "Toggle Tooltips",
        defaultIcon: "popcorn"
    },
    syncRootDirectory: {
        label: "Sync Notes",
        defaultIcon: "folder-sync"
    },
    toggleDarkMode: {
        label: "Toggle Dark Mode",
        defaultIcon: "moon-star"
    },
    toggleAllJupyterFolds: {
        label: "Toggle Jupyter Folds",
        defaultIcon: "origami"
    },
    toggleIdSelectMode: {
        label: "ID Select Mode",
        defaultIcon: "box-select"
    },
    showEquationIds: {
        label: "Show Equation Id's",
        defaultIcon: "glasses"
    },
    toggleBookmarked: {
            label: "Toggle Bookmarked",
            defaultIcon: "bookmark"
    }
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
