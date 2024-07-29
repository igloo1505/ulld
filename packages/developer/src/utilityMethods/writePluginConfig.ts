import {
    DeveloperConfigOutput,
} from "@ulld/configschema/developer";
import { WritePluginConfigHandler } from "./classes/writeConfig/main";


export const writePluginConfig = (
    config: DeveloperConfigOutput,
    directory: string,
    appendToPackageJson: boolean | "both" = "both",
    questionablyDontOverwritePluginId: boolean = false,
) => {
   let configHandler = new WritePluginConfigHandler(config, directory, appendToPackageJson, questionablyDontOverwritePluginId)
    configHandler.writeModified()
};
