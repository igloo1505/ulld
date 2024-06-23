import { DeveloperConfigOutput } from "@ulld/configschema/developer";

export class PluginEvents {
    constructor(public data: DeveloperConfigOutput["events"]){

    }
}
