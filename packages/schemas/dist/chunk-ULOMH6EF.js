import {
  TimePeriodUpdateManyWithoutDietNestedInputSchema
} from "./chunk-ZBXNZBQB.js";
import {
  DietaryItemUpdateManyWithoutDietNestedInputSchema
} from "./chunk-JMSHUP2B.js";
import {
  DietUpdategoalsInputSchema
} from "./chunk-R2ZRL5U4.js";
import {
  EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema
} from "./chunk-M7OGXSEM.js";
import {
  DIETARY_GOALSchema
} from "./chunk-FV4V5SCW.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";
import {
  NullableFloatFieldUpdateOperationsInputSchema
} from "./chunk-GYXIQA26.js";
import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-RAFX4YSS.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DietUpdateWithoutHealthReportInputSchema.ts
import { z } from "zod";
var DietUpdateWithoutHealthReportInputSchema = z.object({
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
  periodsFollowed: z.lazy(() => TimePeriodUpdateManyWithoutDietNestedInputSchema).optional()
}).strict();
var DietUpdateWithoutHealthReportInputSchema_default = DietUpdateWithoutHealthReportInputSchema;

export {
  DietUpdateWithoutHealthReportInputSchema,
  DietUpdateWithoutHealthReportInputSchema_default
};
//# sourceMappingURL=chunk-ULOMH6EF.js.map