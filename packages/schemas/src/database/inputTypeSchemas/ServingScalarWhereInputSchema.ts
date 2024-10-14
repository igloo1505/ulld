import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { EnumQUANTITY_GUESSNullableFilterSchema } from './EnumQUANTITY_GUESSNullableFilterSchema';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';

export const ServingScalarWhereInputSchema: z.ZodType<Prisma.ServingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServingScalarWhereInputSchema),z.lazy(() => ServingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServingScalarWhereInputSchema),z.lazy(() => ServingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  dietaryItemId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quant_oz: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  quant_guess: z.union([ z.lazy(() => EnumQUANTITY_GUESSNullableFilterSchema),z.lazy(() => QUANTITY_GUESSSchema) ]).optional().nullable(),
}).strict();

export default ServingScalarWhereInputSchema;
