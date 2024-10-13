import {
  DietaryItemUpdateToOneWithWhereWithoutServingInputSchema
} from "./chunk-SZILSGIL.js";
import {
  DietaryItemUpsertWithoutServingInputSchema
} from "./chunk-QQ5WTEKR.js";
import {
  DietaryItemUncheckedUpdateWithoutServingInputSchema
} from "./chunk-QIQKPT3Z.js";
import {
  DietaryItemUpdateWithoutServingInputSchema
} from "./chunk-L6EJV2L7.js";
import {
  DietaryItemCreateOrConnectWithoutServingInputSchema
} from "./chunk-ZDNKPD2P.js";
import {
  DietaryItemCreateWithoutServingInputSchema
} from "./chunk-3BY65Z73.js";
import {
  DietaryItemUncheckedCreateWithoutServingInputSchema
} from "./chunk-XMDAQLVI.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";

// src/database/inputTypeSchemas/DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema.ts
import { z } from "zod";
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  upsert: z.lazy(() => DietaryItemUpsertWithoutServingInputSchema).optional(),
  connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => DietaryItemUpdateToOneWithWhereWithoutServingInputSchema), z.lazy(() => DietaryItemUpdateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema)]).optional()
}).strict();
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema;

export {
  DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema,
  DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default
};
//# sourceMappingURL=chunk-PBYWS56X.js.map