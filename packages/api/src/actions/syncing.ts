import { showToast as _showToast } from "@ulld/state/state/slices/ui";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import axios from "axios";
import { OnBackupReturnData, OnRestoreReturnData } from "@ulld/types";
import { downloadFile } from "@ulld/utilities/downloadFile";
import { ToastConfigType } from "@ulld/utilities/types";


const showToast = (config: ToastConfigType, store?: ToolkitStore) => {
    let s = store ? store : ((window as any).ulldStore as ToolkitStore);
    s.dispatch(
        _showToast(config),
    );
}

export const syncRootDirectory = async (store?: ToolkitStore) => {
    let res = await axios.post("/api/events/onSync", {
        offline: !navigator.onLine,
        // TODO: Actually enable these options through something like a 'hard' sync or the like.
        removeIfNotInFs: false,
        cleanBeforeSync: false,
    });
    if (res.data?.success) {
        showToast({
            title: "Success",
            description: "File system was synced with database.",
        }, store)
    }
    return true;
};

export const backupData = async (store?: ToolkitStore) => {
    let res = await axios.get("/api/events/onBackup");
    let data = res.data as OnBackupReturnData;
    if (data.success && data.backupData) {
        downloadFile(data.backupData, "ulldBackup.json");
    } else {
        if (res.data?.success) {
            showToast({
                title: "Uh Oh",
                description: "Something went wrong. If this issue persists, please submit an issue on Github.",
            })
        }
    }
};


export const restoreData = async (data: Record<string, any>, store?: ToolkitStore) => {
    let res = await axios.post("/api/events/onRestore", data)
    let resData = res.data as OnRestoreReturnData
    if (resData.success) {
        showToast({
            title: "Success",
            description: "Your data was restored successfully."
        }, store)
    }
}
