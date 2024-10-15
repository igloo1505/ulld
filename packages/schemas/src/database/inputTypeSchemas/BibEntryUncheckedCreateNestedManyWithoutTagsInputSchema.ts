import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutTagsInputSchema } from './BibEntryCreateWithoutTagsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from './BibEntryUncheckedCreateWithoutTagsInputSchema.js';
import { BibEntryCreateOrConnectWithoutTagsInputSchema } from './BibEntryCreateOrConnectWithoutTagsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
export const BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTagsInputSchema),z.lazy(() => BibEntryCreateWithoutTagsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutTagsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema;