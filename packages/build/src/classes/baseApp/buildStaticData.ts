import { BuildStaticDataInput, BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { FileManager } from "../baseClasses/fileManager.js";
import { UlldBuildProcess } from "../build.js";
import { TargetPaths } from "../paths.js";
import buildData from "@ulld/utilities/buildStaticData.json";

type HasSetKey = "settingsData"

type HasSetBuildStaticData = Record<HasSetKey, boolean>

export class BuildStaticData {
    settingPageData: BuildStaticDataOutput["settingPages"] = []
    transpilePackages: string[] = buildData.internalPackageNames
    hasSet: HasSetBuildStaticData = {
        settingsData: false
    } 
    constructor(public paths: TargetPaths, public build: UlldBuildProcess){
    }
    setHasSetData(k: HasSetKey, value: boolean = true){
        this.hasSet[k] = value
    }
    hasSetAll(){
        return Object.values(this.hasSet).every((a) => a)
    }
    getData(): BuildStaticDataInput {
        if(!this.build.appConfig.config?.fsRoot){
            throw new Error(`Cannot generate build output. No fsRoot property was defined in your configuration file.`)
        }
        let toTranspile = this.build.getPackagesToTranspile()
        this.transpilePackages = ArrayUtilities.concatWithoutDuplicates(this.transpilePackages, toTranspile)
        for (const item of toTranspile) {
            // TODO: Handle this better it this is the source of the build issue by creating a list of separate packages and apps, not just a single list.
            if(!this.transpilePackages.includes(item) && (!(item.includes("sandbox") || item.includes("website")))){
                this.transpilePackages.push(item)
            }
        }
        // Weird typing to make sure all keys are implemented.
        let data: {[K in keyof BuildStaticDataInput]: BuildStaticDataInput[K]} = {
            fsRoot: this.build.appConfig.config.fsRoot,
            navigationLinks: this.build.getFlatNavigationLinks(),
            componentDocs: this.build.getFlatComponentDocs(),
            settingPages: this.build.getFlatPluginSettingPages(),
            transpilePackages: this.transpilePackages,
            tailwindSources: this.build.getTailwindSources()
        }
        return data
    }
    writeOutput(){
        let data = this.getData()
        let outputFile = FileManager.fromAbsolutePath(this.paths.joinPath("projectRoot", "ulldBuildData.json"), this.paths, false)
        outputFile.writeContent(JSON.stringify(data, null, 4))
    }
}
