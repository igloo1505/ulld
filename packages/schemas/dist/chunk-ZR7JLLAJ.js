import {
  EquationUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-VN4TVY3S.js";
import {
  EquationScalarWhereInputSchema
} from "./chunk-KJCPJMDE.js";
import {
  EquationUpdateManyMutationInputSchema
} from "./chunk-A6JZCD5I.js";

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
//# sourceMappingURL=chunk-ZR7JLLAJ.js.map