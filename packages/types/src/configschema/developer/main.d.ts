import { z } from "zod";
import { InternalDeveloperConfigInput as DCI } from "./types/developerConfig";
import { PluginSlotKey } from "./slotMapType";
export declare const developerConfigSchema: z.ZodEffects<z.ZodObject<{
    pluginName: z.ZodString;
    slot: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"snippets">, z.ZodLiteral<"equations">, z.ZodLiteral<"editor">, z.ZodLiteral<"bibliography">, z.ZodLiteral<"UI">, z.ZodLiteral<"task-manager">, z.ZodLiteral<"pdf">, z.ZodLiteral<"navigation">, z.ZodLiteral<"landing">, z.ZodLiteral<"commandPalette">]>>;
    components: z.ZodDefault<z.ZodArray<z.ZodObject<{
        componentName: z.ZodEffects<z.ZodString, string, string>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        embeddable: z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            regexToInclude: string;
            label?: string | undefined;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, {
            label: string;
            regexToInclude: string;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, "many">, z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            regexToInclude: string;
            label?: string | undefined;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, {
            label: string;
            regexToInclude: string;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>]>>, {
            label: string;
            regexToInclude: string;
        }[] | undefined, {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined>;
        docsExport: z.ZodOptional<z.ZodString>;
        fullDocsExport: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        componentName: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }, {
        componentName: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodArray<z.ZodType<import("./types/parserConfig").ParserConfig, z.ZodTypeDef, import("./types/parserConfig").ParserConfig>, "many">>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }, {
        export: string;
        targetUrl?: string | undefined;
        slot?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general";
        icon?: string | undefined;
    }, {
        href: string;
        label: string;
        icon?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general" | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    pages: {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }[];
    components: {
        componentName: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    parsers: import("./types/parserConfig").ParserConfig[];
    navigationLinks: {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general";
        icon?: string | undefined;
    }[];
    pluginName: string;
    events: import("./types/pluginEventsConfig").PluginEventsConfig;
    slot?: "bibliography" | "navigation" | "UI" | "equations" | "snippets" | "editor" | "pdf" | "commandPalette" | "task-manager" | "landing" | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
}, {
    pluginName: string;
    slot?: "bibliography" | "navigation" | "UI" | "equations" | "snippets" | "editor" | "pdf" | "commandPalette" | "task-manager" | "landing" | undefined;
    components?: {
        componentName: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[] | undefined;
    parsers?: import("./types/parserConfig").ParserConfig[] | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
    pages?: {
        export: string;
        targetUrl?: string | undefined;
        slot?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    events?: import("./types/pluginEventsConfig").PluginEventsConfig | undefined;
    navigationLinks?: {
        href: string;
        label: string;
        icon?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general" | undefined;
    }[] | undefined;
}>, {
    pages: {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }[];
    components: {
        componentName: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    parsers: import("./types/parserConfig").ParserConfig[];
    navigationLinks: {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general";
        icon?: string | undefined;
    }[];
    pluginName: string;
    events: import("./types/pluginEventsConfig").PluginEventsConfig;
    slot?: "bibliography" | "navigation" | "UI" | "equations" | "snippets" | "editor" | "pdf" | "commandPalette" | "task-manager" | "landing" | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
}, {
    pluginName: string;
    slot?: "bibliography" | "navigation" | "UI" | "equations" | "snippets" | "editor" | "pdf" | "commandPalette" | "task-manager" | "landing" | undefined;
    components?: {
        componentName: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[] | undefined;
    parsers?: import("./types/parserConfig").ParserConfig[] | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
    pages?: {
        export: string;
        targetUrl?: string | undefined;
        slot?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    events?: import("./types/pluginEventsConfig").PluginEventsConfig | undefined;
    navigationLinks?: {
        href: string;
        label: string;
        icon?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general" | undefined;
    }[] | undefined;
}>;
export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
export type DeveloperConfigInput<T extends PluginSlotKey | undefined = undefined> = DCI<T>;
//# sourceMappingURL=main.d.ts.map