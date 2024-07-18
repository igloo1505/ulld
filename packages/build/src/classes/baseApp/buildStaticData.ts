import { BuildStaticDataInput } from "@ulld/types";
import { UlldBuildProcess } from "../build";
import { TargetPaths } from "../paths";

export class BuildStaticData {
    constructor(public paths: TargetPaths, public build: UlldBuildProcess){}
    getData(){
        if(!this.build.appConfig.config?.fsRoot){
            throw new Error(`Cannot generate build output. No fsRoot property was defined in your configuration file.`)
        }
        let data: BuildStaticDataInput = {
            fsRoot: this.build.appConfig.config.fsRoot,
            navigationLinks: this.build.getFlatNavigationLinks(),
            // componentDocs: this.build.getFlatComponentDocs()
        }
    }
}
