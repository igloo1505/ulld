import {
  DietaryItemUncheckedUpdateWithoutServingInputSchema
} from "./chunk-6QQLUQTC.js";
import {
  DietaryItemUpdateWithoutServingInputSchema
} from "./chunk-3AP7PT4P.js";
import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-FGGFKGPZ.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-LUTNIQK7.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-7RUF3PAZ.js.map