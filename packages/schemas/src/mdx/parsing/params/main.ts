import { mdxNotePropsSchema } from "../../../api/prismaMdxRelations/mdxNote/classProps.js";
// import type { UnifiedMdxParser } from "@ulld/api/types";
import type { AppConfigSchemaDeepPartial } from "@ulld/configschema/types";
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import {
  documentTypeConfigSchema,
  documentTypeConfigSchemaInner,
} from "@ulld/configschema/zod/documentConfigSchema";
import { appConfigSchema, type AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import type { WithRequired } from "@ulld/utilities/types";
import { z, type ZodTypeAny } from "zod";
import {
  extendedFrontMatterSchema,
  frontMatterSchema,
} from "../../frontMatter/main.js";

export const mdxNoteFromStringPropsSchema = mdxNotePropsSchema
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

const noteDetailsReturn = z.object({
  id: z.number().int(),
  quickLink: z.string().nullish(),
  bookmarked: z.boolean(),
  sequentialKey: z.string().nullish(),
  sequentialIndex: z.number().nullish(),
  firstSync: z.date().or(z.string()),
  lastSync: z.date().or(z.string()),
});

export const unifiedMdxParserParamSchema = z.object({
  content: z.string(),
  docTypeData: documentTypeConfigSchemaInner.required({
        docType: true,
        id: true,
        url: true,
      }),
  // docTypeData: z
  //   .union([
  //     documentTypeConfigSchemaInner.required({
  //       docType: true,
  //       id: true,
  //       url: true,
  //     }),
  //     z.object({}),
  //   ])
  //   .default({}),
  data: frontMatterSchema.deepPartial(),
  appConfig: appConfigSchema,
  serverClient: z.any(),
  db: noteDetailsReturn.optional(),
});

export const unifiedMdxParserSchema = z
  .function()
  .args(unifiedMdxParserParamSchema)
  .returns(z.promise(extendedFrontMatterSchema));

export const fromMdxStringOptSchema = z
  .object({
    noteTypeId: z.string().optional(),
  })
  .default({});

export const parseParamsSchema = z.object({
  appConfig: minimalParsableAppConfig,
  docTypeData: z.union([documentTypeConfigSchema, z.object({})]).default({}),
  parser: unifiedMdxParserSchema,
});

export const internalMdxStringParseParamSchema = z.object({
  _opts: fromMdxStringOptSchema,
  props: mdxNoteFromStringPropsSchema,
  parseParams: parseParamsSchema,
});

export const internalMdxStringParseParamSchemaOptionalAppConfig =
  internalMdxStringParseParamSchema
    .omit({
      parseParams: true,
    })
    .extend({
      parseParams: parseParamsSchema.partial({
        appConfig: true,
      }),
    });

export type UnifiedMdxParser = z.input<typeof unifiedMdxParserSchema>;

export type InternalMdxStringParseParams = z.output<
  typeof internalMdxStringParseParamSchema
>;

export type InternalMdxStringParseParamsInput = z.input<
  typeof internalMdxStringParseParamSchema
>;

// TODO: Refine this partial app config to actually require the fields that are you know... required.
type WithModifiedAppConfig<
  T extends ZodTypeAny,
  J extends AppConfigSchemaDeepPartial = AppConfigSchemaDeepPartial,
  RequiredFields extends keyof AppConfigSchemaOutput = "fsRoot",
> = Omit<z.input<T>, "appConfig"> & {
  appConfig: WithRequired<J, RequiredFields>;
};

type WithModifiedAppConfigOutput<
  T extends ZodTypeAny,
  J extends AppConfigSchemaDeepPartial = AppConfigSchemaDeepPartial,
> = Omit<z.output<T>, "appConfig"> & {
  appConfig: J;
};

export type UnifiedMdxParserParamsInput = WithModifiedAppConfig<
  typeof unifiedMdxParserParamSchema
>;

export type ParseParamsSchemaInput = z.input<typeof parseParamsSchema>;
// export type ParseParamsSchemaInput = Omit<
//     WithModifiedAppConfig<
//         typeof parseParamsSchema,
//         AppConfigSchemaDeepPartial,
//         "fsRoot" | "noteTypes"
//     >,
//     "parser"
// > & {
//     parser: UnifiedMdxParser;
// };

// TODO: Remove all these unnecessary modifications to the appconfig
export type ParseParamsSchemaOutput = Omit<
  WithModifiedAppConfigOutput<typeof parseParamsSchema>,
  "parser"
> & {
  parser: UnifiedMdxParser;
};

export type ParseParamsSchemaType = z.input<typeof parseParamsSchema>;

// TODO: Moving this to configschema package.
export type MinimalParsableAppConfig = z.input<typeof minimalParsableAppConfig>;
export type MinimalParsableAppConfigOutput = z.output<
  typeof minimalParsableAppConfig
>;
