import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutTopicsInputSchema } from '../BibEntryCreateWithoutTopicsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from '../BibEntryUncheckedCreateWithoutTopicsInputSchema.js';
import { BibEntryCreateOrConnectWithoutTopicsInputSchema } from '../BibEntryCreateOrConnectWithoutTopicsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
export const BibEntryCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryCreateWithoutTopicsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default BibEntryCreateNestedManyWithoutTopicsInputSchema;