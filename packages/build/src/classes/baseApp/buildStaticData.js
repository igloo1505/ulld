import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { FileManager } from "../baseClasses/fileManager.js";
import buildData from "@ulld/utilities/buildStaticData.json" with { type: "json" };
export class BuildStaticData {
    constructor(paths, build) {
        this.paths = paths;
        this.build = build;
        this.settingPageData = [];
        this.transpilePackages = buildData.internalPackageNames;
        this.hasSet = {
            settingsData: false
        };
    }
    setHasSetData(k, value = true) {
        this.hasSet[k] = value;
    }
    hasSetAll() {
        return Object.values(this.hasSet).every((a) => a);
    }
    getData() {
        if (!this.build.appConfig.config?.fsRoot) {
            throw new Error(`Cannot generate build output. No fsRoot property was defined in your configuration file.`);
        }
        let toTranspile = this.build.getPackagesToTranspile();
        this.transpilePackages = ArrayUtilities.concatWithoutDuplicates(this.transpilePackages, toTranspile);
        for (const item of toTranspile) {
            // TODO: Handle this better it this is the source of the build issue by creating a list of separate packages and apps, not just a single list.
            if (!this.transpilePackages.includes(item) && (!(item.includes("sandbox") || item.includes("website")))) {
                this.transpilePackages.push(item);
            }
        }
        // Weird typing to make sure all keys are implemented.
        let data = {
            fsRoot: this.build.appConfig.config.fsRoot,
            navigationLinks: this.build.getFlatNavigationLinks(),
            componentDocs: this.build.getFlatComponentDocs(),
            settingPages: this.build.getFlatPluginSettingPages(),
            transpilePackages: this.transpilePackages,
            tailwindSources: this.build.getTailwindSources()
        };
        return data;
    }
    writeOutput() {
        let data = this.getData();
        let outputFile = FileManager.fromAbsolutePath(this.paths.joinPath("projectRoot", "ulldBuildData.json"), this.paths, false);
        outputFile.writeContent(JSON.stringify(data, null, 4));
    }
}
