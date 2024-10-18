import { z } from 'zod';
export declare const navigationLinkSchema: z.ZodObject<{
    label: z.ZodString;
    href: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    pluginName: z.ZodOptional<z.ZodString>;
    category: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    href: string;
    category: "code" | "math" | "snippets" | "AI" | "ML" | "writing" | "search" | "notebooks" | "database" | "work" | "school" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "calendar" | "general";
    icon?: string | undefined;
    pluginName?: string | undefined;
}, {
    label: string;
    href: string;
    icon?: string | undefined;
    pluginName?: string | undefined;
    category?: "code" | "math" | "snippets" | "AI" | "ML" | "writing" | "search" | "notebooks" | "database" | "work" | "school" | "organization" | "task-management" | "academic" | "research" | "project-planning" | "calendar" | "general" | undefined;
}>;
//# sourceMappingURL=navigationLink.d.ts.map