import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema.js';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema.js';
import { EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema } from './EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema.js';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema.js';
import { DietUpdategoalsInputSchema } from './DietUpdategoalsInputSchema.js';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { DietaryItemUpdateManyWithoutDietNestedInputSchema } from './DietaryItemUpdateManyWithoutDietNestedInputSchema.js';
import { HealthReportUpdateManyWithoutCurrentDietNestedInputSchema } from './HealthReportUpdateManyWithoutCurrentDietNestedInputSchema.js';
export const DietUpdateWithoutPeriodsFollowedInputSchema = z.object({
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
    HealthReport: z.lazy(() => HealthReportUpdateManyWithoutCurrentDietNestedInputSchema).optional()
}).strict();
export default DietUpdateWithoutPeriodsFollowedInputSchema;
