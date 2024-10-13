import {
  TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema
} from "./chunk-4XQURL3I.js";
import {
  TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema
} from "./chunk-I3RBM4WQ.js";
import {
  TimePeriodUpdateManyWithWhereWithoutDietInputSchema
} from "./chunk-UTWCFLNM.js";
import {
  TimePeriodScalarWhereInputSchema
} from "./chunk-AZDOXLE6.js";
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

// src/database/inputTypeSchemas/TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema = z.object({
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema), z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema), z.lazy(() => TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema), z.lazy(() => TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TimePeriodUpdateManyWithWhereWithoutDietInputSchema), z.lazy(() => TimePeriodUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TimePeriodScalarWhereInputSchema), z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional()
}).strict();
var TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema_default = TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema;

export {
  TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema,
  TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema_default
};
//# sourceMappingURL=chunk-RD5HKRAC.js.map