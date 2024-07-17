import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths";

export class PluginParser {
    constructor(public data: DeveloperConfigOutput["parsers"][number], public paths: TargetPaths){}
}
