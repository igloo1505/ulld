import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibCreateWithoutEntriesInputSchema } from './BibCreateWithoutEntriesInputSchema.js';
import { BibUncheckedCreateWithoutEntriesInputSchema } from './BibUncheckedCreateWithoutEntriesInputSchema.js';
import { BibCreateOrConnectWithoutEntriesInputSchema } from './BibCreateOrConnectWithoutEntriesInputSchema.js';
import { BibWhereUniqueInputSchema } from './BibWhereUniqueInputSchema.js';
export const BibCreateNestedOneWithoutEntriesInputSchema: z.ZodType<Prisma.BibCreateNestedOneWithoutEntriesInput> = z.object({
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  connect: z.lazy(() => BibWhereUniqueInputSchema).optional()
}).strict();
export default BibCreateNestedOneWithoutEntriesInputSchema;