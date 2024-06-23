import { DeveloperConfigOutput } from "@ulld/configschema/developer";

export class PluginParser {
    constructor(public data: DeveloperConfigOutput["parsers"][number]){}
}
