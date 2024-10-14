import {
  MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema
} from "./chunk-4XPCGLVV.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default
};
//# sourceMappingURL=chunk-ZIGRAEDX.js.map