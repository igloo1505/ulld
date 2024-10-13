import {
  DietUncheckedUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-BJXTFJTX.js";
import {
  DietUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-EYFB44S5.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-SFVAOV46.js.map