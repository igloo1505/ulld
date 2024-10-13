import {
  WhiteboardOrderByRelevanceFieldEnumSchema
} from "./chunk-AV2IXUHX.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WhiteboardOrderByRelevanceInputSchema.ts
import { z } from "zod";
var WhiteboardOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => WhiteboardOrderByRelevanceFieldEnumSchema), z.lazy(() => WhiteboardOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var WhiteboardOrderByRelevanceInputSchema_default = WhiteboardOrderByRelevanceInputSchema;

export {
  WhiteboardOrderByRelevanceInputSchema,
  WhiteboardOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-SODJMCXW.js.map