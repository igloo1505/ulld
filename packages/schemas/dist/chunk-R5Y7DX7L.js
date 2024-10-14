import {
  ToDoCreateManyToDoListInputSchema
} from "./chunk-VXVLSA4O.js";

// src/database/inputTypeSchemas/ToDoCreateManyToDoListInputEnvelopeSchema.ts
import { z } from "zod";
var ToDoCreateManyToDoListInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => ToDoCreateManyToDoListInputSchema), z.lazy(() => ToDoCreateManyToDoListInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ToDoCreateManyToDoListInputEnvelopeSchema_default = ToDoCreateManyToDoListInputEnvelopeSchema;

export {
  ToDoCreateManyToDoListInputEnvelopeSchema,
  ToDoCreateManyToDoListInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-R5Y7DX7L.js.map