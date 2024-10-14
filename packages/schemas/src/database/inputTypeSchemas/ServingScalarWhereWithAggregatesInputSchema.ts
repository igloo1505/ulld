import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema } from './EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';

export const ServingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ServingScalarWhereWithAggregatesInputSchema),z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServingScalarWhereWithAggregatesInputSchema),z.lazy(() => ServingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  dietaryItemId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  quant_oz: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  quant_guess: z.union([ z.lazy(() => EnumQUANTITY_GUESSNullableWithAggregatesFilterSchema),z.lazy(() => QUANTITY_GUESSSchema) ]).optional().nullable(),
}).strict();

export default ServingScalarWhereWithAggregatesInputSchema;
