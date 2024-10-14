import {
  DefinitionUncheckedUpdateWithoutMdxNoteInputSchema
} from "./chunk-OU42MM75.js";
import {
  DefinitionUpdateWithoutMdxNoteInputSchema
} from "./chunk-O3APKUG7.js";
import {
  DefinitionCreateWithoutMdxNoteInputSchema
} from "./chunk-D6VBWLLC.js";
import {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema
} from "./chunk-YF5QNY5O.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";

// src/database/inputTypeSchemas/DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  update: z.union([z.lazy(() => DefinitionUpdateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedUpdateWithoutMdxNoteInputSchema)]),
  create: z.union([z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema;

export {
  DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema,
  DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-AM6UFOIV.js.map