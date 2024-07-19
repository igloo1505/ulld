import { z } from "zod";
import { ValidIconName } from "@ulld/icons";
export declare const buildStaticDataSchema: z.ZodEffects<z.ZodObject<{
    fsRoot: z.ZodString;
    navigationLinks: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>, ({
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    } | {
        label: string;
        href: string;
        icon: ValidIconName;
    })[], {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined>;
    settingPages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
        pluginName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
        pluginName: string;
        title?: string | undefined;
        subtitle?: string | undefined;
    }, {
        href: string;
        pluginName: string;
        title?: string | undefined;
        subtitle?: string | undefined;
    }>, "many">>;
    componentDocs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        pluginName: z.ZodString;
        componentName: z.ZodString;
        embeddableSyntax: z.ZodArray<z.ZodString, "many">;
        paths: z.ZodObject<{
            short: z.ZodOptional<z.ZodString>;
            full: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            short?: string | undefined;
            full?: string | undefined;
        }, {
            short?: string | undefined;
            full?: string | undefined;
        }>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tags: string[];
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        paths: {
            short?: string | undefined;
            full?: string | undefined;
        };
    }, {
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        paths: {
            short?: string | undefined;
            full?: string | undefined;
        };
        tags?: string[] | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    fsRoot: string;
    navigationLinks: ({
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    } | {
        label: string;
        href: string;
        icon: ValidIconName;
    })[];
    settingPages: {
        href: string;
        pluginName: string;
        title?: string | undefined;
        subtitle?: string | undefined;
    }[];
    componentDocs: {
        tags: string[];
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        paths: {
            short?: string | undefined;
            full?: string | undefined;
        };
    }[];
}, {
    fsRoot: string;
    navigationLinks?: {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    settingPages?: {
        href: string;
        pluginName: string;
        title?: string | undefined;
        subtitle?: string | undefined;
    }[] | undefined;
    componentDocs?: {
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        paths: {
            short?: string | undefined;
            full?: string | undefined;
        };
        tags?: string[] | undefined;
    }[] | undefined;
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
        autoTag: never[];
        autoTopic: never[];
        autoSubject: never[];
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
        autoTag: never[];
        autoTopic: never[];
        autoSubject: never[];
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
    fsRoot: string;
    navigationLinks: ({
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general";
        icon?: string | undefined;
        pluginName?: string | undefined;
    } | {
        label: string;
        href: string;
        icon: ValidIconName;
    })[];
    settingPages: {
        href: string;
        pluginName: string;
        title?: string | undefined;
        subtitle?: string | undefined;
    }[];
    componentDocs: {
        tags: string[];
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        paths: {
            short?: string | undefined;
            full?: string | undefined;
        };
    }[];
}, {
    fsRoot: string;
    navigationLinks?: {
        href: string;
        label: string;
        icon?: string | undefined;
        pluginName?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "general" | undefined;
    }[] | undefined;
    settingPages?: {
        href: string;
        pluginName: string;
        title?: string | undefined;
        subtitle?: string | undefined;
    }[] | undefined;
    componentDocs?: {
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        paths: {
            short?: string | undefined;
            full?: string | undefined;
        };
        tags?: string[] | undefined;
    }[] | undefined;
}>;
//# sourceMappingURL=main.d.ts.map