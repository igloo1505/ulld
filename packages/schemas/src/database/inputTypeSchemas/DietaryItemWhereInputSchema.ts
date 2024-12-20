import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { FloatFilterSchema } from './FloatFilterSchema.js';
import { DietListRelationFilterSchema } from './DietListRelationFilterSchema.js';
import { ServingListRelationFilterSchema } from './ServingListRelationFilterSchema.js';
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