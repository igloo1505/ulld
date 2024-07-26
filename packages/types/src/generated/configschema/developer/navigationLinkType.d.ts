import { AllDynamicIconNames } from "@ulld/icons";
import { z } from 'zod';
export declare const navigationLinkCategory: z.ZodUnion<[z.ZodLiteral<"math">, z.ZodLiteral<"snippets">, z.ZodLiteral<"code">, z.ZodLiteral<"AI">, z.ZodLiteral<"ML">, z.ZodLiteral<"writing">, z.ZodLiteral<"search">, z.ZodLiteral<"notebooks">, z.ZodLiteral<"database">, z.ZodLiteral<"work">, z.ZodLiteral<"school">, z.ZodLiteral<"organization">, z.ZodLiteral<"task-management">, z.ZodLiteral<"academic">, z.ZodLiteral<"research">, z.ZodLiteral<"project-planning">, z.ZodLiteral<"calendar">, z.ZodLiteral<"general">]>;
export type NavigationLinkCategory = z.input<typeof navigationLinkCategory>;
export type NavigationLinkType = {
    label: string;
    href: string;
    icon?: AllDynamicIconNames;
    category?: NavigationLinkCategory;
};
//# sourceMappingURL=navigationLinkType.d.ts.map