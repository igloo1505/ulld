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

// src/database/inputTypeSchemas/MdxNoteCreateNestedOneWithoutDefinitionsInputSchema.ts
import { z } from "zod";
var MdxNoteCreateNestedOneWithoutDefinitionsInputSchema = z.object({
  create: z.union([z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  connect: z.lazy(() => MdxNoteWhereUniqueInputSchema).optional()
}).strict();
var MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default = MdxNoteCreateNestedOneWithoutDefinitionsInputSchema;

export {
  MdxNoteCreateNestedOneWithoutDefinitionsInputSchema,
  MdxNoteCreateNestedOneWithoutDefinitionsInputSchema_default
};
//# sourceMappingURL=chunk-LBUPN5DJ.js.map