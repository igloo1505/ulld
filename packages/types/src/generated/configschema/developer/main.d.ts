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
            label?: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, {
            label: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, "many">, z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, {
            label: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>]>>, {
            label: string;
            regexToInclude?: string;
        }[], {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[]>;
        exportedPropsName: z.ZodOptional<z.ZodString>;
        docsExport: z.ZodOptional<z.ZodString>;
        fullDocsExport: z.ZodOptional<z.ZodString>;
        componentId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }, {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodObject<{
        mdx: z.ZodOptional<z.ZodType<import("./types/parserConfig.js").ParserConfig, z.ZodTypeDef, import("./types/parserConfig.js").ParserConfig>>;
    }, "strip", z.ZodTypeAny, {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    }, {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    }>>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig.js").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig.js").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig.js").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig.js").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig.js").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig.js").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }, {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig.js").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig.js").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    }, {
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }>, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    }, {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    documentation: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    styles: z.ZodDefault<z.ZodObject<{
        root: z.ZodOptional<z.ZodString>;
        mdx: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mdx?: string;
        root?: string;
    }, {
        mdx?: string;
        root?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
}, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
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
            label?: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, {
            label: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, "many">, z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, {
            label: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>]>>, {
            label: string;
            regexToInclude?: string;
        }[], {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[]>;
        exportedPropsName: z.ZodOptional<z.ZodString>;
        docsExport: z.ZodOptional<z.ZodString>;
        fullDocsExport: z.ZodOptional<z.ZodString>;
        componentId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }, {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodObject<{
        mdx: z.ZodOptional<z.ZodType<import("./types/parserConfig.js").ParserConfig, z.ZodTypeDef, import("./types/parserConfig.js").ParserConfig>>;
    }, "strip", z.ZodTypeAny, {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    }, {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    }>>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig.js").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig.js").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig.js").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig.js").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig.js").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig.js").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }, {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig.js").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig.js").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    }, {
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }>, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    }, {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    documentation: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    styles: z.ZodDefault<z.ZodObject<{
        root: z.ZodOptional<z.ZodString>;
        mdx: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mdx?: string;
        root?: string;
    }, {
        mdx?: string;
        root?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
}, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
}>, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
}, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
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
            label?: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, {
            label: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, "many">, z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>, {
            label: string;
            regexToInclude?: string;
        }, {
            label?: string;
            regexToInclude?: string;
        }>]>>, {
            label: string;
            regexToInclude?: string;
        }[], {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[]>;
        exportedPropsName: z.ZodOptional<z.ZodString>;
        docsExport: z.ZodOptional<z.ZodString>;
        fullDocsExport: z.ZodOptional<z.ZodString>;
        componentId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }, {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }>, "many">>;
    parsers: z.ZodDefault<z.ZodObject<{
        mdx: z.ZodOptional<z.ZodType<import("./types/parserConfig.js").ParserConfig, z.ZodTypeDef, import("./types/parserConfig.js").ParserConfig>>;
    }, "strip", z.ZodTypeAny, {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    }, {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    }>>;
    additionalImports: z.ZodOptional<z.ZodType<import("./types/additionalImportsConfig.js").AdditionalImportsConfig, z.ZodTypeDef, import("./types/additionalImportsConfig.js").AdditionalImportsConfig>>;
    trpc: z.ZodOptional<z.ZodType<import("./types/trpcConfig.js").TrpcConfig, z.ZodTypeDef, import("./types/trpcConfig.js").TrpcConfig>>;
    settings: z.ZodOptional<z.ZodType<import("./types/pluginSettingsConfig.js").PluginSettingsConfig, z.ZodTypeDef, import("./types/pluginSettingsConfig.js").PluginSettingsConfig>>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
        slot: z.ZodOptional<z.ZodString>;
        export: z.ZodEffects<z.ZodString, string, string>;
        exportsPageProps: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }, {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }>, "many">>;
    events: z.ZodDefault<z.ZodType<import("./types/pluginEventsConfig.js").PluginEventsConfig, z.ZodTypeDef, import("./types/pluginEventsConfig.js").PluginEventsConfig>>;
    navigationLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        pluginName: z.ZodOptional<z.ZodString>;
        category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }>, "many">>;
    commandPalette: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }>, "strip", z.ZodTypeAny, {
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    }, {
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
    }, {
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }>, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    }, {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    }>]>, "many">>;
    tailwind: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    documentation: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    styles: z.ZodDefault<z.ZodObject<{
        root: z.ZodOptional<z.ZodString>;
        mdx: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mdx?: string;
        root?: string;
    }, {
        mdx?: string;
        root?: string;
    }>>;
}, {
    pluginId: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
}, {
    settings?: import("./types/pluginSettingsConfig.js").PluginSettingsConfig;
    label?: string;
    pluginName?: string;
    components?: {
        tags?: string[];
        componentName?: string;
        componentId?: string;
        slot?: string;
        export?: string;
        embeddable?: {
            label?: string;
            regexToInclude?: string;
        } | {
            label?: string;
            regexToInclude?: string;
        }[];
        exportedPropsName?: string;
        docsExport?: string;
        fullDocsExport?: string;
    }[];
    pages?: {
        slot?: string;
        export?: string;
        targetUrl?: string;
        exportsPageProps?: boolean;
    }[];
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    slot?: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
    tailwind?: {};
    parsers?: {
        mdx?: import("./types/parserConfig.js").ParserConfig;
    };
    styles?: {
        mdx?: string;
        root?: string;
    };
    commandPalette?: ({
        label?: string;
        action?: (...args: unknown[]) => unknown;
        isAvailable?: (...args: unknown[]) => boolean;
    } | {
        label?: string;
        href?: string | ((...args: unknown[]) => string);
        isAvailable?: (...args: unknown[]) => boolean;
    })[];
    pluginId?: string;
    additionalImports?: import("./types/additionalImportsConfig.js").AdditionalImportsConfig;
    trpc?: import("./types/trpcConfig.js").TrpcConfig;
    events?: import("./types/pluginEventsConfig.js").PluginEventsConfig;
    documentation?: string;
}>;
export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
export type DeveloperConfigInput<T extends PluginSlotKey | undefined = undefined> = DCI<T>;
export type DeveloperConfigInputWithoutGeneric = InternalDeveloperConfigInputWithoutGeneric;
export type ParserKey = keyof DeveloperConfigOutput["parsers"];
