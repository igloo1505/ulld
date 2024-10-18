import type { PluginSettingsRecord } from "@ulld/types";
import { serverClient } from "../../../../trpc/serverClient";
import { PluginSettings as PS } from "./pluginSettings";
import type { UpdatePluginSettingOptionsSchema } from "./schemas";

export class PluginSettings<T extends PluginSettingsRecord>  extends PS<T> {
    async getSettings(): Promise<Partial<T> | undefined> {
        const res = await serverClient.pluginSettings.getPluginSettings({
            pluginName: this.pluginName
        })
        if(res){
            this.data = res
            return res
        }
    };
    async sync(options: UpdatePluginSettingOptionsSchema = {}): Promise<Partial<T>> {
        const res = await serverClient.pluginSettings.updatePluginSettings({
            pluginName: this.pluginName,
            data: this.data,
            options
        }) as Partial<T>
        this.data = res
        return res
    }
}
