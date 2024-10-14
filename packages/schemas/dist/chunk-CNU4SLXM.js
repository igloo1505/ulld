import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-HOMBO5R4.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-5XHCT3BN.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

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
//# sourceMappingURL=chunk-CNU4SLXM.js.map