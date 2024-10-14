import {
  MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-3CUBXKGT.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-45ADTYXM.js.map