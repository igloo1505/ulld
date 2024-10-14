import {
  MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema
} from "./chunk-4IGC6XJW.js";
import {
  MdxNoteUpdateWithoutDefinitionsInputSchema
} from "./chunk-EDGL47HD.js";
import {
  MdxNoteCreateWithoutDefinitionsInputSchema
} from "./chunk-EEHOLB2N.js";
import {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema
} from "./chunk-73QSFQVY.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-5BTT6YVG.js.map