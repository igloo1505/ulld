import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths";

export class PluginPage {
    constructor(public data: DeveloperConfigOutput["pages"][number]){}
    writePage(paths: TargetPaths){}
}
