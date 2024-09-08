import { z } from "zod";
import type { PluginSlotKey } from "@ulld/developer-schemas/types";
import { PluginConfig } from "../schemas/pluginConfigSchema.js";
import { PackageJsonType } from "../static/packageJsonType.js";
declare const pluginProps: z.ZodObject<{
    targetRootPath: z.ZodString;
    name: z.ZodString;
    targetVersion: z.ZodDefault<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    status: z.ZodUnion<[z.ZodLiteral<"installed">, z.ZodLiteral<"install-failed">, z.ZodLiteral<"not-found">, z.ZodLiteral<"not-installed">]>;
    packageJsonStatus: z.ZodUnion<[z.ZodLiteral<"missing">, z.ZodLiteral<"present">]>;
    slot: z.ZodEnum<["components", "navigation", "plot", "bibliography", "calendar", "commandPalette", "editor", "math", "form", "icons", "notebook", "kanban", "dashboard", "logger", "journal", "noteNetwork", "pdf", "snippets", "taskManager", "whiteboard", "parsers"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: "installed" | "install-failed" | "not-found" | "not-installed";
    targetRootPath: string;
    targetVersion: string;
    packageJsonStatus: "missing" | "present";
    slot: "components" | "navigation" | "plot" | "bibliography" | "calendar" | "commandPalette" | "editor" | "math" | "form" | "icons" | "notebook" | "kanban" | "dashboard" | "logger" | "journal" | "noteNetwork" | "pdf" | "snippets" | "taskManager" | "whiteboard" | "parsers";
    path?: string | undefined;
}, {
    name: string;
    status: "installed" | "install-failed" | "not-found" | "not-installed";
    targetRootPath: string;
    packageJsonStatus: "missing" | "present";
    slot: "components" | "navigation" | "plot" | "bibliography" | "calendar" | "commandPalette" | "editor" | "math" | "form" | "icons" | "notebook" | "kanban" | "dashboard" | "logger" | "journal" | "noteNetwork" | "pdf" | "snippets" | "taskManager" | "whiteboard" | "parsers";
    targetVersion?: string | undefined;
    path?: string | undefined;
}>;
type T = z.output<typeof pluginProps>;
export declare class PluginManager implements T {
    targetRootPath: T["targetRootPath"];
    name: T["name"];
    targetVersion: T["targetVersion"];
    path?: T["path"];
    status: T["status"];
    packageJsonStatus: T["packageJsonStatus"];
    slot: PluginSlotKey;
    exists: boolean;
    packageJsonPath?: string;
    packageConfig?: PluginConfig;
    packageJsonContent?: PackageJsonType;
    constructor(props: z.input<typeof pluginProps>);
    getPluginConfig(): PluginConfig | undefined;
    getPluginManager(): void;
}
export {};
