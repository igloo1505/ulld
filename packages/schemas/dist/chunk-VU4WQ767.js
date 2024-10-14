import {
  TimePeriodUpdateManyWithoutDietNestedInputSchema
} from "./chunk-5JQY6MFJ.js";
import {
  DietaryItemUpdateManyWithoutDietNestedInputSchema
} from "./chunk-3TXP5DMF.js";
import {
  HealthReportUpdateManyWithoutCurrentDietNestedInputSchema
} from "./chunk-FGZ2CSMN.js";
import {
  DietUpdategoalsInputSchema
} from "./chunk-E3GOTFX5.js";
import {
  EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema
} from "./chunk-LVS4FGLV.js";
import {
  DIETARY_GOALSchema
} from "./chunk-LRTPFMPI.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GNOT4FVG.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/DietUpdateInputSchema.ts
import { z } from "zod";
var DietUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  summary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  activelyFollowing: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  gf: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  vegan: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  pescatarian: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  vegetarian: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  fasting: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  cardioTraining: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  weightTraining: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  carb: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pro: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  fat: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  goals: z.union([z.lazy(() => DietUpdategoalsInputSchema), z.lazy(() => DIETARY_GOALSchema).array()]).optional(),
  created: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  items: z.lazy(() => DietaryItemUpdateManyWithoutDietNestedInputSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodUpdateManyWithoutDietNestedInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportUpdateManyWithoutCurrentDietNestedInputSchema).optional()
}).strict();
var DietUpdateInputSchema_default = DietUpdateInputSchema;

export {
  DietUpdateInputSchema,
  DietUpdateInputSchema_default
};
//# sourceMappingURL=chunk-VU4WQ767.js.map