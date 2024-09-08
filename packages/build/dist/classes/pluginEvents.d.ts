import { DeveloperConfigInput, DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths.js";
import { EventMethodKey } from "../types.js";
import { ShellManager } from "./baseClasses/shell.js";
export declare class PluginEvents extends ShellManager {
    data: DeveloperConfigOutput["events"];
    paths: TargetPaths;
    pluginName: string;
    hasEvents: boolean;
    importNames: NonNullable<DeveloperConfigInput["events"]>;
    constructor(data: DeveloperConfigOutput["events"], paths: TargetPaths, pluginName: string);
    applyIndex(index: number): void;
    hasEventType(k: EventMethodKey): boolean;
    getEventImport(k: EventMethodKey): string;
    getMethodAsString(k: EventMethodKey): string;
    getOutputMethod(k: EventMethodKey): string;
}
