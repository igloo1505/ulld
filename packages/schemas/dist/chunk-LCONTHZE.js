import {
  DietUncheckedUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-GTHEIMR4.js";
import {
  DietUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-LO75OSOS.js";
import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-HOMBO5R4.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-5XHCT3BN.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-LCONTHZE.js.map