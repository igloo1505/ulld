import {
  DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema
} from "./chunk-45JQWRKA.js";
import {
  DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema
} from "./chunk-FB7EBXS4.js";
import {
  DefinitionScalarWhereInputSchema
} from "./chunk-DEVF2DKA.js";
import {
  DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema
} from "./chunk-AM6UFOIV.js";
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
//# sourceMappingURL=chunk-4OCRM766.js.map