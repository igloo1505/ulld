import {
  WhiteboardOrderByRelevanceFieldEnumSchema
} from "./chunk-5ET4KGPN.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-XPS76D5U.js.map