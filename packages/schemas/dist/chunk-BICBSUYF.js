import {
  DefinitionUncheckedUpdateWithoutMdxNoteInputSchema
} from "./chunk-Q7JKDXHM.js";
import {
  DefinitionUpdateWithoutMdxNoteInputSchema
} from "./chunk-BSNY5SNE.js";
import {
  DefinitionCreateWithoutMdxNoteInputSchema
} from "./chunk-YRASMMTA.js";
import {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema
} from "./chunk-D6ES23QT.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

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
//# sourceMappingURL=chunk-BICBSUYF.js.map