import type { PluginSettingsRecord } from "@ulld/types";
import { client } from "../../../../trpc/client";
import { PluginSettings as PS } from "./pluginSettings";
import type { UpdatePluginSettingOptionsSchema } from "./schemas";

export class PluginSettings<T extends PluginSettingsRecord> extends PS<T> {
    async getSettings(): Promise<Partial<T> | undefined> {
        const res = await client.pluginSettings.getPluginSettings.query({
            pluginName: this.pluginName,
        });
        if(res){
            this.data = res;
            return res;
        }
    }
    async sync(
        options: UpdatePluginSettingOptionsSchema = {},
    ): Promise<Partial<T>> {
        const res = (await client.pluginSettings.updatePluginSettings.mutate({
            pluginName: this.pluginName,
            data: this.data,
            options,
        })) as Partial<T>;
        this.data = res;
        return res;
    }
}
