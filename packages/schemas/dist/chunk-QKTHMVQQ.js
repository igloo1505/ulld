import {
  EquationUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-R6RA5NI2.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-34ND25JL.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-XCBYVXYO.js";

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var EquationUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default = EquationUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  EquationUpdateManyWithWhereWithoutMdxNotesInputSchema,
  EquationUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-QKTHMVQQ.js.map