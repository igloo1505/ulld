import {
  MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema
} from "./chunk-CWQDODOX.js";
import {
  MdxNoteUpsertWithoutDefinitionsInputSchema
} from "./chunk-5BTT6YVG.js";
import {
  MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema
} from "./chunk-4IGC6XJW.js";
import {
  MdxNoteUpdateWithoutDefinitionsInputSchema
} from "./chunk-EDGL47HD.js";
import {
  MdxNoteCreateOrConnectWithoutDefinitionsInputSchema
} from "./chunk-WHJEHGWP.js";
import {
  MdxNoteCreateWithoutDefinitionsInputSchema
} from "./chunk-EEHOLB2N.js";
import {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema
} from "./chunk-73QSFQVY.js";
import {
  MdxNoteWhereUniqueInputSchema
} from "./chunk-F3RQWPPB.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  upsert: z.lazy(() => MdxNoteUpsertWithoutDefinitionsInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MdxNoteWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MdxNoteWhereInputSchema)]).optional(),
  connect: z.lazy(() => MdxNoteWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]).optional()
}).strict();
var MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default = MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema;

export {
  MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema,
  MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema_default
};
//# sourceMappingURL=chunk-IW75AXYC.js.map