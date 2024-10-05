import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema';

export const EnumDIETARY_GOALNullableListFilterSchema: z.ZodType<Prisma.EnumDIETARY_GOALNullableListFilter> = z.object({
  equals: z.lazy(() => DIETARY_GOALSchema).array().optional().nullable(),
  has: z.lazy(() => DIETARY_GOALSchema).optional().nullable(),
  hasEvery: z.lazy(() => DIETARY_GOALSchema).array().optional(),
  hasSome: z.lazy(() => DIETARY_GOALSchema).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export default EnumDIETARY_GOALNullableListFilterSchema;
