export type OnBackupReturnData =
    | { success: false }
    | { success: true; backupData: string };


export type OnRestoreReturnData = {
    success: boolean
    message?: string
}
