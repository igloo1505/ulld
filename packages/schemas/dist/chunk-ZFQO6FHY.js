import {
  BibEntryListRelationFilterSchema,
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/BibWhereUniqueInputSchema.ts
import { z } from "zod";
var BibWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => BibWhereInputSchema), z.lazy(() => BibWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => BibWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BibWhereInputSchema), z.lazy(() => BibWhereInputSchema).array()]).optional(),
  filename: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  firstSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  entries: z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict());
var BibWhereUniqueInputSchema_default = BibWhereUniqueInputSchema;

export {
  BibWhereUniqueInputSchema,
  BibWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-ZFQO6FHY.js.map