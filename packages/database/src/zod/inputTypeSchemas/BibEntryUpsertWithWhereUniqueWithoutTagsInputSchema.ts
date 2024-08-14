import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutTagsInputSchema } from './BibEntryUpdateWithoutTagsInputSchema';
import { BibEntryUncheckedUpdateWithoutTagsInputSchema } from './BibEntryUncheckedUpdateWithoutTagsInputSchema';
import { BibEntryCreateWithoutTagsInputSchema } from './BibEntryCreateWithoutTagsInputSchema';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from './BibEntryUncheckedCreateWithoutTagsInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema;
