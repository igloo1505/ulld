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
//# sourceMappingURL=chunk-VGO4NNJF.js.map