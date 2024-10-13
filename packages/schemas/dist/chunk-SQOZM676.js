import {
  EquationOrderByRelevanceFieldEnumSchema
} from "./chunk-RIBM7KZY.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/EquationOrderByRelevanceInputSchema.ts
import { z } from "zod";
var EquationOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => EquationOrderByRelevanceFieldEnumSchema), z.lazy(() => EquationOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var EquationOrderByRelevanceInputSchema_default = EquationOrderByRelevanceInputSchema;

export {
  EquationOrderByRelevanceInputSchema,
  EquationOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-SQOZM676.js.map