import {
  DietUncheckedUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-GTHEIMR4.js";
import {
  DietUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-LO75OSOS.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/inputTypeSchemas/DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema.ts
import { z } from "zod";
var DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema = z.object({
  where: z.lazy(() => DietWhereInputSchema).optional(),
  data: z.union([z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)])
}).strict();
var DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default = DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema;

export {
  DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema,
  DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema_default
};
//# sourceMappingURL=chunk-724KZQQD.js.map