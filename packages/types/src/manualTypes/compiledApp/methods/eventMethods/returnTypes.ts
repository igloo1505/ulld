import { ErrorHandlingReturnData } from "../../../errorHandling";



export interface OnRestoreReturnData extends ErrorHandlingReturnData  {
    success: boolean
    message?: string
}

interface OnBackupFail extends ErrorHandlingReturnData {
      success: false
}

export type OnBackupReturnData =
    | OnBackupFail
    | { success: true; backupData: string };


export interface OnSyncReturnData extends ErrorHandlingReturnData {
    success: boolean
}
