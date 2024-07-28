import { PathKeys } from "@ulld/utilities/types";
import { AppConfigSchemaOutput } from "../zod/main";
import { BuildStaticDataOutput } from "../buildStaticData/types";
import { PluginEventsConfig } from "./types/pluginEventsConfig";
import type { AutoSettingWithRegex, OnSyncOptions } from "@ulld/types";
import type { PrismaClient} from "@ulld/database"
import type { UlldGlob } from "@ulld/utilities/glob";

export type EventMethods<T extends object> = {
    onRestore: (restoreData: T, prisma: PrismaClient) => Promise<void>;
    onBuild: (paths: Record<PathKeys, string>) => Promise<void>;
    onSync: (
        opts: OnSyncOptions,
        appConfig: AppConfigSchemaOutput,
        buildData: BuildStaticDataOutput,
        glob: InstanceType<typeof UlldGlob>,
        autoSettings: AutoSettingWithRegex[],
        prisma: PrismaClient
    ) => Promise<void>;
    onBackup: (
        appConfig: AppConfigSchemaOutput,
        buildData: BuildStaticDataOutput,
        prisma: PrismaClient
    ) => Promise<T>;
};

export type EventMethod<
    T extends object,
    J extends keyof PluginEventsConfig,
> = EventMethods<T>[J];



export type OutputMethods<T extends object, K extends keyof PluginEventsConfig> = {
    func: EventMethods<T>[K],
    pluginId: string
}[]
