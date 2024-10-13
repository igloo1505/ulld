import {
  TimePeriodCreateManyDietInputEnvelopeSchema
} from "./chunk-TXGYCCN5.js";
import {
  TimePeriodCreateOrConnectWithoutDietInputSchema
} from "./chunk-755NS5XJ.js";
import {
  TimePeriodCreateWithoutDietInputSchema
} from "./chunk-ZVLKBSUN.js";
import {
  TimePeriodUncheckedCreateWithoutDietInputSchema
} from "./chunk-UQHMJYHV.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";

// src/database/inputTypeSchemas/TimePeriodCreateNestedManyWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodCreateNestedManyWithoutDietInputSchema = z.object({
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema), z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional()
}).strict();
var TimePeriodCreateNestedManyWithoutDietInputSchema_default = TimePeriodCreateNestedManyWithoutDietInputSchema;

export {
  TimePeriodCreateNestedManyWithoutDietInputSchema,
  TimePeriodCreateNestedManyWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-QC4S7AB6.js.map