import {
  EquationUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-KKD6UAFV.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-34ND25JL.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-XCBYVXYO.js";

// src/database/inputTypeSchemas/EquationUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var EquationUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var EquationUpdateManyWithWhereWithoutTagsInputSchema_default = EquationUpdateManyWithWhereWithoutTagsInputSchema;

export {
  EquationUpdateManyWithWhereWithoutTagsInputSchema,
  EquationUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-GR7QYUAO.js.map