import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/NoteTypeScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var NoteTypeScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
}).strict();
var NoteTypeScalarWhereWithAggregatesInputSchema_default = NoteTypeScalarWhereWithAggregatesInputSchema;

export {
  NoteTypeScalarWhereWithAggregatesInputSchema,
  NoteTypeScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-DW64MN52.js.map