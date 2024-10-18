import { client } from "@ulld/api/client";
import { JsonParsableRecord } from "@ulld/types";
import { useEffect, useState } from "react";

export const usePluginSettings = <T extends JsonParsableRecord>(
    pluginName: string,
): [T | null, () => Promise<void>] => {
    const [data, setData] = useState<T | null>(null);

    const gatherPluginSettings = async () => {
        let res = await client.pluginSettings.getPluginSettings.query({
            pluginName,
        }) as T | undefined | null
        setData(res || null);
    };

    useEffect(() => {
        gatherPluginSettings();
    }, []);

    return [data, gatherPluginSettings]
};
