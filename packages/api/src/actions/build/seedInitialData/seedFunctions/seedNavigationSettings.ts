import { InitialSeedData } from "@ulld/utilities/initialSeedData";
import { serverClient } from "trpc/serverClient";
import { navigationFormSettingSchema } from "@ulld/schemas/pluginSettings-navigation"

export const seedNavigationSettings = async (props: InitialSeedData): Promise<void> => {
    const existingSettings = await serverClient.pluginSettings.getPluginSettings({
        pluginName: "@ulld/navigation"
    })

    if(!existingSettings){
        const newSettings = navigationFormSettingSchema.parse(props.navigation.settings)
        serverClient.pluginSettings.updatePluginSettings({
            pluginName: "@ulld/navigation",
            data: newSettings
        })
    }
}
