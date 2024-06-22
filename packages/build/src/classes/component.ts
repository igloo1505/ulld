import { DeveloperConfigOutput } from "@ulld/configschema/developer";

export class PluginComponent {
    constructor(public data: DeveloperConfigOutput["components"][number]){}
}
