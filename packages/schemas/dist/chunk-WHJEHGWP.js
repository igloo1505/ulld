import {
  MdxNoteCreateWithoutDefinitionsInputSchema
} from "./chunk-EEHOLB2N.js";
import {
  MdxNoteUncheckedCreateWithoutDefinitionsInputSchema
} from "./chunk-73QSFQVY.js";
import {
  MdxNoteWhereUniqueInputSchema
} from "./chunk-F3RQWPPB.js";

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
//# sourceMappingURL=chunk-WHJEHGWP.js.map