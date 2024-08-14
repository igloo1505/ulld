import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DietListRelationFilterSchema } from './DietListRelationFilterSchema';
import { ServingListRelationFilterSchema } from './ServingListRelationFilterSchema';

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
