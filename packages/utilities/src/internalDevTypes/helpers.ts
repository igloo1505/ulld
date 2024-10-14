import { InternalAppName } from "@ulld/types"
import internalBuildData from "../utils/buildStaticData.json"
import { InternalBuildData, InternalPackageItem } from "./main"


export const getCurrentPackageVersions = (): Record<InternalAppName, string>  => {
    let data: Record<InternalAppName, string> = {} as Record<InternalAppName, string>
    for (const k of (internalBuildData as InternalBuildData).internalPackageData) {
       data[k.name] = k.currentVersion 
    }
    return data
}

/** Returns only package data in the packages directory, not the apps directory. */
export const getPackageDataOnly = (): InternalPackageItem[] => {
    return (internalBuildData as InternalBuildData).internalPackageData.filter((x) => x.type === "package")
}

/** Returns only the package data in the app directory, not the packages directory */
export const getAppDataOnly = (): InternalPackageItem[] => {
    return (internalBuildData as InternalBuildData).internalPackageData.filter((x) => x.type === "app")
}

export const getInternalPackageNames = (): InternalAppName[] => {
    return getPackageDataOnly().map((x) => x.name)
}


export const getInternalAppNames = (): InternalAppName[] => {
    return getAppDataOnly().map((x) => x.name)
}
