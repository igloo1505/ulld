import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema';
import { EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema } from './EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { DietUpdategoalsInputSchema } from './DietUpdategoalsInputSchema';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema } from './DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema';
import { TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema } from './TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema';

export const DietUncheckedUpdateWithoutHealthReportInputSchema: z.ZodType<Prisma.DietUncheckedUpdateWithoutHealthReportInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activelyFollowing: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gf: z.union([ z.lazy(() => TERTIARY_TOGGLESchema),z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema) ]).optional(),
  vegan: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pescatarian: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  vegetarian: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fasting: z.union([ z.lazy(() => TERTIARY_TOGGLESchema),z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema) ]).optional(),
  cardioTraining: z.union([ z.lazy(() => TERTIARY_TOGGLESchema),z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema) ]).optional(),
  weightTraining: z.union([ z.lazy(() => TERTIARY_TOGGLESchema),z.lazy(() => EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema) ]).optional(),
  carb: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pro: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fat: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  goals: z.union([ z.lazy(() => DietUpdategoalsInputSchema),z.lazy(() => DIETARY_GOALSchema).array() ]).optional(),
  created: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema).optional()
}).strict();

export default DietUncheckedUpdateWithoutHealthReportInputSchema;
