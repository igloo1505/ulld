import {
  ToDoCreateManyParentInputSchema
} from "./chunk-4LFM32TE.js";

// src/database/inputTypeSchemas/ToDoCreateManyParentInputEnvelopeSchema.ts
import { z } from "zod";
var ToDoCreateManyParentInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => ToDoCreateManyParentInputSchema), z.lazy(() => ToDoCreateManyParentInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ToDoCreateManyParentInputEnvelopeSchema_default = ToDoCreateManyParentInputEnvelopeSchema;

export {
  ToDoCreateManyParentInputEnvelopeSchema,
  ToDoCreateManyParentInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-VZLELKEM.js.map