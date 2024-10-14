import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibCreateWithoutEntriesInputSchema } from './BibCreateWithoutEntriesInputSchema';
import { BibUncheckedCreateWithoutEntriesInputSchema } from './BibUncheckedCreateWithoutEntriesInputSchema';
import { BibCreateOrConnectWithoutEntriesInputSchema } from './BibCreateOrConnectWithoutEntriesInputSchema';
import { BibWhereUniqueInputSchema } from './BibWhereUniqueInputSchema';

export const BibCreateNestedOneWithoutEntriesInputSchema: z.ZodType<Prisma.BibCreateNestedOneWithoutEntriesInput> = z.object({
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  connect: z.lazy(() => BibWhereUniqueInputSchema).optional()
}).strict();

export default BibCreateNestedOneWithoutEntriesInputSchema;
