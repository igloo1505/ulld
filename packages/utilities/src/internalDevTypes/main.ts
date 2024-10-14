import { InternalAppName, InternalDocumentConfigType } from "@ulld/types";

export interface InternalPackageItem {
    currentVersion: string;
    /** Relative path of the package's root directory with respect to the monorepo root. */
    relativeDirPath: string;
    name: InternalAppName;
    type: "app" | "package";
    hasPluginConfig: boolean;
}

export interface ProtectedPath {
    filePath: string;
    route: string;
    pageFor?: {
        slot?: string;
        subSlot?: string;
    };
}

interface DeveloperConfigKeysWithExportField {
    key: string;
    isArray: boolean;
}

export interface InternalBuildData {
    propsExtendsMap: Record<string, string>;
    protectedPaths: ProtectedPath[];
    reservedPublicDirs: string[];
    parsableFileExtensions: string[];
    developerConfigKeysWithExportField: DeveloperConfigKeysWithExportField[];
    internalDocumentTypes: InternalDocumentConfigType[];
    internalPackageData: InternalPackageItem[];
}
