import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibCreateWithoutEntriesInputSchema } from './BibCreateWithoutEntriesInputSchema';
import { BibUncheckedCreateWithoutEntriesInputSchema } from './BibUncheckedCreateWithoutEntriesInputSchema';
import { BibCreateOrConnectWithoutEntriesInputSchema } from './BibCreateOrConnectWithoutEntriesInputSchema';
import { BibUpsertWithoutEntriesInputSchema } from './BibUpsertWithoutEntriesInputSchema';
import { BibWhereInputSchema } from './BibWhereInputSchema';
import { BibWhereUniqueInputSchema } from './BibWhereUniqueInputSchema';
import { BibUpdateToOneWithWhereWithoutEntriesInputSchema } from './BibUpdateToOneWithWhereWithoutEntriesInputSchema';
import { BibUpdateWithoutEntriesInputSchema } from './BibUpdateWithoutEntriesInputSchema';
import { BibUncheckedUpdateWithoutEntriesInputSchema } from './BibUncheckedUpdateWithoutEntriesInputSchema';

export const BibUpdateOneWithoutEntriesNestedInputSchema: z.ZodType<Prisma.BibUpdateOneWithoutEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  upsert: z.lazy(() => BibUpsertWithoutEntriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BibWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BibWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BibWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BibUpdateToOneWithWhereWithoutEntriesInputSchema),z.lazy(() => BibUpdateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema) ]).optional(),
}).strict();

export default BibUpdateOneWithoutEntriesNestedInputSchema;
