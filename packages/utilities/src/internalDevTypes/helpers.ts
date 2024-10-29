import type { InternalAppName } from "@ulld/types";
import internalBuildData from "../utils/buildStaticData.json";
import type { InternalBuildData, InternalPackageItem } from "./main";

export const getCurrentPackageVersions = (): Record<
    InternalAppName,
    string
> => {
    const data: Record<InternalAppName, string> = {} as Record<
        InternalAppName,
        string
    >;
    for (const k of (internalBuildData as InternalBuildData)
        .internalPackageData) {
        data[k.name] = k.currentVersion;
    }
    return data;
};

/** Returns only package data in the packages directory, not the apps directory. */
export const getPackageDataOnly = (): InternalPackageItem[] => {
    return (internalBuildData as InternalBuildData).internalPackageData.filter(
        (x) => x.type === "package",
    );
};

export const getInternalPackageRecord = (): Record<
    InternalAppName,
    InternalPackageItem
> => {
    const data = {} as Record<InternalAppName, InternalPackageItem>;
    for (const k of (internalBuildData as InternalBuildData)
        .internalPackageData) {
        data[k.name] = k;
    }

    return data;
};

/** Returns only the package data in the app directory, not the packages directory */
export const getAppDataOnly = (): InternalPackageItem[] => {
    return (internalBuildData as InternalBuildData).internalPackageData.filter(
        (x) => x.type === "app",
    );
};

export const getInternalPackageNames = (): InternalAppName[] => {
    return getPackageDataOnly().map((x) => x.name);
};

export const getInternalPackagesToTranspile = (): InternalAppName[] => {
    return getPackageDataOnly()
        .filter((x) => !x.isTranspiled)
        .map((x) => x.name);
};

export const getInternalAppNames = (): InternalAppName[] => {
    return getAppDataOnly().map((x) => x.name);
};

export const getAllInternalNames = (): InternalAppName[] => {
    return internalBuildData.internalPackageData.map(
        (n) => n.name as InternalAppName,
    );
};
