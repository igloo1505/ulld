import { AppConfigSchemaOutput } from "@ulld/types";
import {getAllPlugins} from "./getAllPlugins"

export const getPluginConfig = ({pluginName, appConfig}: {
    appConfig: AppConfigSchemaOutput,
    pluginName: string
}) => {
    return getAllPlugins(appConfig).find((p) => p.pluginName === pluginName);
};
