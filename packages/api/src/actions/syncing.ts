import { showToast as _showToast } from "@ulld/state/state/slices/ui";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { OnBackupReturnData, OnRestoreReturnData } from "@ulld/types";
import { downloadFile } from "@ulld/utilities/downloadFile";
import { ToastConfigType } from "@ulld/utilities/types";
import { toast } from "@ulld/tailwind/use-toast";
import { errorToastRecord } from "@ulld/utilities/errorNotifications";

const showToast = (config: ToastConfigType, store?: ToolkitStore) => {
    // let s = store ? store : ((window as any).ulldStore as ToolkitStore);
    // console.log("s: ", s);
    // if (!s) return;
    toast(config);
};


const fetchWrapper = async (path: string, opts: RequestInit) => {
    let r = await fetch(path, opts);
    let body = await r.json();
    return body;
};


// TODO: Delete all references to this. This was moved to utilities/src/actions/sync/syncRootDirectory.ts. Move the rest of these methods to the same directory and clean up references to those as well.
export const syncRootDirectory = async () => {
    let res = await fetch("/api/events/onSync", {
        method: "POST",
        body: JSON.stringify({
            offline: !navigator.onLine,
            // TODO: Actually enable these options through something like a 'hard' sync or the like.
            removeIfNotInFs: false,
            cleanBeforeSync: false,
        }),
    });
    let resBody = await res.json();
    // let res = await axios.post(getDevPath("/api/events/onSync"), {
    //     offline: !navigator.onLine,
    //     // TODO: Actually enable these options through something like a 'hard' sync or the like.
    //     removeIfNotInFs: false,
    //     cleanBeforeSync: false,
    // });
    if (resBody?.errorNotifications && resBody?.errorNotifications?.length) {
        for (const err of resBody.errorNotifications) {
            showToast(
                errorToastRecord[err.errorKey as keyof typeof errorToastRecord],
            );
        }
    } else if (resBody.success) {
        showToast({
            title: "Success",
            description: "File system was synced with database.",
        });
    }
    return true;
};

export const backupData = async (store?: ToolkitStore) => {
    let data = await fetchWrapper("/api/events/onBackup", {
        method: "GET"
    })
    if (data?.success && data?.backupData) {
        downloadFile(data.backupData, "ulldBackup.json");
    } else {
        if (data?.success) {
            showToast({
                title: "Uh Oh",
                description:
                    "Something went wrong. If this issue persists, please submit an issue on Github.",
            });
        }
    }
};

export const restoreData = async (
    data: Record<string, any>,
    store?: ToolkitStore,
) => {
    let resData = await fetchWrapper("/api/events/onRestore", {
        body: JSON.stringify(data)
    })
    if (resData.success) {
        showToast(
            {
                title: "Success",
                description: "Your data was restored successfully.",
            },
            store,
        );
    }
};
