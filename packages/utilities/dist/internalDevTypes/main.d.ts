import type { InternalAppName, InternalDocumentConfigType } from "@ulld/types";
export interface InternalPackageItem {
    currentVersion: string;
    /** Relative path of the package's root directory with respect to the monorepo root. */
    relativeDirPath: string;
    name: InternalAppName;
    type: "app" | "package";
    hasPluginConfig: boolean;
    sourceLocation: "dist" | "src";
    /** True if package is already transpiled. If false, package must be appended to the buildStaticData.json file's transpilePackages field. */
    isTranspiled: boolean;
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
interface PathToCopyForDocumentation {
    glob: string;
    globRoot: string[];
}
export interface InternalBuildData {
    propsExtendsMap: Record<string, string>;
    protectedPaths: ProtectedPath[];
    reservedPublicDirs: string[];
    parsableFileExtensions: string[];
    developerConfigKeysWithExportField: DeveloperConfigKeysWithExportField[];
    pathsToCopyForDocumentation: PathToCopyForDocumentation[];
    internalDocumentTypes: InternalDocumentConfigType[];
    internalPackageData: InternalPackageItem[];
}
export {};
//# sourceMappingURL=main.d.ts.map