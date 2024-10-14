import {
  MdxNoteUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-L77UVDM5.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutToDoInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutToDoInputSchema,
  MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default
};
//# sourceMappingURL=chunk-RL2W3RD7.js.map