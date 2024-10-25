import { showToast as _showToast } from "@ulld/state/state/slices/ui";
import { downloadFile } from "@ulld/utilities/downloadFile";
import type { ToastConfigType } from "@ulld/utilities/types";
import { toast } from "@ulld/tailwind/use-toast";
import { errorToastRecord } from "@ulld/utilities/errorNotifications";
import { OnBackupReturnData, OnRestoreReturnData, OnSyncReturnData } from "@ulld/types";

const showToast = (config: ToastConfigType): void => {
    // let s = store ? store : ((window as any).ulldStore as ToolkitStore);
    // console.log("s: ", s);
    // if (!s) return;
    toast(config);
};


const fetchWrapper = async <JsonBody extends object>(path: string, opts: RequestInit): Promise<JsonBody> => {
    const r = await fetch(path, opts);
    const body: Promise<JsonBody> = await r.json() as Promise<JsonBody>
    return body;
};


// TODO: Delete all references to this. This was moved to utilities/src/actions/sync/syncRootDirectory.ts. Move the rest of these methods to the same directory and clean up references to those as well.
export const syncRootDirectory = async (): Promise<boolean> => {
    const res = await fetch("/api/events/onSync", {
        method: "POST",
        body: JSON.stringify({
            offline: !navigator.onLine,
            // TODO: Actually enable these options through something like a 'hard' sync or the like.
            removeIfNotInFs: false,
            cleanBeforeSync: false,
        }),
    });
    const resBody = await res.json() as OnSyncReturnData
    // let res = await axios.post(getDevPath("/api/events/onSync"), {
    //     offline: !navigator.onLine,
    //     // TODO: Actually enable these options through something like a 'hard' sync or the like.
    //     removeIfNotInFs: false,
    //     cleanBeforeSync: false,
    // });
    if (resBody?.errorNotifications?.length) {
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

export const backupData = async () => {
    const data = await fetchWrapper<OnBackupReturnData>("/api/events/onBackup", {
        method: "GET"
    })
    if (data?.success && data?.backupData) {
        downloadFile(data.backupData, "ulldBackup.json");
    } else if (data?.success) {
            showToast({
                title: "Uh Oh",
                description:
                    "Something went wrong. If this issue persists, please submit an issue on Github.",
            });
        }
};

export const restoreData = async (
    data: Record<string, any>,
) => {
    const resData = await fetchWrapper<OnRestoreReturnData>("/api/events/onRestore", {
        body: JSON.stringify(data)
    })
    if (resData.success) {
        showToast(
            {
                title: "Success",
                description: "Your data was restored successfully.",
            },
        );
    }
};
