import { z } from "zod";
import { InternalDeveloperConfigInput as DCI, InternalDeveloperConfigInputWithoutGeneric } from "./types/developerConfig.js";
import { PluginSlotKey } from "./slotMapType.js";
export { parserKeyList } from "./parserSchema.js";
export declare const defaultPluginId = "THIS IS AUTOMATICALLY GENERATED. Do not apply this key yourself. It will be overwritten.";
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
        exportedPropsName: z.ZodOptional<z.ZodString>;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }, {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodObject<{
        mdx: z.ZodOptional<z.ZodType<import("./types/parserConfig.js").ParserConfig, z.ZodTypeDef, import("./types/parserConfig.js").ParserConfig>>;
    }, "strip", z.ZodTypeAny, {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    }, {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    }>>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig.js").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig.js").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig.js").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig.js").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig.js").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig.js").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }, {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig.js").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig.js").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }, {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }>, "strip", z.ZodTypeAny, {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    documentation: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    styles: z.ZodDefault<z.ZodObject<{
        root: z.ZodOptional<z.ZodString>;
        mdx: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mdx?: string | undefined;
        root?: string | undefined;
    }, {
        mdx?: string | undefined;
        root?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    pluginName: string;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }[];
    navigationLinks: {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    tailwind: {};
    parsers: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    };
    styles: {
        mdx?: string | undefined;
        root?: string | undefined;
    };
    commandPalette: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    pluginId: string;
    events: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    documentation?: string | undefined;
}, {
    label: string;
    pluginName: string;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[] | undefined;
    pages?: {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    navigationLinks?: {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    tailwind?: {} | undefined;
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    } | undefined;
    styles?: {
        mdx?: string | undefined;
        root?: string | undefined;
    } | undefined;
    commandPalette?: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    pluginId?: string | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig | undefined;
    documentation?: string | undefined;
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
        exportedPropsName: z.ZodOptional<z.ZodString>;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }, {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodObject<{
        mdx: z.ZodOptional<z.ZodType<import("./types/parserConfig.js").ParserConfig, z.ZodTypeDef, import("./types/parserConfig.js").ParserConfig>>;
    }, "strip", z.ZodTypeAny, {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    }, {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    }>>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig.js").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig.js").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig.js").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig.js").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig.js").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig.js").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }, {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig.js").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig.js").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }, {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }>, "strip", z.ZodTypeAny, {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    documentation: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    styles: z.ZodDefault<z.ZodObject<{
        root: z.ZodOptional<z.ZodString>;
        mdx: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mdx?: string | undefined;
        root?: string | undefined;
    }, {
        mdx?: string | undefined;
        root?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    pluginName: string;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }[];
    navigationLinks: {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    tailwind: {};
    parsers: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    };
    styles: {
        mdx?: string | undefined;
        root?: string | undefined;
    };
    commandPalette: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    pluginId: string;
    events: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    documentation?: string | undefined;
}, {
    label: string;
    pluginName: string;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[] | undefined;
    pages?: {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    navigationLinks?: {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    tailwind?: {} | undefined;
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    } | undefined;
    styles?: {
        mdx?: string | undefined;
        root?: string | undefined;
    } | undefined;
    commandPalette?: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    pluginId?: string | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig | undefined;
    documentation?: string | undefined;
}>, {
    label: string;
    pluginName: string;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }[];
    navigationLinks: {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    tailwind: {};
    parsers: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    };
    styles: {
        mdx?: string | undefined;
        root?: string | undefined;
    };
    commandPalette: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    pluginId: string;
    events: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    documentation?: string | undefined;
}, {
    label: string;
    pluginName: string;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[] | undefined;
    pages?: {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    navigationLinks?: {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    tailwind?: {} | undefined;
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    } | undefined;
    styles?: {
        mdx?: string | undefined;
        root?: string | undefined;
    } | undefined;
    commandPalette?: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    pluginId?: string | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig | undefined;
    documentation?: string | undefined;
}>;
export declare const internalBuildDeveloperConfigSchema: z.ZodObject<z.objectUtil.extendShape<{
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
        exportedPropsName: z.ZodOptional<z.ZodString>;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }, {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodObject<{
        mdx: z.ZodOptional<z.ZodType<import("./types/parserConfig.js").ParserConfig, z.ZodTypeDef, import("./types/parserConfig.js").ParserConfig>>;
    }, "strip", z.ZodTypeAny, {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    }, {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    }>>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig.js").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig.js").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig.js").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig.js").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig.js").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig.js").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }, {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig.js").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig.js").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }, {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }>, "strip", z.ZodTypeAny, {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    documentation: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    styles: z.ZodDefault<z.ZodObject<{
        root: z.ZodOptional<z.ZodString>;
        mdx: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mdx?: string | undefined;
        root?: string | undefined;
    }, {
        mdx?: string | undefined;
        root?: string | undefined;
    }>>;
}, {
    pluginId: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    label: string;
    pluginName: string;
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
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[];
    pages: {
        export: string;
        exportsPageProps: boolean;
        slot?: string | undefined;
        targetUrl?: string | undefined;
    }[];
    navigationLinks: {
        label: string;
        href: string;
        category: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    }[];
    tailwind: {};
    parsers: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    };
    styles: {
        mdx?: string | undefined;
        root?: string | undefined;
    };
    commandPalette: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    pluginId: string;
    events: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    documentation?: string | undefined;
}, {
    label: string;
    pluginName: string;
    pluginId: string;
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig | undefined;
    components?: {
        componentName: string;
        export: string;
        tags?: string[] | undefined;
        componentId?: string | undefined;
        slot?: string | undefined;
        embeddable?: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[] | undefined;
        exportedPropsName?: string | undefined;
        docsExport?: string | undefined;
        fullDocsExport?: string | undefined;
    }[] | undefined;
    pages?: {
        export: string;
        slot?: string | undefined;
        targetUrl?: string | undefined;
        exportsPageProps?: boolean | undefined;
    }[] | undefined;
    navigationLinks?: {
        label: string;
        href: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette" | undefined;
    tailwind?: {} | undefined;
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig | undefined;
    } | undefined;
    styles?: {
        mdx?: string | undefined;
        root?: string | undefined;
    } | undefined;
    commandPalette?: ({
        label: string;
        action: (...args: unknown[]) => unknown;
        isAvailable: (...args: unknown[]) => boolean;
    } | {
        label: string;
        href: string | ((...args: unknown[]) => string);
        isAvailable: (...args: unknown[]) => boolean;
    })[] | undefined;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig | undefined;
    trpc?: import("./types/trpcConfig.js").TrpcConfig | undefined;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig | undefined;
    documentation?: string | undefined;
}>;
export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
export type DeveloperConfigInput<T extends PluginSlotKey | undefined = undefined> = DCI<T>;
export type DeveloperConfigInputWithoutGeneric = InternalDeveloperConfigInputWithoutGeneric;
export type ParserKey = keyof DeveloperConfigOutput["parsers"];
//# sourceMappingURL=main.d.ts.map