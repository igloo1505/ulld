import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths";

export class PluginSettingsPage {
    constructor(public paths: TargetPaths, public settingsConfig: NonNullable<DeveloperConfigOutput["settings"]>){}
}
