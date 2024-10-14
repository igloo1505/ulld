import {
  MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-HSILJZYJ.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-QMRNOYDH.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-6E2GUZTH.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-GQ63ENE5.js.map