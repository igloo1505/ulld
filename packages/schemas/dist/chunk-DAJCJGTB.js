import {
  DefinitionCreateOrConnectWithoutMdxNoteInputSchema
} from "./chunk-DLKC4WBS.js";
import {
  DefinitionCreateManyMdxNoteInputEnvelopeSchema
} from "./chunk-NI7GTVHO.js";
import {
  DefinitionCreateWithoutMdxNoteInputSchema
} from "./chunk-D6VBWLLC.js";
import {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema
} from "./chunk-YF5QNY5O.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";

// src/database/inputTypeSchemas/DefinitionCreateNestedManyWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionCreateNestedManyWithoutMdxNoteInputSchema = z.object({
  create: z.union([z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema).array(), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema), z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: z.lazy(() => DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => DefinitionWhereUniqueInputSchema), z.lazy(() => DefinitionWhereUniqueInputSchema).array()]).optional()
}).strict();
var DefinitionCreateNestedManyWithoutMdxNoteInputSchema_default = DefinitionCreateNestedManyWithoutMdxNoteInputSchema;

export {
  DefinitionCreateNestedManyWithoutMdxNoteInputSchema,
  DefinitionCreateNestedManyWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-DAJCJGTB.js.map