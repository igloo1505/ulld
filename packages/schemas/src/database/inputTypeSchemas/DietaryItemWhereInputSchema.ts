import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DietListRelationFilterSchema } from './DietListRelationFilterSchema';
import { ServingListRelationFilterSchema } from './ServingListRelationFilterSchema';

export const DietaryItemWhereInputSchema: z.ZodType<Prisma.DietaryItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DietaryItemWhereInputSchema),z.lazy(() => DietaryItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DietaryItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DietaryItemWhereInputSchema),z.lazy(() => DietaryItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  barcode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gi: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  calsPerOz: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  glutenFree: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  minimalFructose: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  natural: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  organic: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  impactScore: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  Diet: z.lazy(() => DietListRelationFilterSchema).optional(),
  Serving: z.lazy(() => ServingListRelationFilterSchema).optional()
}).strict();

export default DietaryItemWhereInputSchema;
