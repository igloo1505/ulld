import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from '../IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from '../StringWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from '../StringNullableWithAggregatesFilterSchema.js';
import { IntNullableWithAggregatesFilterSchema } from '../IntNullableWithAggregatesFilterSchema.js';
import { FloatNullableWithAggregatesFilterSchema } from '../FloatNullableWithAggregatesFilterSchema.js';
import { BoolWithAggregatesFilterSchema } from '../BoolWithAggregatesFilterSchema.js';
import { FloatWithAggregatesFilterSchema } from '../FloatWithAggregatesFilterSchema.js';
export const DietaryItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DietaryItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema),z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema),z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  barcode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  gi: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  calsPerOz: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  glutenFree: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  minimalFructose: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  natural: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  organic: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  impactScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();
export default DietaryItemScalarWhereWithAggregatesInputSchema;