import {
  MdxNoteUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-S2DTAOZ2.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutTagsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-SXYES7WB.js.map