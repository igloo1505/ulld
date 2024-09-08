import { TargetPaths } from "./paths.js";
import { type FileItemWithRootGlob } from "@ulld/utilities/additionalSources";
import { UlldAppConfigManager } from "./appConfig.js";
export declare class AdditionalSources {
    paths: TargetPaths;
    sourcesDir?: string;
    allowedRootDirItems: FileItemWithRootGlob[];
    hasContent: boolean;
    appendedCssPaths: string[];
    constructor(paths: TargetPaths);
    getAppConfig(): UlldAppConfigManager | undefined;
    private validateSearch;
    private glob;
    private getItemData;
    private getPaths;
    private getItems;
    private copyPath;
    private generateIndexScssFile;
    write(): void;
}
