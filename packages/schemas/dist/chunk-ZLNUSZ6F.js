import {
  MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-K6FPACRO.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

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
//# sourceMappingURL=chunk-ZLNUSZ6F.js.map