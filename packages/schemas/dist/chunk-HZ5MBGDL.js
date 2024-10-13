import {
  MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema
} from "./chunk-6QN57N3U.js";
import {
  MdxNoteUpsertWithoutDefinitionsInputSchema
} from "./chunk-ECET3DK7.js";
import {
  MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema
} from "./chunk-2Q4HH4ON.js";
import {
  MdxNoteUpdateWithoutDefinitionsInputSchema
} from "./chunk-BLVEMMPD.js";
import {
  MdxNoteCreateOrConnectWithoutDefinitionsInputSchema
} from "./chunk-XFUKWSU6.js";
import {
  MdxNoteCreateWithoutDefinitionsInputSchema
} from "./chunk-R3KSBQ6N.js";
import {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema
} from "./chunk-LKLFYJKV.js";
import {
  MdxNoteWhereUniqueInputSchema
} from "./chunk-DG2EOAUQ.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-HZ5MBGDL.js.map