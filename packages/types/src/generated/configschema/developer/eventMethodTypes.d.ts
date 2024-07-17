import { TargetPathKeys } from "@ulld/utilities/types";
import { AppConfigSchemaOutput } from "../zod/main";
import { BuildStaticDataOutput } from "../buildStaticData/types";
import { PluginEventsConfig } from "./types/pluginEventsConfig";
export type EventMethods<T extends object> = {
    onRestore: (restoreData: T) => Promise<void>;
    onBuild: (paths: Record<TargetPathKeys, string>) => Promise<void>;
    onSync: (appConfig: AppConfigSchemaOutput, buildData: BuildStaticDataOutput) => Promise<void>;
    onBackup: (appConfig: AppConfigSchemaOutput, buildData: BuildStaticDataOutput) => Promise<T>;
};
export type EventMethod<T extends object, J extends keyof PluginEventsConfig> = EventMethods<T>[J];
//# sourceMappingURL=eventMethodTypes.d.ts.map