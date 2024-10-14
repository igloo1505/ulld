import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutTopicsInputSchema } from './BibEntryCreateWithoutTopicsInputSchema';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from './BibEntryUncheckedCreateWithoutTopicsInputSchema';
import { BibEntryCreateOrConnectWithoutTopicsInputSchema } from './BibEntryCreateOrConnectWithoutTopicsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryCreateWithoutTopicsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryCreateNestedManyWithoutTopicsInputSchema;
