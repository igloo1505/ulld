import {
  NoteTypeWhereInputSchema
} from "./chunk-BA7HRTM6.js";

// src/database/inputTypeSchemas/NoteTypeWhereUniqueInputSchema.ts
import { z } from "zod";
var NoteTypeWhereUniqueInputSchema = z.object({
  name: z.string()
}).and(z.object({
  name: z.string().optional(),
  AND: z.union([z.lazy(() => NoteTypeWhereInputSchema), z.lazy(() => NoteTypeWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => NoteTypeWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoteTypeWhereInputSchema), z.lazy(() => NoteTypeWhereInputSchema).array()]).optional()
}).strict());
var NoteTypeWhereUniqueInputSchema_default = NoteTypeWhereUniqueInputSchema;

export {
  NoteTypeWhereUniqueInputSchema,
  NoteTypeWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-TNSB2LM7.js.map