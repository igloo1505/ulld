import { client } from "@ulld/api/client";
import { useEffect, useState } from "react";

export const usePluginSettings = <T extends object>(
  pluginName: string,
): T | null => {

  const [data, setData] = useState<T | null>(null);

  const gatherData = async () => {
    let res = await client.settings.getPluginSettings({
      pluginName,
    });
    setData(res || null);
  };

  useEffect(() => {
    gatherData();
  }, []);

  return data;
};
