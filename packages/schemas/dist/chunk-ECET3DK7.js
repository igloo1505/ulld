import {
  MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema
} from "./chunk-2Q4HH4ON.js";
import {
  MdxNoteUpdateWithoutDefinitionsInputSchema
} from "./chunk-BLVEMMPD.js";
import {
  MdxNoteCreateWithoutDefinitionsInputSchema
} from "./chunk-R3KSBQ6N.js";
import {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema
} from "./chunk-LKLFYJKV.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/MdxNoteUpsertWithoutDefinitionsInputSchema.ts
import { z } from "zod";
var MdxNoteUpsertWithoutDefinitionsInputSchema = z.object({
  update: z.union([z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]),
  create: z.union([z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]),
  where: z.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();
var MdxNoteUpsertWithoutDefinitionsInputSchema_default = MdxNoteUpsertWithoutDefinitionsInputSchema;

export {
  MdxNoteUpsertWithoutDefinitionsInputSchema,
  MdxNoteUpsertWithoutDefinitionsInputSchema_default
};
//# sourceMappingURL=chunk-ECET3DK7.js.map