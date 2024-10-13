import {
  DefinitionCreateWithoutMdxNoteInputSchema
} from "./chunk-YRASMMTA.js";
import {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema
} from "./chunk-D6ES23QT.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

// src/database/inputTypeSchemas/DefinitionCreateOrConnectWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionCreateOrConnectWithoutMdxNoteInputSchema = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  create: z.union([z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default = DefinitionCreateOrConnectWithoutMdxNoteInputSchema;

export {
  DefinitionCreateOrConnectWithoutMdxNoteInputSchema,
  DefinitionCreateOrConnectWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-JAEMWNIF.js.map