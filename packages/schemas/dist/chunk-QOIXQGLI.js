import {
  DefinitionCreateOrConnectWithoutMdxNoteInputSchema
} from "./chunk-JAEMWNIF.js";
import {
  DefinitionCreateManyMdxNoteInputEnvelopeSchema
} from "./chunk-2FXHLRA4.js";
import {
  DefinitionCreateWithoutMdxNoteInputSchema
} from "./chunk-YRASMMTA.js";
import {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema
} from "./chunk-D6ES23QT.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

// src/database/inputTypeSchemas/DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema = z.object({
  create: z.union([z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema).array(), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema), z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: z.lazy(() => DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => DefinitionWhereUniqueInputSchema), z.lazy(() => DefinitionWhereUniqueInputSchema).array()]).optional()
}).strict();
var DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema;

export {
  DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema,
  DefinitionUncheckedCreateNestedManyWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-QOIXQGLI.js.map