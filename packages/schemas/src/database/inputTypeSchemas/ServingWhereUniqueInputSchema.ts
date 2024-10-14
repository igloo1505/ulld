import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServingWhereInputSchema } from './ServingWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { EnumQUANTITY_GUESSNullableFilterSchema } from './EnumQUANTITY_GUESSNullableFilterSchema';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';
import { DietaryItemRelationFilterSchema } from './DietaryItemRelationFilterSchema';
import { DietaryItemWhereInputSchema } from './DietaryItemWhereInputSchema';

export const ServingWhereUniqueInputSchema: z.ZodType<Prisma.ServingWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ServingWhereInputSchema),z.lazy(() => ServingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServingWhereInputSchema),z.lazy(() => ServingWhereInputSchema).array() ]).optional(),
  dietaryItemId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  quant_oz: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  quant_guess: z.union([ z.lazy(() => EnumQUANTITY_GUESSNullableFilterSchema),z.lazy(() => QUANTITY_GUESSSchema) ]).optional().nullable(),
  item: z.union([ z.lazy(() => DietaryItemRelationFilterSchema),z.lazy(() => DietaryItemWhereInputSchema) ]).optional(),
}).strict());

export default ServingWhereUniqueInputSchema;
