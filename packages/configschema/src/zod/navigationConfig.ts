import { z } from "zod";
import {
    ValidIconName,
} from "@ulld/icons/dynamic";
import { DocumentTypeConfig } from "./documentConfigSchema.js";
import { allIconNames } from "@ulld/icons/names"

// PRIORITY: Parsing the user's app config needs to write the document types to the file first, and then reparse everything else afterwards so they are accessible. It's not ideal, but it can be reworked once the entire build process is in place.
//
type V = {
    icon: ValidIconName;
    Icon?: never;
};

type F = {
    Icon: React.FC<{ className: string }>;
    icon?: never;
};

type B = {
    href?: string;
    onClick?: () => void;
    label?: string;
};

export type SidebarLink = (B & V) | (B & F);

const defaultResultLengths = {
    categories: 12,
    equations: 10,
    snippets: 10,
    searchAll: 12,
};

export const iconNameField = z.enum(allIconNames)

let docTypeList: DocumentTypeConfig[] | null = null;

let linkLocationSchema = z.union([
    z.literal("sidebar"),
    z.literal("navbar"),
    z.literal("both"),
    z.literal("none"),
])

export const navigationConfigSchema = z
    .object({
        navbarBreakpoint: z
            .object({
                full: z
                    .number()
                    .default(1024)
                    .describe(
                        "Pixel width at which the navbar will display all of it's contents.",
                    ),
                minimal: z
                    .number()
                    .default(640)
                    .describe(
                        "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar.",
                    ),
            })
            .default({
                full: 1024,
                minimal: 640,
            }),
        maxResultLength: z
            .object({
                categories: z.number().default(defaultResultLengths.categories),
                equations: z.number().default(defaultResultLengths.equations),
                snippets: z.number().default(defaultResultLengths.snippets),
                searchAll: z.number().default(defaultResultLengths.searchAll),
            })
            .describe(
                "The default length of search results to be retrieved for each search result type. Default values will likely work well for the default layout, but as more layouts become available this setting may be adjusted to fit different search result layouts.",
            )
            .default(defaultResultLengths),
        bookmarkLink: linkLocationSchema.optional().default("navbar"),
        syncLink: linkLocationSchema.optional().default("sidebar"),
        fileSystemToggle: linkLocationSchema.optional(),
        darkmodeToggle: linkLocationSchema.optional().default("sidebar"),
        settings: linkLocationSchema.optional(),
        equationsLink: linkLocationSchema.optional(),
        snippetsLink: linkLocationSchema.optional().default("sidebar"),
        backupData: linkLocationSchema.optional(),
        navbarLinks: z
            .union([
                z.string().describe("A document type id"),
                z.object({
                    label: z.string(),
                    icon: iconNameField.optional(),
                    href: z.string().optional(),
                    onClick: z.function().optional(),
                }),
            ])
            .array()
            .default([])
            .describe(
                "Either the document type id or the internalLink id to be to included in the navbar.",
            ),
        // RESUME: Come back and figure out this TS error.
        sidebarLinks: z
            .union([
                z.object({
                    icon: iconNameField,
                    href: z.string().optional(),
                    label: z.string().optional(),
                    Icon: z.function().optional(),
                    onClick: z.function().optional(),
                }),
                z.string().describe("The id of the document type."),
            ])
            .array()
            .default([])
            .describe(
                "Either the document type id or the internalLink id to be to included in the navbar.",
            )
    })
    .default({});


export type InternalNavigationKeys = keyof Pick<z.output<typeof navigationConfigSchema>, "bookmarkLink" | "syncLink" | "fileSystemToggle" | "darkmodeToggle" | "settings" | "equationsLink" | "snippetsLink" | "backupData">
