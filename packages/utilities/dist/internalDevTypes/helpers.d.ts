import { InternalAppName } from "@ulld/types";
import { InternalPackageItem } from "./main";
export declare const getCurrentPackageVersions: () => Record<InternalAppName, string>;
/** Returns only package data in the packages directory, not the apps directory. */
export declare const getPackageDataOnly: () => InternalPackageItem[];
/** Returns only the package data in the app directory, not the packages directory */
export declare const getAppDataOnly: () => InternalPackageItem[];
export declare const getInternalPackageNames: () => InternalAppName[];
export declare const getInternalAppNames: () => InternalAppName[];
//# sourceMappingURL=helpers.d.ts.map