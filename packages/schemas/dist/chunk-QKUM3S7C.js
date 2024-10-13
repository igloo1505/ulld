import {
  DietUncheckedUpdateWithoutItemsInputSchema
} from "./chunk-ZA37FJS3.js";
import {
  DietUpdateWithoutItemsInputSchema
} from "./chunk-QCKXQ2AR.js";
import {
  DietCreateWithoutItemsInputSchema
} from "./chunk-IIB3L6LN.js";
import {
  DietUncheckedCreateWithoutItemsInputSchema
} from "./chunk-DJGYQYYB.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

// src/database/inputTypeSchemas/DietUpsertWithWhereUniqueWithoutItemsInputSchema.ts
import { z } from "zod";
var DietUpsertWithWhereUniqueWithoutItemsInputSchema = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  update: z.union([z.lazy(() => DietUpdateWithoutItemsInputSchema), z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema)]),
  create: z.union([z.lazy(() => DietCreateWithoutItemsInputSchema), z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietUpsertWithWhereUniqueWithoutItemsInputSchema_default = DietUpsertWithWhereUniqueWithoutItemsInputSchema;

export {
  DietUpsertWithWhereUniqueWithoutItemsInputSchema,
  DietUpsertWithWhereUniqueWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-QKUM3S7C.js.map