import { BuildStaticDataInput, BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { UlldBuildProcess } from "../build";
import { TargetPaths } from "../paths";
import { FileManager } from "../baseClasses/fileManager";

type HasSetKey = "settingsData"

type HasSetBuildStaticData = Record<HasSetKey, boolean>

export class BuildStaticData {
    settingPageData: BuildStaticDataOutput["settingPages"] = []
    hasSet: HasSetBuildStaticData = {
        settingsData: false
    }
    constructor(public paths: TargetPaths, public build: UlldBuildProcess){}
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
        // Weird typing to make sure all keys are implemented.
        let data: {[K in keyof BuildStaticDataInput]: BuildStaticDataInput[K]} = {
            fsRoot: this.build.appConfig.config.fsRoot,
            navigationLinks: this.build.getFlatNavigationLinks(),
            componentDocs: this.build.getFlatComponentDocs(),
            settingPages: this.build.getFlatPluginSettingPages(),
            transpilePackages: this.build.getPackagesToTranspile(),
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
