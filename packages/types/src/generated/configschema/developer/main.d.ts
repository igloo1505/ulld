import { z } from "zod";
import { InternalDeveloperConfigInput as DCI, InternalDeveloperConfigInputWithoutGeneric } from "./types/developerConfig";
import { PluginSlotKey } from "./slotMapType";
export declare const _developerConfigSchema: z.ZodObject<{
    pluginName: z.ZodString;
    label: z.ZodString;
    pluginId: z.ZodDefault<z.ZodString>;
    slot: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"snippets">, z.ZodLiteral<"math">, z.ZodLiteral<"editor">, z.ZodLiteral<"UI">, z.ZodLiteral<"bibliography">, z.ZodLiteral<"taskManager">, z.ZodLiteral<"pdf">, z.ZodLiteral<"navigation">, z.ZodLiteral<"dashboard">, z.ZodLiteral<"form">, z.ZodLiteral<"commandPalette">]>>;
    components: z.ZodDefault<z.ZodArray<z.ZodObject<{
        componentName: z.ZodEffects<z.ZodString, string, string>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
        componentId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags: string[];
        componentName: string;
        componentId: string;
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
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
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
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }, {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }>, z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }, "strip", z.ZodTypeAny, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    pluginName: string;
    pluginId: string;
    components: {
        tags: string[];
        componentName: string;
        componentId: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }[];
    navigationLinks: {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    commandPalette: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    tailwind: {};
    parsers: import("./types/parserConfig").ParserConfig[];
    events: import("./types/pluginEventsConfig").PluginEventsConfig;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
}, {
    label: string;
    pluginName: string;
    pluginId?: string | undefined;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
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
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    commandPalette?: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    tailwind?: {} | undefined;
}>;
export declare const developerConfigSchema: z.ZodEffects<z.ZodObject<{
    pluginName: z.ZodString;
    label: z.ZodString;
    pluginId: z.ZodDefault<z.ZodString>;
    slot: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"snippets">, z.ZodLiteral<"math">, z.ZodLiteral<"editor">, z.ZodLiteral<"UI">, z.ZodLiteral<"bibliography">, z.ZodLiteral<"taskManager">, z.ZodLiteral<"pdf">, z.ZodLiteral<"navigation">, z.ZodLiteral<"dashboard">, z.ZodLiteral<"form">, z.ZodLiteral<"commandPalette">]>>;
    components: z.ZodDefault<z.ZodArray<z.ZodObject<{
        componentName: z.ZodEffects<z.ZodString, string, string>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
        componentId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags: string[];
        componentName: string;
        componentId: string;
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
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
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
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }, {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }>, z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }, "strip", z.ZodTypeAny, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    pluginName: string;
    pluginId: string;
    components: {
        tags: string[];
        componentName: string;
        componentId: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }[];
    navigationLinks: {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    commandPalette: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    tailwind: {};
    parsers: import("./types/parserConfig").ParserConfig[];
    events: import("./types/pluginEventsConfig").PluginEventsConfig;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
}, {
    label: string;
    pluginName: string;
    pluginId?: string | undefined;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
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
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    commandPalette?: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    tailwind?: {} | undefined;
}>, {
    label: string;
    pluginName: string;
    pluginId: string;
    components: {
        tags: string[];
        componentName: string;
        componentId: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }[];
    navigationLinks: {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    commandPalette: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    tailwind: {};
    parsers: import("./types/parserConfig").ParserConfig[];
    events: import("./types/pluginEventsConfig").PluginEventsConfig;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
}, {
    label: string;
    pluginName: string;
    pluginId?: string | undefined;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
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
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    commandPalette?: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    tailwind?: {} | undefined;
}>;
export declare const internalBuildDeveloperConfigSchema: z.ZodObject<{
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig").PluginSettingsConfig>>;
    label: z.ZodString;
    pluginName: z.ZodString;
    components: z.ZodDefault<z.ZodArray<z.ZodObject<{
        componentName: z.ZodEffects<z.ZodString, string, string>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
        componentId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags: string[];
        componentName: string;
        componentId: string;
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
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
    }>, "many">>;
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
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }, {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }>, z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }, "strip", z.ZodTypeAny, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    slot: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"snippets">, z.ZodLiteral<"math">, z.ZodLiteral<"editor">, z.ZodLiteral<"UI">, z.ZodLiteral<"bibliography">, z.ZodLiteral<"taskManager">, z.ZodLiteral<"pdf">, z.ZodLiteral<"navigation">, z.ZodLiteral<"dashboard">, z.ZodLiteral<"form">, z.ZodLiteral<"commandPalette">]>>;
    parsers: z.ZodDefault<z.ZodArray<z.ZodType<import("./types/parserConfig").ParserConfig, z.ZodTypeDef, import("./types/parserConfig").ParserConfig>, "many">>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig").TrpcConfig>>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig").PluginEventsConfig>>;
    pluginId: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    label: string;
    pluginName: string;
    pluginId: string;
    components: {
        tags: string[];
        componentName: string;
        componentId: string;
        export: string;
        slot?: string | undefined;
        embeddable?: {
            label: string;
            regexToInclude: string;
        }[] | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        targetUrl?: string | undefined;
        slot?: string | undefined;
    }[];
    navigationLinks: {
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    commandPalette: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    tailwind: {};
    parsers: import("./types/parserConfig").ParserConfig[];
    events: import("./types/pluginEventsConfig").PluginEventsConfig;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
}, {
    label: string;
    pluginName: string;
    pluginId: string;
    settings?: import("./types/pluginSettingsConfig").PluginSettingsConfig | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
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
        componentId?: string | undefined;
    }[] | undefined;
    pages?: {
        export: string;
        targetUrl?: string | undefined;
        slot?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    navigationLinks?: {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    commandPalette?: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    tailwind?: {} | undefined;
    slot?: "bibliography" | "math" | "navigation" | "form" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "commandPalette" | undefined;
    parsers?: import("./types/parserConfig").ParserConfig[] | undefined;
    additionalImports?: import("./types/additionalImportsConfig").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig").TrpcConfig | undefined;
    events?: import("./types/pluginEventsConfig").PluginEventsConfig | undefined;
}>;
export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
export type DeveloperConfigInput<T extends PluginSlotKey | undefined = undefined> = DCI<T>;
export type DeveloperConfigInputWithoutGeneric = InternalDeveloperConfigInputWithoutGeneric;
//# sourceMappingURL=main.d.ts.map