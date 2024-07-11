import { z } from "zod";
import { ValidIconName } from "@ulld/icons";
export declare const buildStaticDataSchema: z.ZodObject<{
    fsRoot: z.ZodString;
    navigationLinks: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>, ({
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general";
        icon?: string | undefined;
    } | {
        label: string;
        href: string;
        icon: ValidIconName;
    })[], {
        href: string;
        label: string;
        icon?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general" | undefined;
    }[] | undefined>;
    settingsPage: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
    }, {
        href: string;
        label: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    fsRoot: string;
    navigationLinks: ({
        href: string;
        label: string;
        category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general";
        icon?: string | undefined;
    } | {
        label: string;
        href: string;
        icon: ValidIconName;
    })[];
    settingsPage: {
        href: string;
        label: string;
    }[];
}, {
    fsRoot: string;
    navigationLinks?: {
        href: string;
        label: string;
        icon?: string | undefined;
        category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general" | undefined;
    }[] | undefined;
    settingsPage?: {
        href: string;
        label: string;
    }[] | undefined;
}>;
//# sourceMappingURL=main.d.ts.map