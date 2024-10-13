import {
  MdxNoteCreateWithoutDefinitionsInputSchema
} from "./chunk-R3KSBQ6N.js";
import {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema
} from "./chunk-LKLFYJKV.js";
import {
  MdxNoteWhereUniqueInputSchema
} from "./chunk-DG2EOAUQ.js";

// src/database/inputTypeSchemas/MdxNoteCreateOrConnectWithoutDefinitionsInputSchema.ts
import { z } from "zod";
var MdxNoteCreateOrConnectWithoutDefinitionsInputSchema = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)])
}).strict();
var MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default = MdxNoteCreateOrConnectWithoutDefinitionsInputSchema;

export {
  MdxNoteCreateOrConnectWithoutDefinitionsInputSchema,
  MdxNoteCreateOrConnectWithoutDefinitionsInputSchema_default
};
//# sourceMappingURL=chunk-XFUKWSU6.js.map