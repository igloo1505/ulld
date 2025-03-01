import { z } from "zod";
import { zodWithForwardSlashTransform } from "./configUtilitySchemas.js";
import { withForwardSlash } from "@ulld/utilities/utils/fsUtils";
import {
    makeValidId,
    makeValidIdOnlyLetters,
} from "@ulld/utilities/utils/identity";
import { iconNameField } from "./navigationConfig.js";
import { ValidIconNameEnumDynamicallyGenerated } from "@ulld/types/validIconNameEnum";
import { ValidIconName } from "@ulld/types";
import { ZodOutputSchema } from "../types.js";

const parsableSearchParam = z.union([
    z.string(),
    z.string().array(),
    z.number(),
    z.number().array(),
]);

const docTypeColorGroup = z.object({
    bg: z
        .string()
        .optional()
        .describe(
            "Css classes to be appended to UI specific to this doc type. Tailwind classes will work.",
        ),
    fg: z
        .string()
        .optional()
        .describe(
            "Css classes to be appended to UI specific to this doc type. Tailwind classes will work.",
        ),
});

const docTypeStylesField = z.object({
    dark: docTypeColorGroup.default({}),
    light: docTypeColorGroup.default({}),
    // combined_classes: z
    //     .string()
    //     .optional()
    //     .describe(
    //         "Css classes to be applied to elements related to this specific document type.",
    //     ),
});

const docTypeStylesFieldOutput: ZodOutputSchema<typeof docTypeStylesField> =
    z.object({
        dark: docTypeColorGroup,
        light: docTypeColorGroup,
    });

const _docTypeUISchemaInner = z.object({
    styles: docTypeStylesField.default({}),
    // .transform((a) => {
    //     return {
    //         dark: a.dark,
    //         light: a.light,
    //         // combined_classes:
    //         //     a.combined_classes ||
    //         //     `${a.dark.bg || ""} ${a.dark.fg || ""} ${a.light.bg || ""} ${a.light.fg || ""}`,
    //     };
    // }),
});

export const docTypeUISchema = _docTypeUISchemaInner.default({});

export const docTypeUISchemaOutput: ZodOutputSchema<typeof docTypeUISchema> =
    _docTypeUISchemaInner.merge(
        z.object({
            styles: docTypeStylesFieldOutput,
        }),
    );

export const zodDocTypeInput = z.string().transform(makeValidIdOnlyLetters);

const urlQueryField = z.record(z.string(), parsableSearchParam);

const matchWeightField = z.number().min(0).max(100);

export const documentTypeConfigSchemaBase = z.object({
    id: z
        .string()
        .optional()
        .describe("A unique key to be used internally to deal with this doctype."),
    docType: zodDocTypeInput
        .optional()
        .describe(
            "A unique key which describes the nature of this document type: 'MathNote', 'Journal', 'References', etc...",
        ),
    filePathPattern: z
        .string()
        .optional()
        .describe(
            "A glob style string to test a file path for this note type. Should return true if a given file is of this note type.",
        ),
    matchWeight: matchWeightField
        .default(50)
        .describe(
            "An extra weight between 0 and 100 to apply to matches. This can be very important when the location of one document type exists as a child of another, in which case an increased weight should be applied to the child document type. Default: 50",
        ),
    // contentType: documentConfigContentTypeSchema.default("mdx")
    fs: z
        .string()
        .describe(
            "The path to the root of the directory which holds this document type. This path must be both relative to the appConfig.fsRoot folder and a child of it. For example, a root directory at '/Users/steve/Desktop/notes' might have folders within it of /Users/steve/Desktop/notes/math and /Users/steve/Desktop/notes/physics. These appConfig.noteTypes[0].fs should be '/math' and the latter should be '/physics'.",
        )
        .transform(withForwardSlash),
    url: z
        .string()
        .describe("The url at which this note should be displayed.")
        .transform(zodWithForwardSlashTransform),
    urlQuery: urlQueryField
        .optional()
        .describe(
            "Url search paramters to be appended to generated buttons and links for this doc type in some cases. Useful for things like populating an initial list or opening with certain default override-able settings.",
        )
        .default({}),
    keywords: z
        .string()
        .array()
        .default([])
        .describe(
            "Keywords to help with search results and command sorting related to this document type.",
        ),
    label: z
        .string()
        .describe(
            "The label to be used for this document type where automatically generated links, commands and buttons are referencing it.",
        ),
    topicLabel: z
        .string()
        .optional()
        .describe(
            "Replace references to the 'topic' tag with this label. This is useful for things like managing freelance work, where 'topics' might better be described as 'Jobs' or 'Clients'.",
        ),
    subjectLabel: z
        .string()
        .optional()
        .describe(
            "Replace references to the 'subject' tag with this label. This is useful for things like managing freelance work, where 'subjects' might better be described as 'Jobs' or 'Clients'.",
        ),
    autoTag: z
        .string()
        .array()
        .default([])
        .describe(
            "Automatically append these tags to all notes of this document type. This can also be done interactively through the app's UI after it is built.",
        ),
    autoTopic: z
        .string()
        .array()
        .default([])
        .describe(
            "Automatically append these topics to all notes of this document type. This can also be done interactively through the app's UI after it is built.",
        ),
    autoSubject: z
        .string()
        .array()
        .default([])
        .describe(
            "Automatically append these subjects to all notes of this document type. This can also be done interactively through the app's UI after it is built.",
        ),
    UI: docTypeUISchema.default({}),
    icon: iconNameField.default("ulld" as ValidIconNameEnumDynamicallyGenerated),
    inSidebar: z.boolean().default(false),
    inNavbar: z.boolean().default(false),
});

export const documentTypeConfigSchemaInner =
    documentTypeConfigSchemaBase.partial({
        url: true,
    });

export const documentTypeConfigSchema = documentTypeConfigSchemaInner.transform(
    (a: z.infer<typeof documentTypeConfigSchemaInner>) => {
        const _id = makeValidId(a.id || a.label);
        return {
            ...a,
            docType: _id, // For backward compatibility.
            id: _id,
            url: a.url || `/${_id}`,
        };
    },
);

export const documentTypeConfigSchemaOutputSchema =
    documentTypeConfigSchemaInner.merge(
        z.object({
            id: z.string(),
            docType: z.string(),
            matchWeight: matchWeightField,
            urlQuery: urlQueryField,
            url: z.string(),
            keywords: z.string().array(),
            autoTag: z.string().array(),
            autoTopic: z.string().array(),
            autoSubject: z.string().array(),
            UI: docTypeUISchemaOutput,
            icon: iconNameField,
            inSidebar: z.boolean(),
            inNavbar: z.boolean(),
        }),
    ) satisfies ZodOutputSchema<typeof documentTypeConfigSchema>;

const documentTypeConfigSchemaDeepPartial =
    documentTypeConfigSchemaOutputSchema.deepPartial();

export const documentTypeConfigMinimalOutputSchema =
    documentTypeConfigSchemaInner.deepPartial().merge(
        z.object({
            id: z.string().optional(),
            docType: z.string().optional(),
            matchWeight: matchWeightField.optional(),
            urlQuery: urlQueryField.optional(),
            url: z.string().optional(),
            keywords: z.string().array().optional(),
            autoTag: z.string().array().optional(),
            autoTopic: z.string().array().optional(),
            autoSubject: z.string().array().optional(),
            UI: docTypeUISchemaOutput.optional(),
            icon: iconNameField.optional(),
            inSidebar: z.boolean().optional(),
            inNavbar: z.boolean().optional(),
            fs: z.string(),
        }),
    ) satisfies ZodOutputSchema<typeof documentTypeConfigSchemaDeepPartial>;

export type DocumentTypeConfigAsDocTypeDataField = {
    docTypeData: Omit<z.infer<typeof documentTypeConfigSchema>, "icon"> & {
        icon: ValidIconName;
    };
};

export type DocumentTypeConfig = z.output<typeof documentTypeConfigSchema>;
export type DocumentTypeConfigInput = z.input<typeof documentTypeConfigSchema>;
