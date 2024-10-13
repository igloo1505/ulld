import {
  DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema
} from "./chunk-SFVAOV46.js";
import {
  DietUpsertWithoutPeriodsFollowedInputSchema
} from "./chunk-LVFHR3IV.js";
import {
  DietUncheckedUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-BJXTFJTX.js";
import {
  DietUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-EYFB44S5.js";
import {
  DietCreateOrConnectWithoutPeriodsFollowedInputSchema
} from "./chunk-XUZW735L.js";
import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-LA7HVCOU.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-THFBWXB3.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/inputTypeSchemas/DietUpdateOneWithoutPeriodsFollowedNestedInputSchema.ts
import { z } from "zod";
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  upsert: z.lazy(() => DietUpsertWithoutPeriodsFollowedInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DietWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DietWhereInputSchema)]).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema;

export {
  DietUpdateOneWithoutPeriodsFollowedNestedInputSchema,
  DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default
};
//# sourceMappingURL=chunk-2AJB4TJB.js.map