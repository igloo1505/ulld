import {
  MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema
} from "./chunk-UDTPY2LS.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema,
  MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default
};
//# sourceMappingURL=chunk-B5V4EAVA.js.map