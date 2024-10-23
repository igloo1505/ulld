import { client } from "@ulld/api/client";
import type { JsonParsableRecord } from "@ulld/types";
import { useEffect, useState } from "react";

interface UsePluginSettingsProps {
   pluginName: string
}

export const usePluginSettings = <T extends JsonParsableRecord>(
    { pluginName }: UsePluginSettingsProps,
): T | null => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
    const gatherPluginSettings = async (): Promise<void> => {
        const res = await client.pluginSettings.getPluginSettings.query({
            pluginName,
        }) as T | undefined | null
        setData(res || null);
    };
        gatherPluginSettings().catch(() => {
            // eslint-disable-next-line no-console -- Need to log error in catch block.. #MoveToLoggerPackage
            console.error(`There was an error retrieving the plugin settings in the usePluginSettings hook for the ${pluginName} plugin.`)
        })
    }, [pluginName]);

    return data
};
