import {
  DietUncheckedUpdateWithoutItemsInputSchema
} from "./chunk-ZA37FJS3.js";
import {
  DietUpdateWithoutItemsInputSchema
} from "./chunk-QCKXQ2AR.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

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
//# sourceMappingURL=chunk-OBLRQTSF.js.map