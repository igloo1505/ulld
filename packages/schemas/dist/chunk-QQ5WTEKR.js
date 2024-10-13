import {
  DietaryItemUncheckedUpdateWithoutServingInputSchema
} from "./chunk-QIQKPT3Z.js";
import {
  DietaryItemUpdateWithoutServingInputSchema
} from "./chunk-L6EJV2L7.js";
import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-3BY65Z73.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-XMDAQLVI.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/inputTypeSchemas/DietaryItemUpsertWithoutServingInputSchema.ts
import { z } from "zod";
var DietaryItemUpsertWithoutServingInputSchema = z.object({
  update: z.union([z.lazy(() => DietaryItemUpdateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema)]),
  create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)]),
  where: z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemUpsertWithoutServingInputSchema_default = DietaryItemUpsertWithoutServingInputSchema;

export {
  DietaryItemUpsertWithoutServingInputSchema,
  DietaryItemUpsertWithoutServingInputSchema_default
};
//# sourceMappingURL=chunk-QQ5WTEKR.js.map