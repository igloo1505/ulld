import {
  DefinitionCreateWithoutMdxNoteInputSchema
} from "./chunk-D6VBWLLC.js";
import {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema
} from "./chunk-YF5QNY5O.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";

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
//# sourceMappingURL=chunk-DLKC4WBS.js.map