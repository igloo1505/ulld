import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutTagsInputSchema } from './BibEntryUpdateWithoutTagsInputSchema';
import { BibEntryUncheckedUpdateWithoutTagsInputSchema } from './BibEntryUncheckedUpdateWithoutTagsInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema;
