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
//# sourceMappingURL=chunk-MYUKZL2T.js.map