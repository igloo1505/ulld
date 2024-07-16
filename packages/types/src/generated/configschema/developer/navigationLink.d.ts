import { z } from 'zod';
export declare const navigationLinkSchema: z.ZodObject<{
    label: z.ZodString;
    href: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    pluginName: z.ZodOptional<z.ZodString>;
    category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
}, "strip", z.ZodTypeAny, {
    href: string;
    label: string;
    category: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general";
    icon?: string | undefined;
    pluginName?: string | undefined;
}, {
    href: string;
    label: string;
    icon?: string | undefined;
    pluginName?: string | undefined;
    category?: "code" | "math" | "calendar" | "database" | "school" | "search" | "snippets" | "research" | "AI" | "ML" | "writing" | "notebooks" | "work" | "organization" | "task-management" | "academic" | "project-planning" | "general" | undefined;
}>;
//# sourceMappingURL=navigationLink.d.ts.map