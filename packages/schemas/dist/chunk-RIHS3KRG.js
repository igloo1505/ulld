import {
  DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema
} from "./chunk-GEGBDIAD.js";
import {
  DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema
} from "./chunk-K57X35PT.js";
import {
  DefinitionScalarWhereInputSchema
} from "./chunk-XRVSSVO4.js";
import {
  DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema
} from "./chunk-BICBSUYF.js";
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

// src/database/inputTypeSchemas/DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema.ts
import { z } from "zod";
var DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema).array(), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema), z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema).array()]).optional(),
  createMany: z.lazy(() => DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => DefinitionWhereUniqueInputSchema), z.lazy(() => DefinitionWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DefinitionWhereUniqueInputSchema), z.lazy(() => DefinitionWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DefinitionWhereUniqueInputSchema), z.lazy(() => DefinitionWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DefinitionWhereUniqueInputSchema), z.lazy(() => DefinitionWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DefinitionScalarWhereInputSchema), z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional()
}).strict();
var DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema_default = DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema;

export {
  DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema,
  DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema_default
};
//# sourceMappingURL=chunk-RIHS3KRG.js.map