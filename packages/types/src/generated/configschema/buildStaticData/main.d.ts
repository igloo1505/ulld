import { z } from "zod";
export declare const buildStaticDataSchema: z.ZodEffects<z.ZodObject<{
    fsRoot: z.ZodString;
    navigationLinks: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>, {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[], {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[]>;
    settingPages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
        pluginName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href?: string;
        pluginName?: string;
        title?: string;
        subtitle?: string;
    }, {
        href?: string;
        pluginName?: string;
        title?: string;
        subtitle?: string;
    }>, "many">>;
    componentDocs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        pluginName: z.ZodString;
        componentName: z.ZodString;
        embeddableSyntax: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        urls: z.ZodObject<{
            short: z.ZodOptional<z.ZodString>;
            full: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            short?: string;
            full?: string;
        }, {
            short?: string;
            full?: string;
        }>;
        filePaths: z.ZodObject<{
            short: z.ZodOptional<z.ZodString>;
            full: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            short?: string;
            full?: string;
        }, {
            short?: string;
            full?: string;
        }>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        componentId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tags?: string[];
        pluginName?: string;
        componentName?: string;
        embeddableSyntax?: string[];
        urls?: {
            short?: string;
            full?: string;
        };
        filePaths?: {
            short?: string;
            full?: string;
        };
        componentId?: string;
    }, {
        tags?: string[];
        pluginName?: string;
        componentName?: string;
        embeddableSyntax?: string[];
        urls?: {
            short?: string;
            full?: string;
        };
        filePaths?: {
            short?: string;
            full?: string;
        };
        componentId?: string;
    }>, "many">>;
    transpilePackages: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    tailwindSources: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    fsRoot?: string;
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    settingPages?: {
        href?: string;
        pluginName?: string;
        title?: string;
        subtitle?: string;
    }[];
    componentDocs?: {
        tags?: string[];
        pluginName?: string;
        componentName?: string;
        embeddableSyntax?: string[];
        urls?: {
            short?: string;
            full?: string;
        };
        filePaths?: {
            short?: string;
            full?: string;
        };
        componentId?: string;
    }[];
    transpilePackages?: string[];
    tailwindSources?: string[];
}, {
    fsRoot?: string;
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    settingPages?: {
        href?: string;
        pluginName?: string;
        title?: string;
        subtitle?: string;
    }[];
    componentDocs?: {
        tags?: string[];
        pluginName?: string;
        componentName?: string;
        embeddableSyntax?: string[];
        urls?: {
            short?: string;
            full?: string;
        };
        filePaths?: {
            short?: string;
            full?: string;
        };
        componentId?: string;
    }[];
    transpilePackages?: string[];
    tailwindSources?: string[];
}>, {
    parsableExtensions: string[];
    filetypeSpecificAppendices: Record<string, string>;
    internalDocumentTypes: ({
        id: string;
        docType: string;
        matchWeight: number;
        url: string;
        urlQuery: {};
        keywords: string[];
        label: string;
        autoTag: any[];
        autoTopic: any[];
        autoSubject: any[];
        UI: {
            styles: {
                dark: {};
                light: {};
            };
        };
        icon: string;
        inSidebar: boolean;
        inNavbar: boolean;
        fs?: undefined;
    } | {
        id: string;
        docType: string;
        matchWeight: number;
        fs: string;
        url: string;
        urlQuery: {};
        keywords: string[];
        label: string;
        autoTag: any[];
        autoTopic: any[];
        autoSubject: any[];
        UI: {
            styles: {
                dark: {};
                light: {};
            };
        };
        icon: string;
        inSidebar: boolean;
        inNavbar: boolean;
    })[];
    fileTypes: {
        image: string[];
    };
    fsRoot?: string;
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    settingPages?: {
        href?: string;
        pluginName?: string;
        title?: string;
        subtitle?: string;
    }[];
    componentDocs?: {
        tags?: string[];
        pluginName?: string;
        componentName?: string;
        embeddableSyntax?: string[];
        urls?: {
            short?: string;
            full?: string;
        };
        filePaths?: {
            short?: string;
            full?: string;
        };
        componentId?: string;
    }[];
    transpilePackages?: string[];
    tailwindSources?: string[];
}, {
    fsRoot?: string;
    navigationLinks?: {
        label?: string;
        href?: string;
        icon?: string;
        pluginName?: string;
        category?: "calendar" | "code" | "database" | "school" | "search" | "math" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
    }[];
    settingPages?: {
        href?: string;
        pluginName?: string;
        title?: string;
        subtitle?: string;
    }[];
    componentDocs?: {
        tags?: string[];
        pluginName?: string;
        componentName?: string;
        embeddableSyntax?: string[];
        urls?: {
            short?: string;
            full?: string;
        };
        filePaths?: {
            short?: string;
            full?: string;
        };
        componentId?: string;
    }[];
    transpilePackages?: string[];
    tailwindSources?: string[];
}>;
