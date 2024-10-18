import { z } from "zod";
import { ValidIconName } from "@ulld/icons/dynamic";
import { ValidIconNameEnumDynamicallyGenerated } from "@ulld/utilities/validIconNameEnum";
type V = {
    icon: ValidIconName;
    Icon?: never;
};
type F = {
    Icon: React.FC<{
        className: string;
    }>;
    icon?: never;
};
type B = {
    href?: string;
    onClick?: () => void;
    label?: string;
};
export type SidebarLink = (B & V) | (B & F);
export declare const iconNameField: z.ZodNativeEnum<typeof ValidIconNameEnumDynamicallyGenerated>;
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
    bookmarkLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
    syncLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
    fileSystemToggle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
    darkmodeToggle: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
    settings: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
    equationsLink: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
    snippetsLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
    backupData: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
    navbarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        label: z.ZodString;
        icon: z.ZodOptional<z.ZodNativeEnum<typeof ValidIconNameEnumDynamicallyGenerated>>;
        href: z.ZodOptional<z.ZodString>;
        onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href?: string | undefined;
        icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    }, {
        label: string;
        href?: string | undefined;
        icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    }>]>, "many">>;
    sidebarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        icon: z.ZodNativeEnum<typeof ValidIconNameEnumDynamicallyGenerated>;
        href: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        Icon: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        icon: ValidIconNameEnumDynamicallyGenerated;
        label?: string | undefined;
        href?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
    }, {
        icon: ValidIconNameEnumDynamicallyGenerated;
        label?: string | undefined;
        href?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
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
    bookmarkLink: "none" | "sidebar" | "navbar" | "both";
    syncLink: "none" | "sidebar" | "navbar" | "both";
    darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
    snippetsLink: "none" | "sidebar" | "navbar" | "both";
    navbarLinks: (string | {
        label: string;
        href?: string | undefined;
        icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    })[];
    sidebarLinks: (string | {
        icon: ValidIconNameEnumDynamicallyGenerated;
        label?: string | undefined;
        href?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
    })[];
    settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
    fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
    equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
    backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
}, {
    settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
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
    bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
    syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
    fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
    darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
    equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
    snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
    backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    navbarLinks?: (string | {
        label: string;
        href?: string | undefined;
        icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
    })[] | undefined;
    sidebarLinks?: (string | {
        icon: ValidIconNameEnumDynamicallyGenerated;
        label?: string | undefined;
        href?: string | undefined;
        onClick?: ((...args: unknown[]) => unknown) | undefined;
        Icon?: ((...args: unknown[]) => unknown) | undefined;
    })[] | undefined;
}>>;
export type InternalNavigationKeys = keyof Pick<z.output<typeof navigationConfigSchema>, "bookmarkLink" | "syncLink" | "fileSystemToggle" | "darkmodeToggle" | "settings" | "equationsLink" | "snippetsLink" | "backupData">;
export {};
//# sourceMappingURL=navigationConfig.d.ts.map