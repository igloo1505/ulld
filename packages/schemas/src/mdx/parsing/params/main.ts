import { z } from "zod";
import { documentTypeConfigSchema } from "@ulld/configschema/zod/documentConfigSchema";
import {
    extendedFrontMatterSchema,
    frontMatterTypeSchema,
} from "../../frontMatter/main";
import { mdxNotePropsSchema } from "@ulld/api/generalPrismaSchemas";


const appConfigHackSchema = z.record(z.string(), z.any()).describe("Hack to avoid typing issue with the modified AppConfigSchemaOutput type not matching the input schema. Must apply type manually.")

export const mdxNoteFromStringPropsSchema = mdxNotePropsSchema
    .innerType()
    .pick({
        raw: true,
        rootRelativePath: true,
        bookmarked: true,
    })
    .merge(
        z.object({
            docTypeData: documentTypeConfigSchema,
        }),
    );

export const mdxNoteIntriguingValSummaryPropsSchema = mdxNotePropsSchema
    .innerType()
    .omit({
        latexTitle: true,
        raw: true,
        floatImages: true,
        formatted: true,
        citations: true,
        quickLinkId: true,
        citationsListOrder: true,
        outgoingQuickLinks: true,
        equationIds: true,
        isProtected: true,
        sequentialKey: true,
        sequentialIndex: true,
        remoteUrl: true,
        noLog: true,
        saveFormatted: true,
        trackRemote: true,
        topics: true,
        tags: true,
        subjects: true,
    });


// export const noteDetailsReturn = MdxNoteSchema.pick({
//     bookmarked: true,
//     quickLink: true,
//     id: true,
//     sequentialKey: true,
//     sequentialIndex: true,
//     firstSync: true,
//     lastSync: true,
// });


const noteDetailsReturn = z.object({
    id: z.number().int(),
    quickLink: z.string().nullish(),
    bookmarked: z.boolean(),
    sequentialKey: z.string().nullish(),
    sequentialIndex: z.number().nullish(),
    firstSync: z.date().or(z.string()),
    lastSync: z.date().or(z.string()),
})

export const unifiedMdxParserParamSchema = z.object({
    content: z.string(),
    docTypeData: z.union([documentTypeConfigSchema.innerType().required({
        docType: true,
        id: true,
        url: true
    }), z.object({})]).default({}),
    data: frontMatterTypeSchema.partial(),
    appConfig: appConfigHackSchema,
    serverClient: z.any(),
    db: noteDetailsReturn.optional(),
});

export const fromMdxStringOptSchema = z
    .object({
        noteTypeId: z.string().optional(),
    })
    .default({});

export const parseParamsSchema = z.object({
        appConfig: appConfigHackSchema,
        docTypeData: z.union([documentTypeConfigSchema, z.object({})]).default({}),
        parser: z
            .function()
            .args(unifiedMdxParserParamSchema)
            .returns(z.promise(extendedFrontMatterSchema)),
})

export const internalMdxStringParseParamSchema = z.object({
    _opts: fromMdxStringOptSchema,
    props: mdxNoteFromStringPropsSchema,
    parseParams: parseParamsSchema,
});


export const internalMdxStringParseParamSchemaOptionalAppConfig = internalMdxStringParseParamSchema.omit({
    parseParams: true
}).extend({
    parseParams: parseParamsSchema.partial({
        appConfig: true
    })
})

export type InternalMdxStringParseParams = z.output<
    typeof internalMdxStringParseParamSchema
>;

export type InternalMdxStringParseParamsInput = z.input<
    typeof internalMdxStringParseParamSchema
>;
