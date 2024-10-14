import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutTagsInputSchema } from './BibEntryUncheckedUpdateManyWithoutTagsInputSchema';

export const BibEntryUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutTagsInputSchema;
