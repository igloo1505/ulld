import {
  EquationUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-EPF2SABQ.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-KJCPJMDE.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-A6JZCD5I.js";

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
//# sourceMappingURL=chunk-RT4DCHN7.js.map