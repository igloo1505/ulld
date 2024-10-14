import {
  MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-2LP2CPOU.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-C26DRC4F.js.map