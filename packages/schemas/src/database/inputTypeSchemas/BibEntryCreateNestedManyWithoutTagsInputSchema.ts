import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutTagsInputSchema } from './BibEntryCreateWithoutTagsInputSchema';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from './BibEntryUncheckedCreateWithoutTagsInputSchema';
import { BibEntryCreateOrConnectWithoutTagsInputSchema } from './BibEntryCreateOrConnectWithoutTagsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTagsInputSchema),z.lazy(() => BibEntryCreateWithoutTagsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutTagsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryCreateNestedManyWithoutTagsInputSchema;
