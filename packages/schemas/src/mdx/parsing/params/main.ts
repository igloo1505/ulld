// import type { UnifiedMdxParser } from "@ulld/api/types";
import type { AppConfigSchemaDeepPartial } from "@ulld/configschema/types";
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import {
  documentTypeConfigSchemaOutputSchema,
} from "@ulld/configschema/zod/documentConfigSchema";
import { type AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import type { WithRequired } from "@ulld/utilities/types";
import { z, type ZodTypeAny } from "zod";
import { mdxNotePropsSchema } from "../../../api/prismaMdxRelations/mdxNote/classProps.js";
import {
  extendedFrontMatterSchema,
} from "../../frontMatter/main.js";
import { unifiedMdxParserParamSchema } from "./unifiedMdxParserParams.js";

export const mdxNoteFromStringPropsSchema = mdxNotePropsSchema
  .pick({
    raw: true,
    rootRelativePath: true,
    bookmarked: true,
  })
  .merge(
    z.object({
      docTypeData: documentTypeConfigSchemaOutputSchema,
    }),
  );


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
  docTypeData: z.union([documentTypeConfigSchemaOutputSchema, z.object({})]).default({}),
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
