import { z } from "zod";
import { ZodOutputSchema } from "../types.js";
export declare const iconNameField: z.ZodEffects<z.ZodString, string, string>;
export declare const navigationConfigSchema: z.ZodDefault<z.ZodObject<{
    navbarBreakpoint: z.ZodDefault<z.ZodObject<{
        full: z.ZodDefault<z.ZodNumber>;
        minimal: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        full: number;
        minimal: number;
    }, {
        full?: number | undefined;
        minimal?: number | undefined;
    }>>;
    maxResultLength: z.ZodDefault<z.ZodObject<{
        categories: z.ZodDefault<z.ZodNumber>;
        equations: z.ZodDefault<z.ZodNumber>;
        snippets: z.ZodDefault<z.ZodNumber>;
        searchAll: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        snippets: number;
        searchAll: number;
        equations: number;
        categories: number;
    }, {
        snippets?: number | undefined;
        searchAll?: number | undefined;
        equations?: number | undefined;
        categories?: number | undefined;
    }>>;
    navbarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        label: z.ZodString;
        icon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        href: z.ZodOptional<z.ZodString>;
        onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href?: string | undefined;
        icon?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    }, {
        label: string;
        href?: string | undefined;
        icon?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    }>]>, "many">>;
    sidebarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        icon: z.ZodEffects<z.ZodString, string, string>;
        href: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        Icon: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        icon: string;
        label?: string | undefined;
        href?: string | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    }, {
        icon: string;
        label?: string | undefined;
        href?: string | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    }>, z.ZodString]>, "many">>;
}, "strip", z.ZodTypeAny, {
    navbarBreakpoint: {
        full: number;
        minimal: number;
    };
    maxResultLength: {
        snippets: number;
        searchAll: number;
        equations: number;
        categories: number;
    };
    navbarLinks: (string | {
        label: string;
        href?: string | undefined;
        icon?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    })[];
    sidebarLinks: (string | {
        icon: string;
        label?: string | undefined;
        href?: string | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    })[];
}, {
    navbarBreakpoint?: {
        full?: number | undefined;
        minimal?: number | undefined;
    } | undefined;
    maxResultLength?: {
        snippets?: number | undefined;
        searchAll?: number | undefined;
        equations?: number | undefined;
        categories?: number | undefined;
    } | undefined;
    navbarLinks?: (string | {
        label: string;
        href?: string | undefined;
        icon?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    })[] | undefined;
    sidebarLinks?: (string | {
        icon: string;
        label?: string | undefined;
        href?: string | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    })[] | undefined;
}>>;
export declare const navigationConfigSchemaOutput: ZodOutputSchema<typeof navigationConfigSchema>;
//# sourceMappingURL=navigationConfig.d.ts.map