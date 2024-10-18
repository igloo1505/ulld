import {
  frontMatterSchema
} from "./chunk-IYN4PQHD.js";

// src/mdx/parsing/params/unifiedMdxParserParams.ts
import { documentTypeConfigSchemaInner } from "@ulld/configschema/zod/documentConfigSchema";
import { z } from "zod";
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
var noteDetailsReturn = z.object({
  id: z.number().int(),
  quickLink: z.string().nullish(),
  bookmarked: z.boolean(),
  sequentialKey: z.string().nullish(),
  sequentialIndex: z.number().nullish(),
  firstSync: z.date().or(z.string()),
  lastSync: z.date().or(z.string())
});
var unifiedMdxParserParamSchema = z.object({
  content: z.string(),
  docTypeData: documentTypeConfigSchemaInner,
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
  appConfig: minimalParsableAppConfig,
  serverClient: z.any(),
  db: noteDetailsReturn.optional()
});

export {
  noteDetailsReturn,
  unifiedMdxParserParamSchema
};
//# sourceMappingURL=chunk-QQOK4C6A.js.map