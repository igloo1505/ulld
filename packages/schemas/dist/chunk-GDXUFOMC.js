import {
  DietUncheckedUpdateWithoutItemsInputSchema
} from "./chunk-LJY32BDB.js";
import {
  DietUpdateWithoutItemsInputSchema
} from "./chunk-7VL3SCPV.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

// src/database/inputTypeSchemas/DietUpdateWithWhereUniqueWithoutItemsInputSchema.ts
import { z } from "zod";
var DietUpdateWithWhereUniqueWithoutItemsInputSchema = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  data: z.union([z.lazy(() => DietUpdateWithoutItemsInputSchema), z.lazy(() => DietUncheckedUpdateWithoutItemsInputSchema)])
}).strict();
var DietUpdateWithWhereUniqueWithoutItemsInputSchema_default = DietUpdateWithWhereUniqueWithoutItemsInputSchema;

export {
  DietUpdateWithWhereUniqueWithoutItemsInputSchema,
  DietUpdateWithWhereUniqueWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-GDXUFOMC.js.map