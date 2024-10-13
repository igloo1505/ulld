import {
  DietUncheckedUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-BJXTFJTX.js";
import {
  DietUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-EYFB44S5.js";
import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-LA7HVCOU.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-THFBWXB3.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/inputTypeSchemas/DietUpsertWithoutPeriodsFollowedInputSchema.ts
import { z } from "zod";
var DietUpsertWithoutPeriodsFollowedInputSchema = z.object({
  update: z.union([z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]),
  create: z.union([z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]),
  where: z.lazy(() => DietWhereInputSchema).optional()
}).strict();
var DietUpsertWithoutPeriodsFollowedInputSchema_default = DietUpsertWithoutPeriodsFollowedInputSchema;

export {
  DietUpsertWithoutPeriodsFollowedInputSchema,
  DietUpsertWithoutPeriodsFollowedInputSchema_default
};
//# sourceMappingURL=chunk-LVFHR3IV.js.map