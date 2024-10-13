import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from '../NullableIntFieldUpdateOperationsInputSchema.js';
import { NullableFloatFieldUpdateOperationsInputSchema } from '../NullableFloatFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from '../BoolFieldUpdateOperationsInputSchema.js';
import { FloatFieldUpdateOperationsInputSchema } from '../FloatFieldUpdateOperationsInputSchema.js';
import { ServingUpdateManyWithoutItemNestedInputSchema } from '../ServingUpdateManyWithoutItemNestedInputSchema.js';
export const DietaryItemUpdateWithoutDietInputSchema: z.ZodType<Prisma.DietaryItemUpdateWithoutDietInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  barcode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gi: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  calsPerOz: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  glutenFree: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  minimalFructose: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  natural: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  organic: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  impactScore: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  Serving: z.lazy(() => ServingUpdateManyWithoutItemNestedInputSchema).optional()
}).strict();
export default DietaryItemUpdateWithoutDietInputSchema;