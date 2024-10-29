// TODO: Refine this type as the ErrorNotifications are moved from the utilities package to the types package. Gather those keys as part of the utilities package build script.

type UlldGlobalErrorKey = string

export interface ErrorNotification {
    errorKey: UlldGlobalErrorKey
}


export interface ErrorHandlingReturnData {
    errorNotifications?: ErrorNotification[]
}


export interface IsNoConfigProps {
    noConfig?: boolean
}
