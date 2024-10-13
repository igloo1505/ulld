import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-LA7HVCOU.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-THFBWXB3.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutPeriodsFollowedInputSchema.ts
import { z } from "zod";
var DietCreateOrConnectWithoutPeriodsFollowedInputSchema = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema)])
}).strict();
var DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default = DietCreateOrConnectWithoutPeriodsFollowedInputSchema;

export {
  DietCreateOrConnectWithoutPeriodsFollowedInputSchema,
  DietCreateOrConnectWithoutPeriodsFollowedInputSchema_default
};
//# sourceMappingURL=chunk-XUZW735L.js.map