import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { FloatFilterSchema } from './FloatFilterSchema.js';
import { DietListRelationFilterSchema } from './DietListRelationFilterSchema.js';
import { ServingListRelationFilterSchema } from './ServingListRelationFilterSchema.js';
export const DietaryItemWhereUniqueInputSchema: z.ZodType<Prisma.DietaryItemWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => DietaryItemWhereInputSchema),z.lazy(() => DietaryItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DietaryItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DietaryItemWhereInputSchema),z.lazy(() => DietaryItemWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  barcode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gi: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  calsPerOz: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  glutenFree: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  minimalFructose: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  natural: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  organic: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  impactScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  Diet: z.lazy(() => DietListRelationFilterSchema).optional(),
  Serving: z.lazy(() => ServingListRelationFilterSchema).optional()
}).strict());
export default DietaryItemWhereUniqueInputSchema;