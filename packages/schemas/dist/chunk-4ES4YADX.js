import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/NoteTypeWhereInputSchema.ts
import { z } from "zod";
var NoteTypeWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => NoteTypeWhereInputSchema), z.lazy(() => NoteTypeWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => NoteTypeWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteTypeWhereInputSchema), z.lazy(() => NoteTypeWhereInputSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
}).strict();
var NoteTypeWhereInputSchema_default = NoteTypeWhereInputSchema;

export {
  NoteTypeWhereInputSchema,
  NoteTypeWhereInputSchema_default
};
//# sourceMappingURL=chunk-4ES4YADX.js.map