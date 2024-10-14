import {
  MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema
} from "./chunk-OGHWTLNH.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema,
  MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default
};
//# sourceMappingURL=chunk-RXNQCSHE.js.map