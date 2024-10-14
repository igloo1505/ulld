import {
  DietaryItemCreateOrConnectWithoutServingInputSchema
} from "./chunk-SWZKGCVR.js";
import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-FGGFKGPZ.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-LUTNIQK7.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";

// src/database/inputTypeSchemas/DietaryItemCreateNestedOneWithoutServingInputSchema.ts
import { z } from "zod";
var DietaryItemCreateNestedOneWithoutServingInputSchema = z.object({
  create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional()
}).strict();
var DietaryItemCreateNestedOneWithoutServingInputSchema_default = DietaryItemCreateNestedOneWithoutServingInputSchema;

export {
  DietaryItemCreateNestedOneWithoutServingInputSchema,
  DietaryItemCreateNestedOneWithoutServingInputSchema_default
};
//# sourceMappingURL=chunk-3PGZCI7Z.js.map