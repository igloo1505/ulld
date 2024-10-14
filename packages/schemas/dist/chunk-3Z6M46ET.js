import {
  StringWithAggregatesFilterSchema
} from "./chunk-3OYDE7JL.js";

// src/database/inputTypeSchemas/SequentialNoteListScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var SequentialNoteListScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema), z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema), z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  sequentialKey: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
}).strict();
var SequentialNoteListScalarWhereWithAggregatesInputSchema_default = SequentialNoteListScalarWhereWithAggregatesInputSchema;

export {
  SequentialNoteListScalarWhereWithAggregatesInputSchema,
  SequentialNoteListScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-3Z6M46ET.js.map